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
var jlib_1 = require("./jlib");
var constants_1 = require("./constants");
var Player = /** @class */ (function () {
    function Player() {
        this.coor = new jlib_1.Coor(1, 1);
        this.dir = jlib_1.Dir.S;
        this.camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.movement_locked = false;
    }
    Player.prototype.update = function () {
        var target_x = this.coor.x * constants_1.TILE_SIZE;
        var target_z = this.coor.z * constants_1.TILE_SIZE;
        this.camera.position.x += (target_x - this.camera.position.x) * 0.2;
        this.camera.position.z += (target_z - this.camera.position.z) * 0.2;
        var target_rotation = jlib_1.DirRotation(this.dir);
        while (target_rotation < this.camera.rotation.y - Math.PI) {
            target_rotation += Math.PI * 2;
        }
        while (target_rotation > this.camera.rotation.y + Math.PI + 0.01) {
            target_rotation -= Math.PI * 2;
        }
        this.camera.rotation.y += (target_rotation - this.camera.rotation.y) * 0.2;
    };
    return Player;
}());
exports.Player = Player;
