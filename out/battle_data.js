"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stats_1 = require("./stats");
var buffs_1 = require("./data/buffs");
var skill_effect_1 = require("./data/skill_effect");
var battle_info_1 = require("./battle_info");
var exp_1 = require("./exp");
var emotion_1 = require("./emotion");
var BattleSide;
(function (BattleSide) {
    BattleSide[BattleSide["Our"] = 0] = "Our";
    BattleSide[BattleSide["Their"] = 1] = "Their";
})(BattleSide = exports.BattleSide || (exports.BattleSide = {}));
function other_side(side) {
    return side == BattleSide.Our ? BattleSide.Their : BattleSide.Our;
}
exports.other_side = other_side;
var BattleData = /** @class */ (function () {
    function BattleData(side, base_stats, mod_stats, skills, mood) {
        this.buffs = new buffs_1.Buffs();
        this.ailments = new Set();
        this.exp = new exp_1.Exp();
        this.side = side;
        this.base_stats = base_stats;
        this.mod_stats = mod_stats;
        this.skills = skills;
        this.mood = mood;
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
        amount = Math.floor(amount);
        this.mod_stats.hp -= amount;
        battle_info_1.BattleInfo.result += "took " + amount + " damage. ";
        if (this.modded_base_stats().hp == 0) {
            this.mood = emotion_1.Mood.Dead;
        }
    };
    BattleData.prototype.heal_for = function (amount) {
        if (this.mod_stats.hp == 0) {
            battle_info_1.BattleInfo.result += "is already fully healed. ";
        }
        if (amount < 0 || this.modded_base_stats().hp == 0) {
            battle_info_1.BattleInfo.result += "could not be healed. ";
            return;
        }
        amount = Math.floor(amount);
        amount = Math.min(amount, -this.mod_stats.hp);
        this.mod_stats.hp += amount;
        battle_info_1.BattleInfo.result += "healed for " + amount + ". ";
    };
    BattleData.prototype.modded_base_stats = function () {
        return stats_1.apply_stats_mod(this.base_stats, this.mod_stats);
    };
    BattleData.prototype.will_take_hit = function (attacker_dx, attacker_hit_evade, skill_percent) {
        if (skill_percent === void 0) { skill_percent = 1; }
        skill_percent *= 1 + (this.modded_base_stats().dx - attacker_dx) * 0.1;
        skill_percent *=
            1 + this.buffs.hit_evade.get_raised_by(-attacker_hit_evade) * 0.2;
        return Math.random() < skill_percent;
    };
    BattleData.prototype.before_end_of_turn = function () {
        if (this.ailments.has(skill_effect_1.SkillEffect.Poison)) {
            var damage = this.base_stats.hp * 0.075;
            this.take_damage(damage);
            battle_info_1.BattleInfo.result += "took " + damage + "damage from poison. ";
        }
    };
    BattleData.IDENTITY = new BattleData(BattleSide.Their, stats_1.Stats.new_base(), stats_1.Stats.new_mod(), [], emotion_1.Mood.Aggressive);
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
