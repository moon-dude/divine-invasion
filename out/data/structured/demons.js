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
var MAP_ = new Map();
for (var i = 0; i < DEMON_LIST_JSON.length; i++) {
    MAP_.set(DEMON_LIST_JSON[i].name, DEMON_LIST_JSON[i]);
}
exports.DEMON_MAP = MAP_;
