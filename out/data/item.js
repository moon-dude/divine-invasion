"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("./util");
var Item = /** @class */ (function () {
    function Item() {
        this.name = "";
        this.target = util_1.Target.All;
        this.effect = function (a) { };
    }
    return Item;
}());
exports.Item = Item;
