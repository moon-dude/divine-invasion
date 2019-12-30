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
var demons_1 = require("./data/structured/demons");
var stats_1 = require("./stats");
var battle_data_1 = require("./battle_data");
var ACTOR_OFFSET_FRONT = 0.4;
var ACTOR_OFFSET_SIDE = 0.3;
var cultist_texture = new THREE.TextureLoader().load('assets/cultist.png');
exports.CULTIST_MAT = new THREE.MeshStandardMaterial({ map: cultist_texture, transparent: true, roughness: .3 });
var demon_texture = new THREE.TextureLoader().load('assets/demon.png');
exports.DEMON_MAT = new THREE.MeshStandardMaterial({ map: demon_texture, transparent: true, roughness: .3 });
var geometry = new THREE.PlaneGeometry(2.5, 3.5);
var Actor = /** @class */ (function () {
    function Actor(name, dialogue, material, battle_data) {
        if (material === void 0) { material = exports.CULTIST_MAT; }
        if (battle_data === void 0) { battle_data = battle_data_1.BattleData.IDENTITY; }
        this.is_blocking = false;
        this.placed = false;
        this.name = name;
        this.coor = null;
        this.mesh = new THREE.Mesh(geometry, material);
        this.dialogue = dialogue;
        this.battle_data = battle_data;
    }
    Actor.from_demon = function (name, coor) {
        if (coor === void 0) { coor = null; }
        var _a;
        return new Actor(name, [], exports.DEMON_MAT, new battle_data_1.BattleData(battle_data_1.BattleSide.Their, (((_a = demons_1.DEMON_MAP.get(name)) === null || _a === void 0 ? void 0 : _a.stats) || stats_1.Stats.new_base()), stats_1.Stats.new_mod()));
    };
    Actor.prototype.need_to_be_placed = function (player) {
        if (this.coor == null) {
            return false;
        }
        if (!this.placed) {
            return true;
        }
        // player is on the same line (x or z) and facing towards me.
        if (!jlib_1.num_eq(player.coor.x, this.coor.x) && !jlib_1.num_eq(player.coor.z, this.coor.z)) {
            return false;
        }
        if (jlib_1.num_lt(player.coor.x, this.coor.x)) {
            return player.dir == jlib_1.Dir.E;
        }
        if (jlib_1.num_gt(player.coor.x, this.coor.x)) {
            return player.dir == jlib_1.Dir.W;
        }
        if (jlib_1.num_lt(player.coor.z, this.coor.z)) {
            return player.dir == jlib_1.Dir.S;
        }
        if (jlib_1.num_gt(player.coor.z, this.coor.z)) {
            return player.dir == jlib_1.Dir.N;
        }
        return false;
    };
    Actor.prototype.update = function (/* const */ player) {
        this.mesh.rotation.y = player.body.rotation.y;
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
