"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jlib_1 = require("../../jlib");
var actor_1 = require("../../actor");
var dialogue_1 = require("../../dialogue");
var globals_1 = require("../../globals");
var map_1 = require("../../map");
var level_data_1 = require("./level_data");
var battle_1 = require("../../battle");
var map_walkable = "//////////" +
    "/--/--/CI/" +
    "/-///-/--/" +
    "/--A--B--/" +
    "////////-/" +
    "/-----D--/" +
    "/HG/E///F/" +
    "////-///-/" +
    "/------/-/" +
    "/-/-//-/-/" +
    "////////-/";
var level1_map = new map_1.TileMap(jlib_1.Grid.from_string(map_walkable, 10));
var npc_map = new Map([
    [
        "A", new actor_1.Actor("Abel", [
            new dialogue_1.Dialogue("Well, well, it looks like the new recruit is finally awake.")
                .set_info("<< SPACE: continue >>").lock(),
            new dialogue_1.Dialogue("You're expected in the divination room.").lock(),
            new dialogue_1.Dialogue("You know where that is right?"),
        ])
    ],
    ["B", new actor_1.Actor("Beth", [
            new dialogue_1.Dialogue("My head hurts..."),
            new dialogue_1.Dialogue("Think I'm possessed by a demon?"),
        ])],
    ["C", new actor_1.Actor("Chloe", [
            new dialogue_1.Dialogue("Isn't my incubus beautiful?..."),
        ])],
    ["I", new actor_1.Actor("Incubus", [
            new dialogue_1.Dialogue("Need demon blood?").set_criteria(function () { return globals_1.flags.has('demon_blood'); }).lock(),
            new dialogue_1.Dialogue("Well I'm the only demon around, you gonna take it from me?").set_criteria(function () { return globals_1.flags.has('demon_blood'); }).lock(),
            new dialogue_1.Dialogue("You are!?").set_criteria(function () { return globals_1.flags.has('demon_blood'); }).lock(),
            new dialogue_1.Dialogue("<< You attacked Incubus and damaged it! >>")
                .set_info("TODO: Replace this with an actual battle sequence to give player a taste of it.")
                .set_criteria(function () { return globals_1.flags.has('demon_blood'); }).lock(),
            new dialogue_1.Dialogue("<< Recieved demon blood! >>").set_criteria(function () { return globals_1.flags.has('demon_blood'); }).flag("has_demon_blood"),
            new dialogue_1.Dialogue("Hee hee hee...").set_criteria(function () { return !globals_1.flags.has('demon_blood'); }),
        ], actor_1.DEMON_MAT, battle_1.BATTLE_DATA_IDENTITY)],
    ["D", new actor_1.Actor("Daniel", [
            new dialogue_1.Dialogue("I can't wait until we start the summoning ritual!"),
            new dialogue_1.Dialogue("Have you practiced your rites?"),
        ])],
    ["E", new actor_1.Actor("Eve", [
            new dialogue_1.Dialogue("The divination room? It's through here.").set_criteria(function () { return !globals_1.flags.has('has_demon_blood'); }).lock().set_actor_block(true),
            new dialogue_1.Dialogue("Do you have your demon blood? You don't?").set_criteria(function () { return !globals_1.flags.has('has_demon_blood'); }).lock(),
            new dialogue_1.Dialogue("Well you'll have to go find demon blood somewhere...").set_criteria(function () { return !globals_1.flags.has('has_demon_blood'); }).lock().flag('demon_blood'),
            new dialogue_1.Dialogue("Go find some demon blood and I'll let you through.").set_criteria(function () { return !globals_1.flags.has('has_demon_blood'); }).lock(),
            new dialogue_1.Dialogue("Wow, did you just draw blood from Chloe's Incubus?").set_criteria(function () { return globals_1.flags.has('has_demon_blood'); }).lock(),
            new dialogue_1.Dialogue("You're a psychopath!").set_criteria(function () { return globals_1.flags.has('has_demon_blood'); }).lock(),
            new dialogue_1.Dialogue("Anyway, come on through, but don't kill anybody!").set_criteria(function () { return globals_1.flags.has('has_demon_blood'); }).set_actor_block(false),
        ])],
    ["F", new actor_1.Actor("Frederick", [
            new dialogue_1.Dialogue("New recruits aren't allowed any further.").lock().set_actor_block(true),
        ])],
    ["G", new actor_1.Actor("George", [
            new dialogue_1.Dialogue("You don't get it! Without our divine laws, our cult would collapse!").set_actor_block(true),
        ])],
    ["H", new actor_1.Actor("Harold", [
            new dialogue_1.Dialogue("Let's see how your laws do against my fist!").set_actor_block(true),
        ])],
]);
var level1_actors = [];
npc_map.forEach(function (actor, key, _) {
    for (var x = 0; x < level1_map.walkable.width; x++) {
        for (var z = 0; z < level1_map.walkable.width; z++) {
            if (key == level1_map.walkable.get(x, z)) {
                actor.coor = new jlib_1.Coor(x, z);
                level1_actors.push(actor);
            }
        }
    }
});
exports.level1_data = new level_data_1.LevelData(level1_map, level1_actors, [], 0);
