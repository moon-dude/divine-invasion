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
    Stats.BASE_IDENTITY = new Stats(1, 1);
    Stats.MOD_IDENTITY = new Stats(0, 0);
    return Stats;
}());
exports.Stats = Stats;
function apply_stats_mod(base, mod) {
    // hp and mp are added/subtracted.
    var result = new Stats(base.hp + mod.hp, base.mp + mod.mp);
    // The rest are multiplied.
    result.ag = base.ag * mod.ag;
    result.dx = base.dx * mod.dx;
    result.lu = base.lu * mod.lu;
    result.ma = base.ma * mod.ma;
    result.st = base.st * mod.st;
    return result;
}
exports.apply_stats_mod = apply_stats_mod;
