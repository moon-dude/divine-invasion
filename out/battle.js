"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var battle_data_1 = require("./battle_data");
var skill_effect_1 = require("./data/skill_effect");
var battle_info_1 = require("./battle_info");
var SmartHTMLElement_1 = require("./SmartHTMLElement");
var battle_table_1 = require("./battle_table");
var battle_ai_1 = require("./battle_ai");
var battle_action_btns_1 = require("./battle_action_btns");
// This class should be instantiated and destroyed without any move
// happening or Actors being destroyed.
var Battle = /** @class */ (function () {
    function Battle(fighters) {
        var _a, _b;
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
        for (var i = 0; i < fighters.length; i++) {
            var side = fighters[i].data.side;
            (_a = this.fighters.get(side)) === null || _a === void 0 ? void 0 : _a.push(fighters[i]);
            this.turn_order.push(new battle_data_1.BattleIndex(side, (((_b = this.fighters.get(side)) === null || _b === void 0 ? void 0 : _b.length) || 0) - 1));
        }
        this.battle_table = new battle_table_1.BattleTable(this.fighters.get(battle_data_1.BattleSide.Our), this.fighters.get(battle_data_1.BattleSide.Their));
    }
    Battle.prototype.update = function () {
        // Check for actor btn click.
        var last_battle_table_click = this.battle_table.get_last_click();
        if (last_battle_table_click != null && this.current_action != null) {
            this.execute_player_turn(last_battle_table_click);
        }
        // Update table for new fighter values.
        this.battle_table.update();
    };
    // Increment turn index, take turn, render changes.
    Battle.prototype.next_turn = function () {
        this.battle_idx = (this.battle_idx + 1) % this.turn_order.length;
        this.set_up_turn();
    };
    Battle.prototype.set_up_turn = function () {
        var fighter = this.current_fighter();
        battle_info_1.BattleInfo.actor_name = fighter.name;
        if (fighter.data.modded_base_stats().hp <= 0) {
            battle_info_1.BattleInfo.description = " is dead and can't attack! ";
            return;
        }
        this.battle_action_btns.set_visible(false);
        if (fighter.data.side == battle_data_1.BattleSide.Our) {
            // For Player, let them choose what to do.
            this.set_up_player_turn(fighter);
        }
        else {
            // Otherwise, let AI choose.
            var result = battle_ai_1.ai_take_turn(fighter, this.fighters);
            // Take the resulting action.
            this.take_battle_action(fighter, result[0], result[1]);
            fighter.data.before_end_of_turn();
        }
    };
    Battle.prototype.current_fighter = function () {
        var turn_index = this.turn_order[this.battle_idx];
        return this.fighters.get(turn_index.side)[turn_index.index];
    };
    Battle.prototype.set_up_player_turn = function (fighter) {
        this.battle_action_btns.set_visible(true);
        var button_index = 0;
        this.battle_action_btns.set_button_skill(button_index++, "Attack");
        for (var i = 0; i < fighter.data.skills.length; i++) {
            this.battle_action_btns.set_button_skill(button_index++, fighter.data.skills[i]);
        }
        this.battle_action_btns.clear_buttons(button_index);
        this.render();
    };
    Battle.prototype.execute_player_turn = function (last_battle_table_click) {
        if (this.current_action == "Attack") {
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
    };
    Battle.prototype.render = function () {
        this.info_title.set_inner_html(battle_info_1.BattleInfo.actor_name) + ": ";
        this.info_description.set_inner_html(battle_info_1.BattleInfo.description);
        this.more_info.set_inner_html(battle_info_1.BattleInfo.result);
        battle_info_1.BattleInfo.clear();
    };
    Battle.prototype.take_battle_action = function (fighter, skill, targets) {
        battle_info_1.BattleInfo.actor_name = fighter.name;
        if (skill == null) {
            battle_info_1.BattleInfo.description = "attacked. ";
            var damage = Math.floor(fighter.data.modded_base_stats().st +
                fighter.data.modded_base_stats().dx);
            battle_info_1.BattleInfo.result = "";
            for (var t = 0; t < targets.length; t++) {
                battle_info_1.BattleInfo.result += targets[t].name + " ";
                targets[t].data.take_damage(damage);
            }
        }
        else {
            fighter.data.mod_stats.mp -= skill.cost;
            battle_info_1.BattleInfo.description = "used `" + skill.name + "`. ";
            battle_info_1.BattleInfo.result = "";
            for (var t = 0; t < targets.length; t++) {
                battle_info_1.BattleInfo.result += targets[t].name + " ";
                skill_effect_1.resolve_skill_effect(fighter, skill, targets[t]);
            }
        }
        this.battle_action_btns.set_button_continue();
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
    return Battle;
}());
exports.Battle = Battle;
