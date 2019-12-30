"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var DEMON_LIST_JSON = __importStar(require("../raw/demon_list.json"));
var map = new Map();
DEMON_LIST_JSON.demon_list.forEach(function (val) {
    map.set(val.name, val);
});
exports.DEMON_MAP = map;
console.log(DEMON_LIST_JSON);
console.log(exports.DEMON_MAP);
