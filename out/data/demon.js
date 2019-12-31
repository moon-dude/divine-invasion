"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stats_1 = require("../stats");
var Demon = /** @class */ (function () {
    function Demon() {
        this.affinities = {};
        this.ailments = undefined;
        this.level = 0;
        this.race = "";
        this.resists = new Map();
        this.skills = new Map();
        this.stats = stats_1.Stats.new_base();
    }
    return Demon;
}());
exports.Demon = Demon;
