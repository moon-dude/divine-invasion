import { TileMap } from "../../map";
import { Grid } from "../../jlib";
import { LevelData } from "./level_data";
import { EncounterType } from "../encounter_type";


const ENCOUNTER_1: EncounterType = new EncounterType(() => {
  return ["Pixie", "Poltergeist", "Pixie"];
});

const ENCOUNTER_2: EncounterType = new EncounterType(() => {
  return ["Pixie", "Pixie"];
});

const ENCOUNTER_3: EncounterType = new EncounterType(() => {
  return ["Poltergeist", "Poltergeist"];
});

var map_walkable: string = 
  "//////////" +
  "/--/--/--/" +
  "/-///-/--/" +
  "/--------/" +
  "////////-/" +
  "/--------/" +
  "/--/-///-/" +
  "////-///-/" +
  "/------/-/" +
  "/-/-//-/-/" +
  "////////-/";

var level2_map = new TileMap(Grid.from_string(map_walkable, 7));

export let level2_data: LevelData = new LevelData(
  level2_map, 
  [], 
  [ENCOUNTER_1, ENCOUNTER_2, ENCOUNTER_3], 
  10);