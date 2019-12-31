"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stats_1 = require("../stats");
var Demon = /** @class */ (function () {
    function Demon() {
        this.name = "";
        this.affinities = [];
        this.ailments = [];
        this.attack = "";
        this.level = 0;
        this.race = "";
        this.resists = [];
        this.skills = [];
        this.stats = stats_1.Stats.new_base();
    }
    return Demon;
}());
exports.Demon = Demon;
var RawDemon = /** @class */ (function () {
    function RawDemon() {
        this.affinities = [];
        this.lvl = 0;
        this.race = "";
        this.resists = [];
        this.skills = [];
        this.stats = stats_1.Stats.new_base();
    }
    return RawDemon;
}());
exports.RawDemon = RawDemon;
