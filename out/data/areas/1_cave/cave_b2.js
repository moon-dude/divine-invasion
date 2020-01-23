"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var map_1 = require("../../../map");
var jlib_1 = require("../../../jlib");
var area_data_1 = require("../area_data");
var encounter_type_1 = require("../../encounter_type");
var map_walkable = "####################" +
    "#$#........#$.##$###" +
    "#.#.#.###.###.##.###" +
    "#.....#.#........###" +
    "### ###...#.####.###" +
    "###<#...#.#...#..###" +
    "###### ##  # ### ###" +
    "######    ###### ###" +
    "######$######>@   ##" +
    "####################";
var level2_map = new map_1.TileMap(jlib_1.Grid.from_string(map_walkable, 20), [
    "Life Stone",
    "Chakra Drop",
    "Revival Bead",
    "Life Stone"
]);
exports.level2_data = new area_data_1.LevelData(level2_map, [], [
    new encounter_type_1.EncounterType(["Goblin", "Goblin"]),
    new encounter_type_1.EncounterType(["Strigoii", "Goblin"]),
    new encounter_type_1.EncounterType(["Goblin", "Mandrake"]),
    new encounter_type_1.EncounterType(["Legion"]),
    new encounter_type_1.EncounterType(["Legion", "Onmoraki"]),
    new encounter_type_1.EncounterType(["Onmoraki"]),
    new encounter_type_1.EncounterType(["Onmoraki", "Onmoraki"]),
    new encounter_type_1.EncounterType(["Strigoii"])
], 12);
// goblin Fairy devilish
// mandrake Wood aggressive
// Legion aggressive
