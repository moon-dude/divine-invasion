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
var stats_1 = require("./stats");
var battle_data_1 = require("./battle_data");
var demons_1 = require("./data/raw/demons");
var skills_1 = require("./data/raw/skills");
var emotion_1 = require("./emotion");
var actor_tween_1 = require("./actor_tween");
var game_1 = require("./game");
var ACTOR_OFFSET_FRONT = 0.4;
var ACTOR_OFFSET_SIDE = 0.3;
var cultist_texture = new THREE.TextureLoader().load("assets/cultist.png");
exports.CULTIST_MAT = new THREE.MeshStandardMaterial({
    map: cultist_texture,
    transparent: true,
    roughness: 0.7
});
var demon_texture = new THREE.TextureLoader().load("assets/demon.png");
exports.DEMON_MAT = new THREE.MeshStandardMaterial({
    map: demon_texture,
    transparent: true,
    roughness: 0.7
});
var legion_texture = new THREE.TextureLoader().load("assets/legion.png");
exports.LEGION_MAT = new THREE.MeshStandardMaterial({
    map: legion_texture,
    transparent: true,
    roughness: 0.7
});
var mandrake_texture = new THREE.TextureLoader().load("assets/mandrake.png");
exports.MANDRAKE_MAT = new THREE.MeshStandardMaterial({
    map: mandrake_texture,
    transparent: true,
    roughness: 0.7
});
var geometry = new THREE.PlaneGeometry(2.5, 3.5);
var Actor = /** @class */ (function () {
    function Actor(name, dialogue, material, battle_data) {
        if (material === void 0) { material = exports.CULTIST_MAT; }
        if (battle_data === void 0) { battle_data = battle_data_1.BattleData.IDENTITY; }
        this.pos_index = 0;
        this.is_blocking = false;
        this.position = null;
        this.tween = new actor_tween_1.ActorTween();
        this.name = name;
        this.coor = null;
        this.mesh = new THREE.Mesh(geometry, material);
        this.dialogue = dialogue;
        this.battle_data = battle_data;
    }
    Actor.from_demon = function (name, side, coor) {
        if (coor === void 0) { coor = null; }
        var demon = demons_1.DEMON_MAP.get(name);
        var skills = [];
        if (demon.level) {
            for (var i = 0; i < demon.skills.length; i++) {
                if (demon.skills[i][1] <= demon.level) {
                    skills.push(skills_1.SKILL_MAP.get(demon.skills[i][0]));
                }
            }
        }
        var mood = null;
        if (side == battle_data_1.BattleSide.Their) {
            if (demon.race == "Fairy" || demon.race == "Ghost") {
                mood = emotion_1.Mood.Devilish;
            }
            else {
                mood = emotion_1.Mood.Aggressive;
            }
        }
        var material = demon.name == "Legion"
            ? exports.LEGION_MAT
            : demon.name == "Mandrake"
                ? exports.MANDRAKE_MAT
                : exports.DEMON_MAT;
        var actor = new Actor(name, [], material, new battle_data_1.BattleData(name, side, demon.level || 1, demon.stats, stats_1.Stats.new_mod(), skills, mood));
        actor.coor = coor;
        return actor;
    };
    Actor.prototype.need_to_be_placed = function () {
        if (this.coor == null) {
            return false;
        }
        if (this.position == null) {
            return true;
        }
        // player is on the same line (x or z) and facing towards me.
        if (!jlib_1.num_eq(game_1.Game.Instance.player.coor.x, this.coor.x) &&
            !jlib_1.num_eq(game_1.Game.Instance.player.coor.z, this.coor.z)) {
            return false;
        }
        if (jlib_1.num_lt(game_1.Game.Instance.player.coor.x, this.coor.x)) {
            return game_1.Game.Instance.player.dir == jlib_1.Dir.E;
        }
        if (jlib_1.num_gt(game_1.Game.Instance.player.coor.x, this.coor.x)) {
            return game_1.Game.Instance.player.dir == jlib_1.Dir.W;
        }
        if (jlib_1.num_lt(game_1.Game.Instance.player.coor.z, this.coor.z)) {
            return game_1.Game.Instance.player.dir == jlib_1.Dir.S;
        }
        if (jlib_1.num_gt(game_1.Game.Instance.player.coor.z, this.coor.z)) {
            return game_1.Game.Instance.player.dir == jlib_1.Dir.N;
        }
        return false;
    };
    Actor.prototype.update = function () {
        if (this.coor != null) {
            this.mesh.rotation.y = game_1.Game.Instance.player.body.rotation.y;
            if (this.need_to_be_placed()) {
                var offset_x = 0;
                var offset_z = 0;
                switch (game_1.Game.Instance.player.dir) {
                    case jlib_1.Dir.W:
                        offset_x = -this.get_pos_front_offset();
                        offset_z = this.get_pos_side_offset();
                        break;
                    case jlib_1.Dir.E:
                        offset_x = this.get_pos_front_offset();
                        offset_z = -this.get_pos_side_offset();
                        break;
                    case jlib_1.Dir.N:
                        offset_x = -this.get_pos_side_offset();
                        offset_z = -this.get_pos_front_offset();
                        break;
                    case jlib_1.Dir.S:
                        offset_x = this.get_pos_side_offset();
                        offset_z = this.get_pos_front_offset();
                        break;
                }
                this.position = new THREE.Vector3((this.coor.x + offset_x) * constants_1.TILE_SIZE, -0.5, (this.coor.z + offset_z) * constants_1.TILE_SIZE);
            }
        }
        if (this.position != null) {
            if (this.battle_data.just_acted()) {
                this.tween.bump();
            }
            if (this.battle_data.just_got_damaged()) {
                this.tween.set_shake(0.1);
            }
            this.tween.update(this.mesh, this.position);
        }
        this.mesh.visible =
            this.battle_data.modded_base_stats().hp > 0 &&
                !this.battle_data.recruited;
    };
    Actor.prototype.get_pos_front_offset = function () {
        if (this.pos_index < 3) {
            return ACTOR_OFFSET_FRONT * 0.9 + this.pos_index * 0.01;
        }
        return ACTOR_OFFSET_FRONT + this.pos_index * 0.01;
    };
    Actor.prototype.get_pos_side_offset = function () {
        if (this.pos_index == 1) {
            return -ACTOR_OFFSET_SIDE;
        }
        if (this.pos_index == 2) {
            return ACTOR_OFFSET_SIDE;
        }
        if (this.pos_index == 3) {
            return -ACTOR_OFFSET_SIDE / 2;
        }
        if (this.pos_index == 4) {
            return ACTOR_OFFSET_SIDE / 2;
        }
        return 0;
    };
    return Actor;
}());
exports.Actor = Actor;
