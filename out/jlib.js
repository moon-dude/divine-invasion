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
    Grid.from_string = function (s, width) {
        var result = [];
        for (var c = 0; c < s.length; c++) {
            result.push(s[c]);
        }
        return new Grid(result, width);
    };
    return Grid;
}());
exports.Grid = Grid;
var Coor = /** @class */ (function () {
    function Coor(x, z) {
        this.x = x;
        this.z = z;
    }
    Coor.prototype.equals = function (other) {
        return other != null && this.x == other.x && this.z == other.z;
    };
    return Coor;
}());
exports.Coor = Coor;
var Dir;
(function (Dir) {
    Dir[Dir["E"] = 0] = "E";
    Dir[Dir["W"] = 1] = "W";
    Dir[Dir["N"] = 2] = "N";
    Dir[Dir["S"] = 3] = "S";
})(Dir = exports.Dir || (exports.Dir = {}));
function ApplyDir(coor, dir, mult) {
    switch (dir) {
        case Dir.W:
            return new Coor(coor.x - 1 * mult, coor.z);
        case Dir.E:
            return new Coor(coor.x + 1 * mult, coor.z);
        case Dir.N:
            return new Coor(coor.x, coor.z - 1 * mult);
        case Dir.S:
            return new Coor(coor.x, coor.z + 1 * mult);
    }
}
exports.ApplyDir = ApplyDir;
function DirRotation(dir) {
    switch (dir) {
        case Dir.W:
            return Math.PI / 2;
        case Dir.E:
            return -Math.PI / 2;
        case Dir.N:
            return 0;
        case Dir.S:
            return Math.PI;
    }
}
exports.DirRotation = DirRotation;
function DirCW(dir) {
    switch (dir) {
        case Dir.W:
            return Dir.N;
        case Dir.E:
            return Dir.S;
        case Dir.N:
            return Dir.E;
        case Dir.S:
            return Dir.W;
    }
}
exports.DirCW = DirCW;
function num_eq(a, b, delta) {
    if (delta === void 0) { delta = 0.01; }
    return Math.abs(a - b) < delta;
}
exports.num_eq = num_eq;
function num_gt(a, b, delta) {
    if (delta === void 0) { delta = 0.01; }
    return a > b + delta;
}
exports.num_gt = num_gt;
function num_lt(a, b, delta) {
    if (delta === void 0) { delta = 0.01; }
    return a < b - delta;
}
exports.num_lt = num_lt;
