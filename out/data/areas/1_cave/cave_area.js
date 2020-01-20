"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var area_data_1 = require("../area_data");
var cave_b1_1 = require("./cave_b1");
var cave_b2_1 = require("./cave_b2");
exports.cave_data = new area_data_1.AreaData([cave_b2_1.level2_data, cave_b1_1.level1_data]);
