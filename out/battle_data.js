"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stats_1 = require("./stats");
var BattleSide;
(function (BattleSide) {
    BattleSide[BattleSide["Our"] = 0] = "Our";
    BattleSide[BattleSide["Their"] = 1] = "Their";
})(BattleSide = exports.BattleSide || (exports.BattleSide = {}));
function other_side(side) {
    return (side == BattleSide.Our ? BattleSide.Their : BattleSide.Our);
}
exports.other_side = other_side;
var BattleData = /** @class */ (function () {
    function BattleData(side, base_stats, mod_stats) {
        this.side = side;
        this.base_stats = base_stats;
        this.mod_stats = mod_stats;
    }
    BattleData.prototype.modded_base_stats = function () {
        return stats_1.apply_stats_mod(this.base_stats, this.mod_stats);
    };
    BattleData.IDENTITY = new BattleData(BattleSide.Their, stats_1.Stats.BASE_IDENTITY, stats_1.Stats.MOD_IDENTITY);
    return BattleData;
}());
exports.BattleData = BattleData;
var BattleIndex = /** @class */ (function () {
    function BattleIndex(side, index) {
        this.side = side;
        this.index = index;
    }
    return BattleIndex;
}());
exports.BattleIndex = BattleIndex;
var BattleFighter = /** @class */ (function () {
    function BattleFighter(name, data) {
        this.name = name;
        this.data = data;
    }
    return BattleFighter;
}());
exports.BattleFighter = BattleFighter;
