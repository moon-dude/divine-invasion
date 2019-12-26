"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var THREE = __importStar(require("three"));
var geometry = new THREE.PlaneGeometry(2, 3);
var material = new THREE.MeshStandardMaterial({ color: 0xCC3300 });
var Actor = /** @class */ (function () {
    function Actor(name, coor, dialogue) {
        var _this = this;
        this.name = name;
        this.coor = coor;
        this.mesh = new THREE.Mesh(geometry, material);
        this.dialogue = function () {
            return _this.name + ": " + dialogue;
        };
    }
    return Actor;
}());
exports.Actor = Actor;
