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
        this.battle_div = document.getElementById("battle_div");
        this.battle_tbody = document.getElementById("battle_tbody");
        this.battle_div.style.visibility = "";
        this.fighters = new Map();
        this.fighters.set(battle_data_1.BattleSide.Our, []);
        this.fighters.set(battle_data_1.BattleSide.Their, []);
        this.turn_order = [];
        for (var i = 0; i < fighters.length; i++) {
            (_a = this.fighters.get(fighters[i].data.side)) === null || _a === void 0 ? void 0 : _a.push(fighters[i]);
            this.turn_order.push(new battle_data_1.BattleIndex(fighters[i].data.side, (((_b = this.fighters.get(fighters[i].data.side)) === null || _b === void 0 ? void 0 : _b.length) || 0) - 1));
        }
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
    Battle.prototype.next_turn = function () {
        this.battle_idx = (this.battle_idx + 1) % this.turn_order.length;
        this.take_turn();
    };
    Battle.prototype.take_turn = function () {
        // get who's turn it is.
        var turn_index = this.turn_order[this.battle_idx];
        var fighter = this.fighters.get(turn_index.side)[turn_index.index];
        // choose a random target.
        var target = jlib_1.random_array_element(this.fighters.get(battle_data_1.other_side(fighter.data.side)));
        if (target == null) {
            return;
        }
        // attack target.
        this.attack(fighter, target);
    };
    Battle.prototype.attack = function (attacker, target) {
        target.data.mod_stats.hp -= attacker.data.modded_base_stats().st + attacker.data.modded_base_stats().dx;
    };
    return Battle;
}());
exports.Battle = Battle;
