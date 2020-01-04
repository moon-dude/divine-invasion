import { TileMap } from "../../map";
import { Grid } from "../../jlib";
import { LevelData } from "./level_data";
import { EncounterType } from "../encounter_type";


const ENCOUNTER_1: EncounterType = new EncounterType(["Sudama", "Sudama"]);
const ENCOUNTER_2: EncounterType = new EncounterType(["Sudama", "Sudama", "Sudama"]);

var map_walkable: string = 
  "/////////,////////" +
  "/-/--------/--/--/" +
  "/-/-/-///-///-//-/" +
  "/-----/-/---/----/" +
  "///////---/-////-/" +
  "///////////---/--/" +
  "/////////--/-///-/" +
  "////////////-///-/" +
  "/////////-//-/-/-/" +
  "/////////--------/" +
  "////////////////`/";

var level2_map = new TileMap(Grid.from_string(map_walkable, 18));

export let level2_data: LevelData = new LevelData(
  level2_map, 
  [], 
  [
    new EncounterType(["Goblin"]),
    new EncounterType(["Goblin", "Goblin"]),
    new EncounterType(["Legion"]),
    new EncounterType(["Mandrake", "Mandrake"]),
    new EncounterType(["Onmoraki"]),
  ], 
  10);