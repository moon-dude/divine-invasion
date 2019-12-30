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
    Stats.prototype.mod = function (stats) {
        // hp and mp are added/subtracted.
        var result = new Stats(this.hp + stats.hp, this.mp + stats.mp);
        // The rest are multiplied.
        result.ag = this.ag * stats.ag;
        result.dx = this.dx * stats.dx;
        result.lu = this.lu * stats.lu;
        result.ma = this.ma * stats.ma;
        result.st = this.st * stats.st;
        return result;
    };
    return Stats;
}());
exports.Stats = Stats;
exports.STATS_BASE_IDENTITY = new Stats(1, 1);
exports.STATS_MOD_IDENTITY = new Stats(0, 0);
