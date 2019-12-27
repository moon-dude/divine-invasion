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
var World = /** @class */ (function () {
    function World(scene, map, actors) {
        this.dialogue_idx = 0;
        this.map = map;
        this.actors = actors;
        this.ambient_light = new THREE.AmbientLight();
        scene.add(this.ambient_light);
        for (var i = 0; i < this.actors.length; i++) {
            scene.add(this.actors[i].mesh);
        }
        for (var i = 0; i < this.map.meshes.length; i++) {
            scene.add(this.map.meshes[i]);
        }
    }
    World.prototype.update = function (player, dialogue_div) {
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
            dialogue_div.innerHTML = actor.name + ": <br />\"" + dialogue.speech
                + "\"<br /><em>" + dialogue.info + "</em>";
        }
    };
    return World;
}());
exports.World = World;
