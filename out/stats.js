"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stats = /** @class */ (function () {
    function Stats(hp, mp) {
        this.ag = 1;
        this.dx = 1;
        this.lu = 1;
        this.ma = 1;
        this.st = 1;
        this.hp = hp;
        this.mp = mp;
    }
    Stats.new_base = function () { return new Stats(1, 1); };
    ;
    Stats.new_mod = function () { return new Stats(0, 0); };
    ;
    Stats.new_exp = function () {
        var exp_stats = new Stats(0, 0);
        exp_stats.ag = 0;
        exp_stats.dx = 0;
        exp_stats.lu = 0;
        exp_stats.ma = 0;
        exp_stats.st = 0;
        return exp_stats;
    };
    return Stats;
}());
exports.Stats = Stats;
function apply_stats_mod(base, mod) {
    // hp and mp are added/subtracted.
    var result = new Stats(Math.max(0, base.hp + mod.hp), Math.max(0, base.mp + mod.mp));
    // The rest are multiplied.
    result.ag = base.ag * mod.ag;
    result.dx = base.dx * mod.dx;
    result.lu = base.lu * mod.lu;
    result.ma = base.ma * mod.ma;
    result.st = base.st * mod.st;
    return result;
}
exports.apply_stats_mod = apply_stats_mod;
