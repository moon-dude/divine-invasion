import { TileMap } from "../../map";
import { Grid } from "../../jlib";
import { LevelData } from "./level_data";
import { ENC_INCUBI } from "../encounters";

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

var level2_map = new TileMap(Grid.from_string(map_walkable, 10));

export let level2_data: LevelData = new LevelData(level2_map, [], [ENC_INCUBI], 10);