"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stats_1 = require("./stats");
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
    return BattleData;
}());
exports.BattleData = BattleData;
exports.BATTLE_DATA_IDENTITY = new BattleData(BattleSide.Their, stats_1.STATS_BASE_IDENTITY, stats_1.STATS_MOD_IDENTITY);
// This class should be instantiated and destroyed without any move happening or Actors being destroyed.
var Battle = /** @class */ (function () {
    function Battle(player_supports, enemies) {
        this.player_supports = player_supports;
        this.enemies = enemies;
    }
    Battle.prototype.update = function () {
    };
    return Battle;
}());
exports.Battle = Battle;
