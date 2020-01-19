"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("./util");
var Item = /** @class */ (function () {
    function Item() {
        this.name = "Life Stone";
        this.target = util_1.Target.All;
        this.effect = function (_) { };
    }
    return Item;
}());
exports.Item = Item;
