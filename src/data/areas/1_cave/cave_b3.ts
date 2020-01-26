import { Grid, Coor } from "../../../jlib";
import { Actor, DEMON_MAT } from "../../../actor";
import { Dialogue } from "../../../dialogue";
import { flags } from "../../../globals";
import { TileMap } from "../../../map";
import { LevelData } from "../area_data";
import { BattleData } from "../../../battle_data";
import { EncounterType } from "../../encounter_type";

// B3
// Summoning room, priest quarters, 

var map_walkable: string =
"####################" +
"# #        >##    ##" +
"#   # # #####      #" +
"## ####            #" +
"#    ########      #" +
"## ########## #  # #" +
"##  ##>     #      #" +
"### ##### ######## #" +
"#                  #" +
"####################";

var level3_map = new TileMap(Grid.from_string(map_walkable, 20), [
  "Life Stone",
  "Life Stone"
]);


var npc_map: Map<string, Actor> = new Map([
  [
    "L",
    new Actor("Lazarus", [
      new Dialogue("Is it safe down here?"),
      new Dialogue("I swear I've been seeing things..."),
      new Dialogue("Strange creatures that I know not of..."),
    ])
  ],
  [
    "M",
    new Actor("Mary", [
      new Dialogue("I heard a cultist was found dead recently..."),
      new Dialogue("He was scrathed up pretty bad. Think a demon did it?"),
    ])
  ],
  [
    "N",
    new Actor("Nathanial", [
      new Dialogue("You ever kill a demon before?"),
      new Dialogue("It's easy, and don't worry about it too much."),
      new Dialogue("They're sentient but they don't have souls."),
    ])
  ],
  [
    "O",
    new Actor("Orpheus", [
      new Dialogue("Katakirauwa? You mean the pig thing?"),
      new Dialogue("Yeah, you're gonna have to go deeper to find that."),
      new Dialogue("This cave has stronger demons the further you go down."),
      new Dialogue("They say the bottom is Hell itself!"),
    ])
  ],
]);


var level3_actors: Actor[] = [];
npc_map.forEach((actor, key, _) => {
  for (let x = 0; x < level3_map.string_grid.width; x++) {
    for (let z = 0; z < level3_map.string_grid.depth; z++) {
      if (key == level3_map.string_grid.get(x, z)) {
        actor.coor = new Coor(x, z);
        actor.pos_index = 2;
        level3_actors.push(actor);
      }
    }
  }
});

export let level3_data: LevelData = new LevelData(
  level3_map,
  level3_actors,
  [
    new EncounterType(["Fomorian", "Fomorian"]),
    new EncounterType(["Kabuso", "Goblin"]),
    new EncounterType(["Pele", "Porewit"]),
    new EncounterType(["Porewit", "Kabuso"]),
    new EncounterType(["Garrote", "Garrote"]),
    new EncounterType(["Erthys"]),
    new EncounterType(["Onmoraki", "Kabuso"]),
    new EncounterType(["Strigoii", "Goblin", "Goblin"]),
  ],
  8
);