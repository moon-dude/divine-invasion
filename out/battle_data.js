"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stats_1 = require("./stats");
var buffs_1 = require("./data/buffs");
var battle_log_1 = require("./battle_log");
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
            return "took no damage";
        }
        if (this.buffs.defense.get() > 1) {
            amount /= this.buffs.defense.get();
        }
        else if (this.buffs.defense.get() < -1) {
            amount *= -this.buffs.defense.get();
        }
        this.mod_stats.hp -= amount;
        battle_log_1.BattleLog.add("took " + amount + " damage", false);
    };
    BattleData.prototype.heal_for = function (amount) {
        if (amount < 0) {
            return "could not be healed";
        }
        if (this.mod_stats.hp == 0) {
            return "is already fully healed";
        }
        var diff = Math.min(this.mod_stats.hp + amount, 0);
        this.mod_stats.hp = diff;
        return "healed for " + diff;
    };
    BattleData.prototype.modded_base_stats = function () {
        return stats_1.apply_stats_mod(this.base_stats, this.mod_stats);
    };
    BattleData.prototype.will_take_hit = function (attacker_dx, attacker_hit_evade, skill_percent) {
        if (skill_percent === void 0) { skill_percent = 1; }
        skill_percent *= 1 + (this.modded_base_stats().dx - attacker_dx) * .1;
        skill_percent *= 1 + (this.buffs.hit_evade.get_raised_by(-attacker_hit_evade)) * .2;
        return Math.random() < skill_percent;
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
