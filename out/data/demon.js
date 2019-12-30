"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Demon = /** @class */ (function () {
    function Demon() {
        this.affinities = {};
        this.ailments = undefined;
        this.lvl = 0;
        this.race = "";
        this.resists = {};
        this.skills = {};
        this.stats = new Stats();
    }
    return Demon;
}());
exports.Demon = Demon;
