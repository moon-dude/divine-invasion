"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var battle_data_1 = require("./battle_data");
var skill_effect_1 = require("./data/skill_effect");
var battle_table_1 = require("./battle_table");
var battle_ai_1 = require("./battle_ai");
var log_1 = require("./log");
var game_1 = require("./game");
var player_1 = require("./player");
var items_1 = require("./data/raw/items");
var BattleAction;
(function (BattleAction) {
    BattleAction[BattleAction["Attack"] = 0] = "Attack";
    BattleAction[BattleAction["Inventory"] = 1] = "Inventory";
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
        this.current_item = null;
        Battle.Instance = this;
        this.fighters = new Map();
        this.fighters.set(battle_data_1.BattleSide.Our, []);
        this.fighters.set(battle_data_1.BattleSide.Their, []);
        this.turn_order = [];
        for (var i = 0; i < fighters.length; i++) {
            var side = fighters[i].data.side;
            (_a = this.fighters.get(side)) === null || _a === void 0 ? void 0 : _a.push(fighters[i]);
            this.turn_order.push(new battle_data_1.BattleIndex(side, (((_b = this.fighters.get(side)) === null || _b === void 0 ? void 0 : _b.length) || 0) - 1));
        }
        this.battle_table = new battle_table_1.BattleTable(this.fighters.get(battle_data_1.BattleSide.Our), this.fighters.get(battle_data_1.BattleSide.Their));
        game_1.Game.Menu.push("You've been attacked by demons!", [
            [
                "Continue",
                function () {
                    Battle.Instance.next_turn();
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
        if (fighter.data.modded_base_stats().hp <= 0) {
            this.set_auto_next_interval();
            return;
        }
        if (fighter.data.side == battle_data_1.BattleSide.Our && fighter.name == "Player") {
            // For Player, let them choose what to do.
            this.set_up_player_turn(fighter);
        }
        else {
            // Otherwise, let AI choose.
            var result = battle_ai_1.ai_take_turn(fighter, this.fighters);
            if (result[0] != null) {
                this.take_battle_action(fighter, result[0], result[1]);
            }
            // Take the resulting action.
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
        var _this = this;
        var battle_action_entries = [
            [
                "Attack",
                function () {
                    // Show enemy targets & back button.
                    Battle.Instance.battle_table.set_their_btns_enabled(true);
                    Battle.Instance.current_action = BattleAction.Attack;
                    game_1.Game.Menu.push("Attack (Choose Target)", [
                        [
                            "Back",
                            function () {
                                game_1.Game.Menu.pop();
                            }
                        ]
                    ]);
                }
            ],
            [
                "Inventory",
                function () {
                    var e_1, _a;
                    Battle.Instance.current_action = BattleAction.Inventory;
                    var menu_entries = [[
                            "Back",
                            function () {
                                game_1.Game.Menu.pop();
                            }
                        ]];
                    var _loop_2 = function (entry) {
                        menu_entries.push([entry[0] + "(x" + entry[1] + ")", function () {
                                Battle.Instance.current_item = entry[0];
                                _this.battle_table.set_all_btns_enabled(true);
                                game_1.Game.Menu.push("Use item `" + entry[0] + "` (Select target)", [
                                    ["Back", function () { game_1.Game.Menu.pop(); }]
                                ]);
                            }]);
                    };
                    try {
                        for (var _b = __values(player_1.Player.Instance.inventory.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var entry = _c.value;
                            _loop_2(entry);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    game_1.Game.Menu.push("Inventory (Choose Item)", menu_entries);
                }
            ]
        ];
        var _loop_1 = function (i) {
            battle_action_entries.push([
                fighter.data.skills[i].name,
                function () {
                    Battle.Instance.battle_table.set_all_btns_enabled(true);
                    Battle.Instance.current_action = fighter.data.skills[i];
                    game_1.Game.Menu.push("Use `" + fighter.data.skills[i].name + "` (Choose Target)", [
                        [
                            "Back",
                            function () {
                                game_1.Game.Menu.pop();
                            }
                        ]
                    ]);
                }
            ]);
        };
        for (var i = 0; i < fighter.data.skills.length; i++) {
            _loop_1(i);
        }
        game_1.Game.Menu.push("Player turn", battle_action_entries);
    };
    Battle.prototype.execute_player_turn = function (last_battle_table_click) {
        game_1.Game.Menu.clear();
        this.take_battle_action(this.current_fighter(), this.current_action, [
            last_battle_table_click
        ]);
        this.current_action = null;
        this.set_auto_next_interval();
    };
    Battle.prototype.take_battle_action = function (fighter, action, targets) {
        var _a;
        fighter.data.mark_just_acted();
        if (action == BattleAction.Attack) {
            log_1.Log.push(this.current_fighter().name + " attacked.");
            var damage = Math.floor(fighter.data.modded_base_stats().st +
                fighter.data.modded_base_stats().dx);
            for (var t = 0; t < targets.length; t++) {
                targets[t].data.take_damage(damage);
            }
        }
        else if (action == BattleAction.Inventory) {
            var item = items_1.ITEM_MAP.get(this.current_item);
            for (var t = 0; t < targets.length; t++) {
                (_a = item) === null || _a === void 0 ? void 0 : _a.effect(targets[t].data);
            }
        }
        else {
            // (Skill).
            fighter.data.mod_stats.mp -= action.cost;
            log_1.Log.push(this.current_fighter().name + " used `" + action.name + "`.");
            for (var t = 0; t < targets.length; t++) {
                skill_effect_1.resolve_skill_effect(fighter, action, targets[t]);
            }
        }
        game_1.Game.Menu.clear();
        this.battle_table.set_all_btns_enabled(false);
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
    Battle.prototype.end = function () {
        game_1.Game.Menu.clear();
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
