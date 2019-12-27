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
var map_1 = require("./map");
var jlib_1 = require("./jlib");
var actor_1 = require("./actor");
var dialogue_1 = require("./dialogue");
var player_1 = require("./player");
var input_1 = require("./input");
var flags = new Set();
var three_div = document.getElementById("three_div");
var dialogue_div = document.getElementById("dialogue_div");
var scene = new THREE.Scene();
var renderer = new THREE.WebGLRenderer();
var input = new input_1.Input();
var light = new THREE.AmbientLight(0x888888);
var light2 = new THREE.PointLight(0xf00f00, 6, 100);
var player = new player_1.Player();
var dialogue_idx = 0;
var map_walkable = [
    1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 1, 0, 0, 0, 1,
    1, 0, 0, 0, 1, 0, 0, 0, 1,
    1, 1, 0, 1, 1, 1, 0, 1, 1,
    1, 1, 0, 0, 0, 0, 0, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1,
    1, 0, 1, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 0, 1, 0, 1, 1,
    1, 1, 1, 1, 0, 1, 1, 0, 1,
];
var map = new map_1.Map(new jlib_1.Grid(map_walkable, 9));
var npcs = [
    new actor_1.Actor("Abel", new jlib_1.Coor(2, 3), [
        new dialogue_1.Dialogue("Well, well, it looks like the new recruit is finally awake.")
            .set_info("<< SPACE: continue >>").lock(),
        new dialogue_1.Dialogue("You're expected in the divination room.").lock(),
        new dialogue_1.Dialogue("You know where that is right?"),
    ]),
    new actor_1.Actor("Beth", new jlib_1.Coor(4, 4), [
        new dialogue_1.Dialogue("My head hurts..."),
        new dialogue_1.Dialogue("Think I'm possessed by a demon?"),
    ]),
    new actor_1.Actor("Chloe", new jlib_1.Coor(6, 1), [
        new dialogue_1.Dialogue("Isn't my incubus beautiful?..."),
    ]),
    new actor_1.Actor("Incubus", new jlib_1.Coor(7, 1), [
        new dialogue_1.Dialogue("Need demon blood?").set_criteria(function () { return flags.has('demon_blood'); }).lock(),
        new dialogue_1.Dialogue("Well I'm the only demon around, you gonna take it from me?").set_criteria(function () { return flags.has('demon_blood'); }).lock(),
        new dialogue_1.Dialogue("You are!?").set_criteria(function () { return flags.has('demon_blood'); }).lock(),
        new dialogue_1.Dialogue("Hee hee hee...").set_criteria(function () { return !flags.has('demon_blood'); }),
    ]),
    new actor_1.Actor("Daniel", new jlib_1.Coor(6, 5), [
        new dialogue_1.Dialogue("I can't wait until we start the summoning ritual!"),
        new dialogue_1.Dialogue("Have you practiced your rites?"),
    ]),
    new actor_1.Actor("Eve", new jlib_1.Coor(4, 9), [
        new dialogue_1.Dialogue("The divination room? It's through here.").lock(),
        new dialogue_1.Dialogue("Do you have your demon blood?").lock(),
        new dialogue_1.Dialogue("You don't?").lock(),
        new dialogue_1.Dialogue("Well you'll have to go find demon blood somewhere...").flag('demon_blood'),
        new dialogue_1.Dialogue("Go find some demon blood and I'll let you through."),
    ]),
];
function render() {
    renderer.render(scene, player.camera);
}
function update() {
    if (!dialogue_div) {
        return;
    }
    player.update();
    dialogue_div.innerText = "";
    for (var n = 0; n < npcs.length; n++) {
        var npc = npcs[n];
        npc.update(player);
        if (player.coor.equals(npc.coor)) {
            while (dialogue_idx < npc.dialogue.length &&
                !npc.dialogue[dialogue_idx].trigger_criteria()) {
                dialogue_idx += 1;
            }
            if (dialogue_idx >= npc.dialogue.length) {
                continue;
            }
            var dialogue = npc.dialogue[dialogue_idx];
            if (dialogue.lock_player) {
                player.movement_locked = true;
            }
            else {
                player.movement_locked = false;
            }
            for (var f = 0; f < dialogue.flags.length; f++) {
                flags.add(dialogue.flags[f]);
            }
            dialogue_div.innerHTML = npc.name + ": <br />\"" + dialogue.speech
                + "\"<br /><em>" + dialogue.info + "</em>";
        }
    }
    render();
    requestAnimationFrame(update);
}
function onDocumentKeyDown(event) {
    var result = input.check(event, player, map);
    if (result.moved) {
        dialogue_idx = 0;
    }
    if (result.actioned) {
        dialogue_idx += 1;
    }
}
function main() {
    if (!three_div) {
        return;
    }
    renderer.setSize(window.innerWidth, window.innerHeight - 100);
    three_div.appendChild(renderer.domElement);
    scene.add(light);
    light2.position.set(0, 1, 0);
    scene.add(light2);
    var id = "";
    for (id in npcs) {
        scene.add(npcs[id].mesh);
    }
    for (var i = 0; i < map.meshes.length; i++) {
        scene.add(map.meshes[i]);
    }
    document.addEventListener("keydown", onDocumentKeyDown, false);
    // Kick off update loop.
    update();
}
main();
