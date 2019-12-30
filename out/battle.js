"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jlib_1 = require("./jlib");
var battle_data_1 = require("./battle_data");
var EMPTY_ENTRY = "<td></td><td></td><td></td>";
// This class should be instantiated and destroyed without any move happening or Actors being destroyed.
var Battle = /** @class */ (function () {
    function Battle(fighters) {
        var _a, _b;
        this.battle_idx = -1;
        this.battle_tbody = document.getElementById("battle_tbody");
        this.info_div = document.getElementById("battle_info");
        this.fighters = new Map();
        this.fighters.set(battle_data_1.BattleSide.Our, []);
        this.fighters.set(battle_data_1.BattleSide.Their, []);
        this.turn_order = [];
        for (var i = 0; i < fighters.length; i++) {
            var side = fighters[i].data.side;
            (_a = this.fighters.get(side)) === null || _a === void 0 ? void 0 : _a.push(fighters[i]);
            this.turn_order.push(new battle_data_1.BattleIndex(side, (((_b = this.fighters.get(side)) === null || _b === void 0 ? void 0 : _b.length) || 0) - 1));
        }
        console.log(this.fighters);
        console.log(this.turn_order);
    }
    Battle.prototype.render = function () {
        this.battle_tbody.innerHTML = "";
        var theirs = this.fighters.get(battle_data_1.BattleSide.Their);
        var ours = this.fighters.get(battle_data_1.BattleSide.Our);
        for (var i = 0; i < ours.length || i < theirs.length; i++) {
            var row_html = "<tr>";
            if (i < ours.length) {
                row_html += this.entry_html(ours[i]);
            }
            else {
                row_html += EMPTY_ENTRY;
            }
            row_html += "<td></td>";
            if (i < theirs.length) {
                row_html += this.entry_html(theirs[i]);
            }
            else {
                row_html += EMPTY_ENTRY;
            }
            this.battle_tbody.innerHTML += row_html;
        }
    };
    Battle.prototype.entry_html = function (fighter) {
        return "<td>" + fighter.name + "</td><td>" +
            fighter.data.modded_base_stats().hp + "/" + fighter.data.base_stats.hp + "</td><td>" +
            fighter.data.modded_base_stats().mp + "/" + fighter.data.base_stats.mp;
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
    Battle.prototype.next_turn = function () {
        this.battle_idx = (this.battle_idx + 1) % this.turn_order.length;
        this.take_turn();
    };
    Battle.prototype.take_turn = function () {
        // get who's turn it is.
        var turn_index = this.turn_order[this.battle_idx];
        var fighter = this.fighters.get(turn_index.side)[turn_index.index];
        if (fighter.data.modded_base_stats().hp <= 0) {
            this.info_div.innerHTML = "" + fighter.name + " is dead and can't attack!";
            return;
        }
        // choose a random target.
        var target = this.get_attack_target(fighter);
        if (target == null) {
            this.info_div.innerHTML = "" + fighter.name + " has no one to attack!";
            return;
        }
        // attack target.
        this.attack(fighter, target);
    };
    Battle.prototype.get_attack_target = function (attacker) {
        return jlib_1.random_array_element(this.fighters.get(battle_data_1.other_side(attacker.data.side))
            .filter(function (x) { return x.data.modded_base_stats().hp > 0; }));
    };
    Battle.prototype.attack = function (attacker, target) {
        target.data.mod_stats.hp -= attacker.data.modded_base_stats().st + attacker.data.modded_base_stats().dx;
        this.info_div.innerHTML = "" + attacker.name + " attacked " + target.name + "!";
    };
    return Battle;
}());
exports.Battle = Battle;
