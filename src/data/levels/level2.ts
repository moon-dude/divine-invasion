import { TileMap } from "../../map";
import { Grid } from "../../jlib";
import { LevelData } from "./level_data";
import { EncounterType } from "../encounter_type";

var map_walkable: string = 
  "//////////////////" +
  "/+/--------/--/--/" +
  "/-/-/-///-///-//-/" +
  "/-----/-/---/----/" +
  "///////---/-////-/" +
  "///////////---/--/" +
  "/////////--/-///-/" +
  "////////////-///-/" +
  "/////////-//-/-/-/" +
  "/----------------/" +
  "////////////////`/";

var level2_map = new TileMap(Grid.from_string(map_walkable, 18));

export let level2_data: LevelData = new LevelData(
  level2_map, 
  [], 
  [
    new EncounterType(["Goblin", "Goblin"]),
    new EncounterType(["Goblin", "Goblin", "Goblin"]),
    new EncounterType(["Goblin", "Mandrake"]),
    new EncounterType(["Legion"]),
    new EncounterType(["Legion", "Onmoraki"]),
    new EncounterType(["Onmoraki"]),
    new EncounterType(["Onmoraki", "Onmoraki"]),
    new EncounterType(["Strigoii"]),
  ], 
  20);