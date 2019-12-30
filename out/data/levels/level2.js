"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var map_1 = require("../../map");
var jlib_1 = require("../../jlib");
var level_data_1 = require("./level_data");
var encounters_1 = require("../encounters");
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
var level2_map = new map_1.TileMap(jlib_1.Grid.from_string(map_walkable, 10));
exports.level2_data = new level_data_1.LevelData(level2_map, [], [encounters_1.ENC_INCUBI], 10);
