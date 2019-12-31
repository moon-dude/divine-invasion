"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var map_1 = require("../../map");
var jlib_1 = require("../../jlib");
var level_data_1 = require("./level_data");
var encounter_type_1 = require("../encounter_type");
var ENCOUNTER_1 = new encounter_type_1.EncounterType(function () {
    return ["Pixie", "Poltergeist", "Pixie"];
});
var ENCOUNTER_2 = new encounter_type_1.EncounterType(function () {
    return ["Pixie", "Pixie"];
});
var ENCOUNTER_3 = new encounter_type_1.EncounterType(function () {
    return ["Poltergeist", "Poltergeist"];
});
var map_walkable = "//////////" +
    "/--/--/--/" +
    "/-///-/--/" +
    "/--------/" +
    "////////-/" +
    "/--------/" +
    "/--/-///-/" +
    "////-///-/" +
    "/------/-/" +
    "/-/-//-/-/" +
    "////////-/";
var level2_map = new map_1.TileMap(jlib_1.Grid.from_string(map_walkable, 7));
exports.level2_data = new level_data_1.LevelData(level2_map, [], [ENCOUNTER_1, ENCOUNTER_2, ENCOUNTER_3], 10);
