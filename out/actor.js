"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var jlib_1 = require("./jlib");
var THREE = __importStar(require("three"));
var constants_1 = require("./constants");
var ACTOR_OFFSET_FRONT = .2;
var ACTOR_OFFSET_SIDE = .6;
var geometry = new THREE.PlaneGeometry(2, 3);
var material = new THREE.MeshStandardMaterial({ color: 0xCC3300 });
var Actor = /** @class */ (function () {
    function Actor(name, coor, dialogue) {
        this.name = name;
        this.coor = coor;
        this.mesh = new THREE.Mesh(geometry, material);
        this.dialogue = dialogue;
    }
    Actor.prototype.update = function (/* const */ player) {
        var diff_x = player.coor.x - this.coor.x;
        var diff_z = player.coor.z - this.coor.z;
        var delta_x = Math.abs(diff_x) < .1 ?
            (player.dir == jlib_1.Dir.E ? ACTOR_OFFSET_FRONT : -ACTOR_OFFSET_FRONT) :
            (diff_x < 0 ? ACTOR_OFFSET_SIDE : -ACTOR_OFFSET_SIDE);
        var delta_z = Math.abs(diff_z) < .1 ?
            (player.dir == jlib_1.Dir.S ? ACTOR_OFFSET_FRONT : -ACTOR_OFFSET_FRONT) :
            (diff_z < 0 ? ACTOR_OFFSET_SIDE : -ACTOR_OFFSET_SIDE);
        this.mesh.position.x = (this.coor.x + delta_x) * constants_1.TILE_SIZE;
        this.mesh.position.z = (this.coor.z + delta_z) * constants_1.TILE_SIZE;
        this.mesh.rotation.y = player.camera.rotation.y;
    };
    return Actor;
}());
exports.Actor = Actor;
