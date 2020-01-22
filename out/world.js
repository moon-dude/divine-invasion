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
var actor_1 = require("./actor");
var globals_1 = require("./globals");
var area_data_1 = require("./data/areas/area_data");
var jlib_1 = require("./jlib");
var battle_data_1 = require("./battle_data");
var game_1 = require("./game");
var World = /** @class */ (function () {
    function World(scene, level_data) {
        this.dialogue_idx = 0;
        this.map = level_data.map;
        this.actors = level_data.actors;
        // this.encounter_types = level_data.encounter_types;
        var encounter_coors = this.make_encounters(this.map, level_data.encounter_count);
        var _loop_1 = function (i) {
            var encounter_type = jlib_1.random_array_element(level_data.encounter_types);
            var enemies = encounter_type.enemies;
            var battle_actors = enemies.map(function (id) {
                return actor_1.Actor.from_demon(id, battle_data_1.BattleSide.Their, encounter_coors[i]);
            });
            for (var j = 0; j < battle_actors.length; j++) {
                battle_actors[j].pos_index = j;
                this_1.actors.push(battle_actors[j]);
            }
        };
        var this_1 = this;
        for (var i = 0; i < encounter_coors.length; i++) {
            _loop_1(i);
        }
        this.ambient_light = new THREE.AmbientLight("#001155", 2);
        scene.add(this.ambient_light);
        this.speaker_div = document.getElementById("dialogue_speaker");
        this.speech_div = document.getElementById("dialogue_speech");
        this.info_div = document.getElementById("dialogue_info");
        for (var i = 0; i < this.actors.length; i++) {
            scene.add(this.actors[i].mesh);
        }
        for (var i = 0; i < this.map.meshes.length; i++) {
            scene.add(this.map.meshes[i]);
        }
        this.lights = [];
        // for (let x = 1; x < this.map.walkable.width; x += 4) {
        //   for (let z = 1; z < this.map.walkable.width; z += 4) {
        //     const new_light = new THREE.PointLight("#2222cc");
        //     new_light.position.x = x * TILE_SIZE;
        //     new_light.position.z = z * TILE_SIZE;
        //     new_light.position.y = 1;
        //     this.lights.push(new_light);
        //     scene.add(new_light);
        //   }
        // }
    }
    /// Identify all of the open tiles and pick a random unique set.
    World.prototype.make_encounters = function (map, count) {
        var open_coors = map.walkable.filter_eq(area_data_1.EMPTY_SPACE_CHAR);
        jlib_1.shuffle_array(open_coors);
        var result = [];
        for (var i = 0; i < count && i < open_coors.length; i++) {
            result.push(open_coors[i]);
        }
        return result;
    };
    World.prototype.update = function () {
        this.speaker_div.innerHTML = "";
        this.speech_div.innerHTML = "";
        this.info_div.innerHTML = "";
        for (var i = 0; i < this.actors.length; i++) {
            var actor = this.actors[i];
            actor.update();
            if (!game_1.Game.Instance.player.coor.equals(actor.coor)) {
                continue;
            }
            var dialogue = actor.dialogue[this.dialogue_idx];
            var meets_criteria = dialogue ? dialogue.trigger_criteria() : false;
            while (this.dialogue_idx < actor.dialogue.length && !meets_criteria) {
                this.dialogue_idx += 1;
                dialogue = actor.dialogue[this.dialogue_idx];
                meets_criteria = dialogue ? dialogue.trigger_criteria() : false;
            }
            if (!meets_criteria) {
                if (actor.is_blocking) {
                    game_1.Game.Instance.player.movement_locked = false;
                    game_1.Game.Instance.player.move(-1, this.map, this.actors);
                }
                continue;
            }
            if (dialogue.lock_player) {
                game_1.Game.Instance.player.movement_locked = true;
            }
            else {
                game_1.Game.Instance.player.movement_locked = false;
            }
            if (dialogue.heal_player) {
                game_1.Game.Instance.player.fully_heal();
            }
            actor.is_blocking =
                dialogue.actor_block != undefined
                    ? dialogue.actor_block
                    : actor.is_blocking;
            for (var f = 0; f < dialogue.flags.length; f++) {
                globals_1.flags.add(dialogue.flags[f]);
            }
            this.speaker_div.innerHTML = actor.name;
            this.speech_div.innerHTML = dialogue.speech;
            this.info_div.innerHTML = dialogue.info;
        }
    };
    World.prototype.actors_at = function (coor) {
        var _a;
        var result = [];
        for (var i = 0; i < this.actors.length; i++) {
            if ((_a = this.actors[i].coor) === null || _a === void 0 ? void 0 : _a.equals(coor)) {
                result.push(this.actors[i]);
            }
        }
        return result;
    };
    World.prototype.unload = function (scene) {
        scene.remove(this.ambient_light);
        for (var i = 0; i < this.actors.length; i++) {
            scene.remove(this.actors[i].mesh);
        }
        for (var i = 0; i < this.map.meshes.length; i++) {
            scene.remove(this.map.meshes[i]);
        }
        for (var i = 0; i < this.lights.length; i++) {
            scene.remove(this.lights[i]);
        }
    };
    return World;
}());
exports.World = World;
