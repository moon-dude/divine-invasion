"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stats_1 = require("./stats");
var buffs_1 = require("./data/buffs");
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
    function BattleData(side, base_stats, mod_stats, skills) {
        this.buffs = new buffs_1.Buffs();
        this.ailments = new Set();
        this.side = side;
        this.base_stats = base_stats;
        this.mod_stats = mod_stats;
        this.skills = skills;
    }
    BattleData.prototype.take_damage = function (amount) {
        if (amount <= 0) {
            return;
        }
        if (this.buffs.defense.get() > 1) {
            amount /= this.buffs.defense.get();
        }
        else if (this.buffs.defense.get() < -1) {
            amount *= -this.buffs.defense.get();
        }
        this.mod_stats.hp -= amount;
    };
    BattleData.prototype.heal_for = function (amount) {
        if (amount <= 0) {
            return;
        }
        this.mod_stats.hp = Math.min(this.mod_stats.hp + amount, 0);
    };
    BattleData.prototype.modded_base_stats = function () {
        return stats_1.apply_stats_mod(this.base_stats, this.mod_stats);
    };
    BattleData.IDENTITY = new BattleData(BattleSide.Their, stats_1.Stats.new_base(), stats_1.Stats.new_mod(), []);
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
