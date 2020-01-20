"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LevelData = /** @class */ (function () {
    function LevelData(map, actors, encounter_types, encounter_count) {
        this.map = map;
        this.actors = actors;
        this.encounter_types = encounter_types;
        this.encounter_count = encounter_count;
    }
    return LevelData;
}());
exports.LevelData = LevelData;
var AreaData = /** @class */ (function () {
    function AreaData(levels) {
        this.levels = levels;
    }
    return AreaData;
}());
exports.AreaData = AreaData;
