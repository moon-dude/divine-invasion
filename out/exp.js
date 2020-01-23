"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stats_1 = require("./stats");
// 10+2^(x*.3+3)
var Exp = /** @class */ (function () {
    function Exp(base_level) {
        this.count = 0;
        this.levels_gained = 0;
        this.stat_bonus = stats_1.Stats.new_exp();
        this.base_level = base_level;
        this.base_exp = base_level * base_level + 1;
    }
    /// Returns if leveled up.
    Exp.prototype.add = function (value) {
        this.count += value;
        var current_level = Math.floor(Math.sqrt(this.base_exp + this.count) - 1);
        var delta_levels = current_level - (this.levels_gained + this.base_level);
        if (delta_levels <= 0) {
            return false;
        }
        this.levels_gained += delta_levels;
        ;
        this.stat_bonus.hp += delta_levels * 7;
        this.stat_bonus.mp += delta_levels * 3;
        this.stat_bonus.st += delta_levels;
        this.stat_bonus.ag += delta_levels;
        this.stat_bonus.lu += delta_levels;
        this.stat_bonus.dx += delta_levels;
        this.stat_bonus.ma += delta_levels;
        return true;
    };
    Exp.prototype.get_levels_gained = function () {
        return this.levels_gained;
    };
    Exp.prototype.get_stat_bonus = function () {
        return this.stat_bonus;
    };
    return Exp;
}());
exports.Exp = Exp;
