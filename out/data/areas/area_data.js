"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jlib_1 = require("../../jlib");
exports.STAIRS_DOWN_CHAR = "<";
exports.STAIRS_UP_CHAR = ">";
exports.PLAYER_START_CHAR = "@";
exports.WALL_CHAR = "#";
exports.EMPTY_SPACE_CHAR = " ";
exports.ENCOUNTER_CHAR = ".";
exports.TREASURE_CHAR = "$";
var LevelData = /** @class */ (function () {
    function LevelData(map, actors, encounter_types, encounter_count, offset_from_above) {
        if (offset_from_above === void 0) { offset_from_above = new jlib_1.Coor(0, 0); }
        this.map = map;
        this.actors = actors;
        this.encounter_types = encounter_types;
        this.encounter_count = encounter_count;
        this.offset_from_above = offset_from_above;
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
