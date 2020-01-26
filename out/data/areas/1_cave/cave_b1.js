"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jlib_1 = require("../../../jlib");
var actor_1 = require("../../../actor");
var dialogue_1 = require("../../../dialogue");
var globals_1 = require("../../../globals");
var map_1 = require("../../../map");
var area_data_1 = require("../area_data");
var battle_data_1 = require("../../../battle_data");
var map_walkable = "####################" +
    "#     #@# B#####<  #" +
    "#     # ## #  C### #" +
    "#     #  A    I###F#" +
    "#     ####### ##$# #" +
    "#     #            #" +
    "### ###E###L#D#$#HG#" +
    "### ### #K##########" +
    "###  J       <######" +
    "####################";
var level1_map = new map_1.TileMap(jlib_1.Grid.from_string(map_walkable, 20), [
    "Life Stone",
    "Life Stone"
]);
var npc_map = new Map([
    [
        "A",
        new actor_1.Actor("Abel", [
            new dialogue_1.Dialogue("Well, well, the new recruit is finally awake.")
                .set_info("<< E: continue >>")
                .lock(),
            new dialogue_1.Dialogue("You're expected in the Summoning Room.").lock(),
            new dialogue_1.Dialogue("You know where that is right?")
        ])
    ],
    [
        "B",
        new actor_1.Actor("Beth", [
            new dialogue_1.Dialogue("My head hurts..."),
            new dialogue_1.Dialogue("Think I'm possessed by a demon?")
        ])
    ],
    ["C", new actor_1.Actor("Chloe", [new dialogue_1.Dialogue("Isn't my Goblin beautiful?...")])],
    [
        "I",
        new actor_1.Actor("Goblin", [
            new dialogue_1.Dialogue("Need demon blood?")
                .set_criteria(function () { return globals_1.flags.has("demon_blood"); })
                .lock(),
            new dialogue_1.Dialogue("Well I'm the only demon around, you gonna take it from me?")
                .set_criteria(function () { return globals_1.flags.has("demon_blood"); })
                .lock(),
            new dialogue_1.Dialogue("You are!?")
                .set_criteria(function () { return globals_1.flags.has("demon_blood"); })
                .lock(),
            new dialogue_1.Dialogue("<< You attacked Goblin and damaged it! >>")
                .set_info("TODO: Replace this with an actual battle sequence to give player a taste of it.")
                .set_criteria(function () { return globals_1.flags.has("demon_blood"); })
                .lock(),
            new dialogue_1.Dialogue("<< Recieved demon blood! >>")
                .set_criteria(function () { return globals_1.flags.has("demon_blood"); })
                .flag("has_demon_blood"),
            new dialogue_1.Dialogue("Hee hee hee...").set_criteria(function () { return !globals_1.flags.has("demon_blood"); })
        ], actor_1.DEMON_MAT, battle_data_1.BattleData.IDENTITY)
    ],
    [
        "D",
        new actor_1.Actor("Daniel", [
            new dialogue_1.Dialogue("I can't wait until we start the summoning ritual!"),
            new dialogue_1.Dialogue("Have you practiced your rites?")
        ])
    ],
    [
        "E",
        new actor_1.Actor("Eve", [
            new dialogue_1.Dialogue("The Summoning Room? It's through here.")
                .set_criteria(function () { return !globals_1.flags.has("has_demon_blood"); })
                .lock()
                .set_actor_block(true),
            new dialogue_1.Dialogue("Do you have your demon blood? You don't?")
                .set_criteria(function () { return !globals_1.flags.has("has_demon_blood"); })
                .lock(),
            new dialogue_1.Dialogue("Well go find some demon blood!")
                .set_criteria(function () { return !globals_1.flags.has("has_demon_blood"); })
                .lock()
                .flag("demon_blood"),
            new dialogue_1.Dialogue("Find some demon blood and I'll let you through.")
                .set_criteria(function () { return !globals_1.flags.has("has_demon_blood"); })
                .lock(),
            new dialogue_1.Dialogue("Wow, you really just drew blood from Chloe's Goblin?")
                .set_criteria(function () { return globals_1.flags.has("has_demon_blood"); })
                .lock(),
            new dialogue_1.Dialogue("You're a psychopath!")
                .set_criteria(function () { return globals_1.flags.has("has_demon_blood"); })
                .lock(),
            new dialogue_1.Dialogue("Anyway, you got demon blood so come on through.")
                .set_criteria(function () { return globals_1.flags.has("has_demon_blood"); })
                .set_actor_block(false)
        ])
    ],
    [
        "F",
        new actor_1.Actor("Frederick", [
            new dialogue_1.Dialogue("Step back. New recruits aren't allowed any further.")
                .lock()
                .set_actor_block(true)
        ])
    ],
    [
        "G",
        new actor_1.Actor("George", [
            new dialogue_1.Dialogue("You don't get it! Without our divine laws, our cult would collapse!").set_actor_block(true)
        ])
    ],
    [
        "H",
        new actor_1.Actor("Hilde", [
            new dialogue_1.Dialogue("Let's see how your laws fare against my boot!").set_actor_block(true)
        ])
    ],
    [
        "J",
        new actor_1.Actor("Jacques", [
            new dialogue_1.Dialogue("Oh, it's you, the *NEW* recruit. what have you go there?")
                .lock()
                .set_actor_block(true),
            new dialogue_1.Dialogue("Imp's blood? No, no, no! It can't be any old demon blood!").lock(),
            new dialogue_1.Dialogue("It has to be the blood of Katakirauwa, the pig spirit!").lock(),
            new dialogue_1.Dialogue("You see, Taotie is very particular and much enjoys the taste of Katakirauwa!").lock(),
            new dialogue_1.Dialogue("You may be able to find Katakirauwa somewhere in the depths of the cave.").lock(),
            new dialogue_1.Dialogue("Hurry along!").lock()
        ])
    ],
    [
        "K",
        new actor_1.Actor("Katherine", [
            new dialogue_1.Dialogue("Hello, dear, what's the matter?"),
            new dialogue_1.Dialogue("Are you hurt? Let me tend to your wounds.")
                .lock()
                .set_heal_player()
                .set_actor_block(true),
            new dialogue_1.Dialogue("Now you're looking sharp! Go kill some demons for me, sweetie!").lock()
        ])
    ],
    [
        "L",
        new actor_1.Actor("Leo", [
            new dialogue_1.Dialogue("You're outta cash? Then don't bother browsing.")
        ])
    ]
]);
var level1_actors = [];
npc_map.forEach(function (actor, key, _) {
    for (var x = 0; x < level1_map.string_grid.width; x++) {
        for (var z = 0; z < level1_map.string_grid.depth; z++) {
            if (key == level1_map.string_grid.get(x, z)) {
                actor.coor = new jlib_1.Coor(x, z);
                actor.pos_index = 2;
                level1_actors.push(actor);
            }
        }
    }
});
exports.level1_data = new area_data_1.LevelData(level1_map, level1_actors, [], 0);
