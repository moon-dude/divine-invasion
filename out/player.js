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
var battle_data_1 = require("./battle_data");
var stats_1 = require("./stats");
var Player = /** @class */ (function () {
    function Player() {
        this.coor = new jlib_1.Coor(1, 1);
        this.dir = jlib_1.Dir.S;
        this.body = new THREE.Object3D();
        this.camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.light = new THREE.PointLight("#ff9911", 1, 20, .5);
        this.movement_locked = false;
        this.body.add(this.camera);
        this.body.add(this.light);
        this.light.position.x = 5;
        var stats = new stats_1.Stats(500, 100);
        stats.ag = 40;
        stats.dx = 40;
        stats.lu = 40;
        stats.ma = 40;
        stats.st = 40;
        this.battle_data = new battle_data_1.BattleData(battle_data_1.BattleSide.Our, stats, stats_1.Stats.new_mod());
    }
    Player.prototype.update = function () {
        var target_x = this.coor.x * constants_1.TILE_SIZE;
        var target_z = this.coor.z * constants_1.TILE_SIZE;
        this.body.position.x += (target_x - this.body.position.x) * 0.2;
        this.body.position.z += (target_z - this.body.position.z) * 0.2;
        var target_rotation = jlib_1.DirRotation(this.dir);
        while (target_rotation < this.body.rotation.y - Math.PI) {
            target_rotation += Math.PI * 2;
        }
        while (target_rotation > this.body.rotation.y + Math.PI + 0.01) {
            target_rotation -= Math.PI * 2;
        }
        this.body.rotation.y += (target_rotation - this.body.rotation.y) * 0.2;
    };
    /// Returns true on a successful move.
    Player.prototype.move = function (steps, map, npcs) {
        if (this.movement_locked) {
            return false;
        }
        var move_coor = jlib_1.ApplyDir(this.coor, this.dir, steps);
        if (map.walkable.get(move_coor.x, move_coor.z) == "/") {
            return false;
        }
        // Reorient towards npcs if going backwards.
        if (steps < 0) {
            for (var n = 0; n < npcs.length; n++) {
                if (move_coor.equals(npcs[n].coor)) {
                    this.dir = jlib_1.DirCW(jlib_1.DirCW(this.dir));
                    break;
                }
            }
        }
        this.coor = move_coor;
        return true;
    };
    /// Returns true on a successful turn.
    Player.prototype.turn = function (cw) {
        if (this.movement_locked) {
            return false;
        }
        if (cw) {
            this.dir = jlib_1.DirCW(this.dir);
        }
        else {
            this.dir = jlib_1.DirCW(jlib_1.DirCW(jlib_1.DirCW(this.dir)));
        }
        return true;
    };
    return Player;
}());
exports.Player = Player;
