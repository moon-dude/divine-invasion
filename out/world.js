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
var globals_1 = require("./globals");
var jlib_1 = require("./jlib");
var constants_1 = require("./constants");
var World = /** @class */ (function () {
    function World(scene, level_data) {
        this.dialogue_idx = 0;
        this.map = level_data.map;
        this.actors = level_data.actors;
        this.encounter_types = level_data.encounter_types;
        this.encounters = this.make_encounters(this.map, level_data.encounter_count);
        this.ambient_light = new THREE.AmbientLight("#000099", .2);
        this.speaker_div = document.getElementById("dialogue_speaker");
        this.speech_div = document.getElementById("dialogue_speech");
        this.info_div = document.getElementById("dialogue_info");
        scene.add(this.ambient_light);
        for (var i = 0; i < this.actors.length; i++) {
            scene.add(this.actors[i].mesh);
        }
        for (var i = 0; i < this.map.meshes.length; i++) {
            scene.add(this.map.meshes[i]);
        }
        this.lights = [];
        for (var x = 1; x < this.map.walkable.width; x += 4) {
            for (var z = 1; z < this.map.walkable.width; z += 4) {
                var new_light = new THREE.PointLight("#000033");
                new_light.position.x = x * constants_1.TILE_SIZE;
                new_light.position.z = z * constants_1.TILE_SIZE;
                new_light.position.y = 1;
                this.lights.push(new_light);
                scene.add(new_light);
            }
        }
    }
    /// Identify all of the open tiles and pick a random unique set.
    World.prototype.make_encounters = function (map, count) {
        var open_coors = map.walkable.filter_eq("-");
        jlib_1.shuffle_array(open_coors);
        var result = [];
        for (var i = 0; i < count && i < open_coors.length; i++) {
            result.push(open_coors[i]);
        }
        return result;
    };
    World.prototype.update = function (player) {
        this.speaker_div.innerHTML = "";
        this.speech_div.innerHTML = "";
        this.info_div.innerHTML = "";
        for (var i = 0; i < this.actors.length; i++) {
            var actor = this.actors[i];
            actor.update(player);
            if (!player.coor.equals(actor.coor)) {
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
                    player.movement_locked = false;
                    player.move(-1, this.map, this.actors);
                }
                continue;
            }
            if (dialogue.lock_player) {
                player.movement_locked = true;
            }
            else {
                player.movement_locked = false;
            }
            actor.is_blocking = dialogue.actor_block != undefined ? dialogue.actor_block : actor.is_blocking;
            for (var f = 0; f < dialogue.flags.length; f++) {
                globals_1.flags.add(dialogue.flags[f]);
            }
            this.speaker_div.innerHTML = actor.name;
            this.speech_div.innerHTML = dialogue.speech;
            this.info_div.innerHTML = dialogue.info;
        }
    };
    return World;
}());
exports.World = World;
