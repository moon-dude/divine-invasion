"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var battle_data_1 = require("./battle_data");
var skill_effect_1 = require("./data/skill_effect");
var battle_table_1 = require("./battle_table");
var battle_ai_1 = require("./battle_ai");
var log_1 = require("./log");
var game_1 = require("./game");
var items_1 = require("./data/raw/items");
var skills_1 = require("./data/raw/skills");
var requests_1 = require("./requests");
var battle_player_1 = require("./battle_player");
var AttackAction = /** @class */ (function () {
    function AttackAction() {
    }
    return AttackAction;
}());
exports.AttackAction = AttackAction;
;
var InventoryAction = /** @class */ (function () {
    function InventoryAction(value) {
        this.item_name = value;
    }
    return InventoryAction;
}());
exports.InventoryAction = InventoryAction;
var SkillAction = /** @class */ (function () {
    function SkillAction(value) {
        this.skill_name = value;
    }
    return SkillAction;
}());
exports.SkillAction = SkillAction;
var RequestAction = /** @class */ (function () {
    function RequestAction(value) {
        this.request = value;
    }
    return RequestAction;
}());
exports.RequestAction = RequestAction;
// This class should be instantiated and destroyed without any move
// happening or Actors being destroyed.
var Battle = /** @class */ (function () {
    function Battle(fighters) {
        var _a, _b;
        this.turn_idx = 0;
        this.battle_idx = -1;
        this.current_action = null;
        this.fighters = new Map();
        this.fighters.set(battle_data_1.BattleSide.Our, []);
        this.fighters.set(battle_data_1.BattleSide.Their, []);
        this.turn_order = [];
        for (var i = 0; i < fighters.length; i++) {
            var side = fighters[i].side;
            (_a = this.fighters.get(side)) === null || _a === void 0 ? void 0 : _a.push(fighters[i]);
            this.turn_order.push(new battle_data_1.BattleIndex(side, (((_b = this.fighters.get(side)) === null || _b === void 0 ? void 0 : _b.length) || 0) - 1));
        }
        this.battle_table = new battle_table_1.BattleTable(this.fighters.get(battle_data_1.BattleSide.Our), this.fighters.get(battle_data_1.BattleSide.Their));
        game_1.Game.Instance.menu.push("You've been attacked by demons!", [
            [
                "Continue",
                function () {
                    game_1.Game.Instance.get_battle().next_turn();
                }
            ]
        ]);
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
        if (fighter.modded_base_stats().hp <= 0) {
            this.set_auto_next_interval();
            return;
        }
        if (fighter.side == battle_data_1.BattleSide.Our && fighter.name == "Player") {
            // For Player, let them choose what to do.
            battle_player_1.set_up_player_turn(fighter);
        }
        else {
            // Otherwise, let AI choose.
            var result = battle_ai_1.ai_take_turn(fighter, this.fighters);
            if (result[0] != null) {
                this.take_battle_action(fighter, result[0], result[1]);
            }
            // Take the resulting action.
            fighter.before_end_of_turn();
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
    Battle.prototype.execute_player_turn = function (last_battle_table_click) {
        game_1.Game.Instance.menu.clear();
        this.take_battle_action(this.current_fighter(), this.current_action, [
            last_battle_table_click
        ]);
        this.current_action = null;
        this.set_auto_next_interval();
    };
    Battle.prototype.take_battle_action = function (fighter, action, targets) {
        var _a;
        fighter.mark_just_acted();
        if (action instanceof AttackAction) {
            log_1.Log.push(this.current_fighter().name + " attacked.");
            var damage = Math.floor(fighter.modded_base_stats().st +
                fighter.modded_base_stats().dx);
            for (var t = 0; t < targets.length; t++) {
                targets[t].take_damage(damage);
            }
        }
        else if (action instanceof InventoryAction) {
            log_1.Log.push(this.current_fighter().name + " used `" + action.item_name + "`.");
            var item = items_1.ITEM_MAP.get(action.item_name);
            for (var t = 0; t < targets.length; t++) {
                (_a = item) === null || _a === void 0 ? void 0 : _a.effect(targets[t]);
            }
        }
        else if (action instanceof SkillAction) {
            var skill = skills_1.SKILL_MAP.get(action.skill_name);
            fighter.mod_stats.mp -= skill.cost;
            log_1.Log.push(this.current_fighter().name + " used `" + skill.name + "`.");
            for (var t = 0; t < targets.length; t++) {
                skill_effect_1.resolve_skill_effect(fighter, skill, targets[t]);
            }
        }
        else if (action instanceof RequestAction) {
            for (var t = 0; t < targets.length; t++) {
                var request_worked = requests_1.try_ai_request(fighter, targets[t], action.request);
                if (request_worked) {
                    requests_1.request_result(targets[t], action.request);
                }
                else {
                    log_1.Log.push(targets[t].name + " was not convinced.");
                }
            }
        }
        game_1.Game.Instance.menu.clear();
        this.battle_table.set_all_btns_enabled(false);
    };
    // returns null if battle is not over.
    Battle.prototype.battle_winner = function () {
        var winner = battle_data_1.BattleSide.Their;
        for (var i = 0; i < this.fighters.get(battle_data_1.BattleSide.Our).length; i++) {
            if (this.fighters.get(battle_data_1.BattleSide.Our)[i].modded_base_stats().hp > 0) {
                winner = battle_data_1.BattleSide.Our;
                break;
            }
        }
        if (winner == battle_data_1.BattleSide.Their) {
            return winner;
        }
        for (var i = 0; i < this.fighters.get(battle_data_1.BattleSide.Their).length; i++) {
            if (this.fighters.get(battle_data_1.BattleSide.Their)[i].modded_base_stats().hp > 0) {
                winner = null;
                break;
            }
        }
        return winner;
    };
    Battle.prototype.end = function () {
        game_1.Game.Instance.menu.clear();
    };
    return Battle;
}());
exports.Battle = Battle;
function auto_next_interval_callback(idx) {
    if (game_1.Game.Instance.get_battle().is_auto_next_ready(idx)) {
        game_1.Game.Instance.get_battle().next_turn();
    }
}
