"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var map_1 = require("../../map");
var jlib_1 = require("../../jlib");
var level_data_1 = require("./level_data");
var encounter_type_1 = require("../encounter_type");
var ENCOUNTER_1 = new encounter_type_1.EncounterType(["Sudama", "Sudama"]);
var ENCOUNTER_2 = new encounter_type_1.EncounterType(["Sudama", "Sudama", "Sudama"]);
var map_walkable = "/////////,////////" +
    "/-/--------/--/--/" +
    "/-/-/-///-///-//-/" +
    "/-----/-/---/----/" +
    "///////---/-////-/" +
    "///////////---/--/" +
    "/////////--/-///-/" +
    "////////////-///-/" +
    "/////////-//-/-/-/" +
    "/////////--------/" +
    "////////////////`/";
var level2_map = new map_1.TileMap(jlib_1.Grid.from_string(map_walkable, 18));
exports.level2_data = new level_data_1.LevelData(level2_map, [], [
    new encounter_type_1.EncounterType(["Goblin"]),
    new encounter_type_1.EncounterType(["Goblin", "Goblin"]),
    new encounter_type_1.EncounterType(["Legion"]),
    new encounter_type_1.EncounterType(["Mandrake", "Mandrake"]),
    new encounter_type_1.EncounterType(["Onmoraki"]),
], 10);
