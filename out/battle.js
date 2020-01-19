"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var battle_data_1 = require("./battle_data");
var skill_effect_1 = require("./data/skill_effect");
var battle_info_1 = require("./battle_info");
var SmartHTMLElement_1 = require("./SmartHTMLElement");
var battle_table_1 = require("./battle_table");
var battle_ai_1 = require("./battle_ai");
var battle_action_btns_1 = require("./battle_action_btns");
var log_1 = require("./log");
var BattleAction;
(function (BattleAction) {
    BattleAction[BattleAction["Attack"] = 0] = "Attack";
    // Inventory,
    // Demand,
})(BattleAction = exports.BattleAction || (exports.BattleAction = {}));
// This class should be instantiated and destroyed without any move
// happening or Actors being destroyed.
var Battle = /** @class */ (function () {
    function Battle(fighters) {
        var _a, _b;
        this.turn_idx = 0;
        this.battle_idx = -1;
        this.current_action = null;
        Battle.Instance = this;
        this.info_title = new SmartHTMLElement_1.SmartHTMLElement("info_title");
        this.info_description = new SmartHTMLElement_1.SmartHTMLElement("info_description");
        this.more_info = new SmartHTMLElement_1.SmartHTMLElement("more_info_div");
        this.fighters = new Map();
        this.fighters.set(battle_data_1.BattleSide.Our, []);
        this.fighters.set(battle_data_1.BattleSide.Their, []);
        this.turn_order = [];
        this.battle_action_btns = new battle_action_btns_1.BattleActionBtns();
        this.continue_btn = document.getElementById("continue_btn");
        this.back_btn = document.getElementById("back_btn");
        for (var i = 0; i < fighters.length; i++) {
            var side = fighters[i].data.side;
            (_a = this.fighters.get(side)) === null || _a === void 0 ? void 0 : _a.push(fighters[i]);
            this.turn_order.push(new battle_data_1.BattleIndex(side, (((_b = this.fighters.get(side)) === null || _b === void 0 ? void 0 : _b.length) || 0) - 1));
        }
        this.battle_table = new battle_table_1.BattleTable(this.fighters.get(battle_data_1.BattleSide.Our), this.fighters.get(battle_data_1.BattleSide.Their));
        this.info_description.set_inner_html("You've been attacked by demons!");
        this.set_continue_btn(true, function () {
            Battle.Instance.next_turn();
            Battle.Instance.set_continue_btn(false);
        });
        this.set_back_btn(false);
    }
    Battle.prototype.update = function () {
        // Check for actor btn click.
        var last_battle_table_click = this.battle_table.get_last_click();
        if (last_battle_table_click != null && this.current_action != null) {
            this.execute_player_turn(last_battle_table_click);
        }
        // Update table for new fighter values.
        this.battle_table.update(this.fighters.get(battle_data_1.BattleSide.Our), this.fighters.get(battle_data_1.BattleSide.Their));
    };
    // Increment turn index, take turn, render changes.
    Battle.prototype.next_turn = function () {
        this.turn_idx += 1;
        this.battle_idx = (this.battle_idx + 1) % this.turn_order.length;
        this.set_up_turn();
    };
    Battle.prototype.set_up_turn = function () {
        var fighter = this.current_fighter();
        battle_info_1.BattleInfo.actor_name = fighter.name;
        if (fighter.data.modded_base_stats().hp <= 0) {
            battle_info_1.BattleInfo.actor_name = "";
            this.set_auto_next_interval();
            return;
        }
        battle_info_1.BattleInfo.description = "";
        this.battle_action_btns.set_visible(false);
        if (fighter.data.side == battle_data_1.BattleSide.Our && fighter.name == "Player") {
            // For Player, let them choose what to do.
            this.set_up_player_turn(fighter);
        }
        else {
            // Otherwise, let AI choose.
            var result = battle_ai_1.ai_take_turn(fighter, this.fighters);
            // Take the resulting action.
            this.take_battle_action(fighter, result[0], result[1]);
            fighter.data.before_end_of_turn();
            this.set_auto_next_interval();
        }
    };
    Battle.prototype.set_auto_next_interval = function () {
        var SECONDS = 0.5;
        window.setTimeout(auto_next_interval_callback, SECONDS * 1000, this.turn_idx);
    };
    Battle.prototype.is_auto_next_ready = function (interval_idx) {
        return interval_idx == this.turn_idx;
    };
    Battle.prototype.current_fighter = function () {
        var turn_index = this.turn_order[this.battle_idx];
        return this.fighters.get(turn_index.side)[turn_index.index];
    };
    Battle.prototype.set_up_player_turn = function (fighter) {
        this.battle_action_btns.set_visible(true);
        var button_index = 0;
        this.battle_action_btns.set_button_skill(button_index++, BattleAction.Attack);
        for (var i = 0; i < fighter.data.skills.length; i++) {
            this.battle_action_btns.set_button_skill(button_index++, fighter.data.skills[i]);
        }
        this.battle_action_btns.clear_buttons(button_index);
        this.set_continue_btn(false);
        this.set_back_btn(false, function () {
            Battle.Instance.set_up_player_turn(fighter);
        });
        this.render();
    };
    Battle.prototype.execute_player_turn = function (last_battle_table_click) {
        this.set_back_btn(false);
        if (this.current_action == BattleAction.Attack) {
            this.take_battle_action(this.current_fighter(), null, [
                last_battle_table_click
            ]);
        }
        else {
            this.take_battle_action(this.current_fighter(), this.current_action, [
                last_battle_table_click
            ]);
        }
        this.current_action = null;
        this.set_auto_next_interval();
    };
    Battle.prototype.render = function () {
        this.info_title.set_inner_html(battle_info_1.BattleInfo.actor_name);
        this.info_description.set_inner_html(battle_info_1.BattleInfo.description);
    };
    Battle.prototype.take_battle_action = function (fighter, skill, targets) {
        fighter.data.mark_just_acted();
        if (skill == null) {
            log_1.Log.push(this.current_fighter().name + " attacked.");
            var damage = Math.floor(fighter.data.modded_base_stats().st +
                fighter.data.modded_base_stats().dx);
            for (var t = 0; t < targets.length; t++) {
                targets[t].data.take_damage(damage);
            }
        }
        else {
            fighter.data.mod_stats.mp -= skill.cost;
            log_1.Log.push(this.current_fighter().name + " used `" + skill.name + "`.");
            for (var t = 0; t < targets.length; t++) {
                skill_effect_1.resolve_skill_effect(fighter, skill, targets[t]);
            }
        }
        this.battle_action_btns.clear_buttons();
        this.battle_table.set_all_btns_enabled(false);
        this.render();
    };
    // returns null if battle is not over.
    Battle.prototype.battle_winner = function () {
        var winner = battle_data_1.BattleSide.Their;
        for (var i = 0; i < this.fighters.get(battle_data_1.BattleSide.Our).length; i++) {
            if (this.fighters.get(battle_data_1.BattleSide.Our)[i].data.modded_base_stats().hp > 0) {
                winner = battle_data_1.BattleSide.Our;
                break;
            }
        }
        if (winner == battle_data_1.BattleSide.Their) {
            return winner;
        }
        for (var i = 0; i < this.fighters.get(battle_data_1.BattleSide.Their).length; i++) {
            if (this.fighters.get(battle_data_1.BattleSide.Their)[i].data.modded_base_stats().hp > 0) {
                winner = null;
                break;
            }
        }
        return winner;
    };
    Battle.prototype.set_continue_btn = function (visible, on_click) {
        if (on_click === void 0) { on_click = null; }
        this.continue_btn.style.display = visible ? "" : "none";
        this.continue_btn.onclick = on_click || this.continue_btn.onclick;
    };
    Battle.prototype.set_back_btn = function (visible, on_click) {
        if (on_click === void 0) { on_click = null; }
        this.back_btn.style.display = visible ? "" : "none";
        this.back_btn.onclick = on_click || this.back_btn.onclick;
    };
    Battle.prototype.end = function () {
        this.battle_action_btns.clear_buttons();
        this.set_continue_btn(false);
        this.set_back_btn(false);
        this.info_title.set_inner_html("");
        this.info_description.set_inner_html("");
        battle_info_1.BattleInfo.clear();
        Battle.Instance = null;
    };
    Battle.Instance = null;
    return Battle;
}());
exports.Battle = Battle;
function auto_next_interval_callback(idx) {
    var _a, _b;
    if ((_a = Battle.Instance) === null || _a === void 0 ? void 0 : _a.is_auto_next_ready(idx)) {
        (_b = Battle.Instance) === null || _b === void 0 ? void 0 : _b.next_turn();
    }
}
