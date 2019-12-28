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
var ACTOR_OFFSET_FRONT = 0.3;
var ACTOR_OFFSET_SIDE = 0.3;
var texture = new THREE.TextureLoader().load('assets/cultist.png');
var geometry = new THREE.PlaneGeometry(2.5, 3.5);
var material = new THREE.MeshStandardMaterial({ map: texture, transparent: true });
var Actor = /** @class */ (function () {
    function Actor(name, dialogue) {
        this.is_blocking = false;
        this.placed = false;
        this.name = name;
        this.coor = null;
        this.mesh = new THREE.Mesh(geometry, material);
        this.dialogue = dialogue;
    }
    Actor.prototype.need_to_be_placed = function (player) {
        if (this.coor == null) {
            return false;
        }
        if (!this.placed) {
            return true;
        }
        // player is on the same line (x or z) and facing towards me.
        if (player.coor.x != this.coor.x && player.coor.z != this.coor.z) {
            return false;
        }
        if (player.coor.x < this.coor.x) {
            return player.dir == jlib_1.Dir.E;
        }
        if (player.coor.x > this.coor.x) {
            return player.dir == jlib_1.Dir.W;
        }
        if (player.coor.z < this.coor.z) {
            return player.dir == jlib_1.Dir.S;
        }
        if (player.coor.z < this.coor.z) {
            return player.dir == jlib_1.Dir.N;
        }
        return false;
    };
    Actor.prototype.update = function (/* const */ player) {
        this.mesh.rotation.y = player.camera.rotation.y;
        if (this.coor == null) {
            return;
        }
        if (this.need_to_be_placed(player)) {
            // Always to the left of the camera.
            var offset_x = 0;
            var offset_z = 0;
            switch (player.dir) {
                case jlib_1.Dir.W:
                    offset_x = -ACTOR_OFFSET_FRONT;
                    offset_z = ACTOR_OFFSET_SIDE;
                    break;
                case jlib_1.Dir.E:
                    offset_x = ACTOR_OFFSET_FRONT;
                    offset_z = -ACTOR_OFFSET_SIDE;
                    break;
                case jlib_1.Dir.N:
                    offset_x = -ACTOR_OFFSET_SIDE;
                    offset_z = -ACTOR_OFFSET_FRONT;
                    break;
                case jlib_1.Dir.S:
                    offset_x = ACTOR_OFFSET_SIDE;
                    offset_z = ACTOR_OFFSET_FRONT;
                    break;
            }
            this.mesh.position.x = (this.coor.x + offset_x) * constants_1.TILE_SIZE;
            this.mesh.position.z = (this.coor.z + offset_z) * constants_1.TILE_SIZE;
            this.mesh.position.y = -0.7;
            this.placed = true;
        }
    };
    return Actor;
}());
exports.Actor = Actor;
