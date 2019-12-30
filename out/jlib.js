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
    Grid.prototype.filter_eq = function (value_match) {
        var result = [];
        for (var x = 0; x < this.width; x++) {
            for (var z = 0; z < this.depth; z++) {
                if (this.get(x, z) == value_match) {
                    result.push(new Coor(x, z));
                }
            }
        }
        return result;
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
function shuffle_array(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
exports.shuffle_array = shuffle_array;
function random_array_element(array) {
    if (array.length == 0) {
        return null;
    }
    return array[Math.floor(array.length * Math.random())];
}
exports.random_array_element = random_array_element;
var Unsigned = /** @class */ (function () {
    function Unsigned(val) {
        this.val = val > 0 ? val : 0;
    }
    Unsigned.prototype.plus = function (delta) {
        this.val += delta;
        if (this.val < 0) {
            this.val = 0;
        }
    };
    Unsigned.prototype.value = function () {
        return this.val;
    };
    return Unsigned;
}());
exports.Unsigned = Unsigned;
