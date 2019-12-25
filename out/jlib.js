"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Grid = /** @class */ (function () {
    function Grid(values, width) {
        this.values = values;
        this.width = width;
        this.depth = Math.ceil(values.length / width);
        this.count = values.length;
    }
    Grid.prototype.get = function (x, z) {
        return this.values[z * this.width + x];
    };
    return Grid;
}());
exports.Grid = Grid;
