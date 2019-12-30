"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stats_1 = require("./stats");
var EMPTY_ENTRY = "<td></td><td></td><td></td>";
var BattleSide;
(function (BattleSide) {
    BattleSide[BattleSide["Our"] = 0] = "Our";
    BattleSide[BattleSide["Their"] = 1] = "Their";
})(BattleSide = exports.BattleSide || (exports.BattleSide = {}));
var BattleData = /** @class */ (function () {
    function BattleData(side, base_stats, mod_stats) {
        this.side = side;
        this.base_stats = base_stats;
        this.mod_stats = mod_stats;
    }
    BattleData.prototype.modded_base_stats = function () {
        return stats_1.apply_stats_mod(this.base_stats, this.mod_stats);
    };
    return BattleData;
}());
exports.BattleData = BattleData;
exports.BATTLE_DATA_IDENTITY = new BattleData(BattleSide.Their, stats_1.Stats.BASE_IDENTITY, stats_1.Stats.MOD_IDENTITY);
// This class should be instantiated and destroyed without any move happening or Actors being destroyed.
var Battle = /** @class */ (function () {
    function Battle(fighters) {
        this.battle_idx = 0;
        this.fighters = fighters;
        this.battle_div = document.getElementById("battle_div");
        this.battle_tbody = document.getElementById("battle_tbody");
        this.battle_div.style.visibility = "";
        var you_entries = [];
        var enemy_entries = [];
        for (var i = 0; i < this.fighters.length; i++) {
            if (this.fighters[i][1].side == BattleSide.Our) {
                you_entries.push(this.entry_html(this.fighters[i][0], this.fighters[i][1]));
            }
            else {
                enemy_entries.push(this.entry_html(this.fighters[i][0], this.fighters[i][1]));
            }
        }
        this.battle_tbody.innerHTML = "";
        for (var i = 0; i < you_entries.length || i < enemy_entries.length; i++) {
            var row_html = "<tr>";
            if (i < you_entries.length) {
                row_html += you_entries[i];
            }
            else {
                row_html += EMPTY_ENTRY;
            }
            row_html += "<td></td>";
            if (i < enemy_entries.length) {
                row_html += enemy_entries[i];
            }
            else {
                row_html += EMPTY_ENTRY;
            }
            this.battle_tbody.innerHTML += row_html;
        }
    }
    Battle.prototype.entry_html = function (name, data) {
        return "<td>" + name + "</td><td>" +
            data.modded_base_stats().hp + "/" + data.base_stats.hp + "</td><td>" +
            data.modded_base_stats().mp + "/" + data.base_stats.mp;
    };
    Battle.prototype.update = function (player) {
    };
    Battle.prototype.next_turn = function () {
        this.battle_idx += 1;
    };
    return Battle;
}());
exports.Battle = Battle;
