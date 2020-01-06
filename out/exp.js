"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stats_1 = require("./stats");
// 10+2^(x*.3+3)
var Exp = /** @class */ (function () {
    function Exp() {
        this.count = 0;
        this.levels_gained = 0;
        this.stat_bonus = stats_1.Stats.new_exp();
    }
    /// Returns the delta levels gained.
    Exp.prototype.add = function (value) {
        this.count += value;
        var new_levels_gained = Math.floor(Math.sqrt(this.count) - 1);
        var delta = new_levels_gained - this.levels_gained;
        this.levels_gained = new_levels_gained;
        return delta;
    };
    return Exp;
}());
exports.Exp = Exp;
