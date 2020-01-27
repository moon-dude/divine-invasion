"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jlib_1 = require("../../../jlib");
var actor_1 = require("../../../actor");
var dialogue_1 = require("../../../dialogue");
var map_1 = require("../../../map");
var area_data_1 = require("../area_data");
var encounter_type_1 = require("../../encounter_type");
// B2
// Natural cooridoors.
var map_walkable = "####################" +
    "#$...$# ####<  >####" +
    "##.#### #########M #" +
    "#$.##   ....  $### #" +
    "##....#######  N#  #" +
    "##.########## ####L#" +
    "##.@ <#$. ..# .    #" +
    "### ##### ######## #" +
    "##O       $#>      #" +
    "####################";
var level2_map = new map_1.TileMap(jlib_1.Grid.from_string(map_walkable, 20), [
    "Life Stone",
    "Life Stone"
]);
var npc_map = new Map([
    [
        "L",
        new actor_1.Actor("Lazarus", [
            new dialogue_1.Dialogue("Is it safe down here?"),
            new dialogue_1.Dialogue("I swear I've been seeing things..."),
            new dialogue_1.Dialogue("Strange creatures that I know not of..."),
        ])
    ],
    [
        "M",
        new actor_1.Actor("Mary", [
            new dialogue_1.Dialogue("I heard a cultist was found dead recently..."),
            new dialogue_1.Dialogue("He was scrathed up pretty bad. Think a demon did it?"),
        ])
    ],
    [
        "N",
        new actor_1.Actor("Nathanial", [
            new dialogue_1.Dialogue("You ever kill a demon before?"),
            new dialogue_1.Dialogue("It's easy, and don't worry about it too much."),
            new dialogue_1.Dialogue("They're sentient but they don't have souls."),
        ])
    ],
    [
        "O",
        new actor_1.Actor("Orpheus", [
            new dialogue_1.Dialogue("Katakirauwa? You mean the pig thing?"),
            new dialogue_1.Dialogue("Yeah, you're gonna have to go deeper to find that."),
            new dialogue_1.Dialogue("This cave has stronger demons the further you go down."),
            new dialogue_1.Dialogue("They say the bottom is Hell itself!"),
        ])
    ],
]);
var level2_actors = [];
npc_map.forEach(function (actor, key, _) {
    for (var x = 0; x < level2_map.string_grid.width; x++) {
        for (var z = 0; z < level2_map.string_grid.depth; z++) {
            if (key == level2_map.string_grid.get(x, z)) {
                actor.coor = new jlib_1.Coor(x, z);
                actor.pos_index = 2;
                level2_actors.push(actor);
            }
        }
    }
});
exports.level2_data = new area_data_1.LevelData(level2_map, level2_actors, [
    new encounter_type_1.EncounterType(["Goblin", "Goblin"]),
    new encounter_type_1.EncounterType(["Strigoii", "Goblin"]),
    new encounter_type_1.EncounterType(["Goblin", "Mandrake"]),
    new encounter_type_1.EncounterType(["Legion"]),
    new encounter_type_1.EncounterType(["Legion", "Onmoraki"]),
    new encounter_type_1.EncounterType(["Onmoraki"]),
    new encounter_type_1.EncounterType(["Onmoraki", "Onmoraki"]),
    new encounter_type_1.EncounterType(["Onmoraki", "Mandrake"]),
    new encounter_type_1.EncounterType(["Strigoii"])
], 8);
