"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stats_1 = require("../stats");
var Demon = /** @class */ (function () {
    function Demon() {
        this.affinities = {};
        this.ailments = undefined;
        this.lvl = 0;
        this.race = "";
        this.resists = {};
        this.skills = {};
        this.stats = stats_1.Stats.new_base();
    }
    return Demon;
}());
exports.Demon = Demon;
