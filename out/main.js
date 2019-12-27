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
    1, 1, 1, 1, 0, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 1, 0, 1,
    1, 0, 1, 0, 1, 0, 1, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1,
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
        new dialogue_1.Dialogue("<< You attacked Incubus and damaged it! >>")
            .set_info("TODO: Replace this with an actual battle sequence to give player a taste of it.")
            .set_criteria(function () { return flags.has('demon_blood'); }).lock(),
        new dialogue_1.Dialogue("<< Recieved demon blood! >>").flag("has_demon_blood"),
        new dialogue_1.Dialogue("Hee hee hee...").set_criteria(function () { return !flags.has('demon_blood'); }),
    ]),
    new actor_1.Actor("Daniel", new jlib_1.Coor(6, 5), [
        new dialogue_1.Dialogue("I can't wait until we start the summoning ritual!"),
        new dialogue_1.Dialogue("Have you practiced your rites?"),
    ]),
    new actor_1.Actor("Eve", new jlib_1.Coor(4, 9), [
        new dialogue_1.Dialogue("The divination room? It's through here.").set_criteria(function () { return !flags.has('has_demon_blood'); }).lock().set_actor_block(true),
        new dialogue_1.Dialogue("Do you have your demon blood?").set_criteria(function () { return !flags.has('has_demon_blood'); }).lock(),
        new dialogue_1.Dialogue("You don't?").set_criteria(function () { return !flags.has('has_demon_blood'); }).lock(),
        new dialogue_1.Dialogue("Well you'll have to go find demon blood somewhere...").set_criteria(function () { return !flags.has('has_demon_blood'); }).flag('demon_blood'),
        new dialogue_1.Dialogue("Go find some demon blood and I'll let you through.").set_criteria(function () { return !flags.has('has_demon_blood'); }),
        new dialogue_1.Dialogue("I see you have found some demon blood!").set_criteria(function () { return flags.has('has_demon_blood'); }).lock(),
        new dialogue_1.Dialogue("Now before you pass, you'll have to smear it over yourself.").set_criteria(function () { return flags.has('has_demon_blood'); }).lock(),
        new dialogue_1.Dialogue("<< You smear demon blood all over yourself >>").set_criteria(function () { return flags.has('has_demon_blood'); }).lock(),
        new dialogue_1.Dialogue("Ha ha, wow you actually did it!").set_criteria(function () { return flags.has('has_demon_blood'); }).lock(),
        new dialogue_1.Dialogue("You sure smell now, haha!").set_criteria(function () { return flags.has('has_demon_blood'); }).set_actor_block(false),
    ]),
    new actor_1.Actor("Frederick", new jlib_1.Coor(7, 9), [
        new dialogue_1.Dialogue("New recruits aren't allowed any further.").set_actor_block(true),
    ]),
    new actor_1.Actor("George", new jlib_1.Coor(1, 6), [
        new dialogue_1.Dialogue("You don't get it! Without our divine laws, our cult would collapse!").set_actor_block(true),
    ]),
    new actor_1.Actor("Harold", new jlib_1.Coor(1, 8), [
        new dialogue_1.Dialogue("Let's see how your laws do against my fist?").set_actor_block(true),
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
        if (!player.coor.equals(npc.coor)) {
            continue;
        }
        var dialogue = npc.dialogue[dialogue_idx];
        var meets_criteria = dialogue ? dialogue.trigger_criteria() : false;
        while (dialogue_idx < npc.dialogue.length && !meets_criteria) {
            dialogue_idx += 1;
            dialogue = npc.dialogue[dialogue_idx];
            meets_criteria = dialogue ? dialogue.trigger_criteria() : false;
        }
        if (!meets_criteria) {
            if (npc.is_blocking) {
                player.move(-1, map, npcs);
            }
            continue;
        }
        if (dialogue.lock_player) {
            player.movement_locked = true;
        }
        else {
            player.movement_locked = false;
        }
        npc.is_blocking = dialogue.actor_block != undefined ? dialogue.actor_block : npc.is_blocking;
        for (var f = 0; f < dialogue.flags.length; f++) {
            flags.add(dialogue.flags[f]);
        }
        dialogue_div.innerHTML = npc.name + ": <br />\"" + dialogue.speech
            + "\"<br /><em>" + dialogue.info + "</em>";
    }
    render();
    requestAnimationFrame(update);
}
function onDocumentKeyDown(event) {
    var result = input.check(event, player, map, npcs);
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
