import { TileMap } from "../../../map";
import { Grid, Coor } from "../../../jlib";
import { LevelData } from "../area_data";
import { EncounterType } from "../../encounter_type";

var map_walkable: string =
  "####################" +
  "#$#........#$.##$###" +
  "#.#.#.###.###.##.###" +
  "#.....#.#........###" +
  "### ###...#.####.###" +
  "###<#$..#.#...#$.###" +
  "###### ##  # ### ###" +
  "######    ###### ###" +
  "######$######>@   ##" +
  "####################";

var level2_map = new TileMap(Grid.from_string(map_walkable, 20), [
  "Life Stone",
  "Chakra Drop",
  "Chakra Drop",
  "Revival Bead",
  "Life Stone",
  "Life Stone",
]);

export let level2_data: LevelData = new LevelData(
  level2_map,
  [],
  [
    new EncounterType(["Goblin", "Goblin"]),
    new EncounterType(["Strigoii", "Goblin"]),
    new EncounterType(["Goblin", "Mandrake"]),
    new EncounterType(["Legion"]),
    new EncounterType(["Legion", "Onmoraki"]),
    new EncounterType(["Onmoraki"]),
    new EncounterType(["Onmoraki", "Onmoraki"]),
    new EncounterType(["Onmoraki", "Mandrake"]),
    new EncounterType(["Strigoii"])
  ],
  12
);