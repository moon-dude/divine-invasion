import { TileMap } from "../../map";
import { Actor } from "../../actor";
import { EncounterType } from "../encounter_type";
import { Coor } from "../../jlib";

export const STAIRS_DOWN_CHAR = "<";
export const STAIRS_UP_CHAR = ">";
export const PLAYER_START_CHAR = "@";
export const WALL_CHAR = "#";
export const EMPTY_SPACE_CHAR = " ";
export const ENCOUNTER_CHAR = "."
export const TREASURE_CHAR = "$";

export class LevelData {
  map: TileMap;
  actors: Actor[];
  encounter_types: EncounterType[];
  encounter_count: number;
  offset_from_above: Coor;

  constructor(
    map: TileMap,
    actors: Actor[],
    encounter_types: EncounterType[],
    encounter_count: number,
    offset_from_above: Coor = new Coor(0, 0),
  ) {
    this.map = map;
    this.actors = actors;
    this.encounter_types = encounter_types;
    this.encounter_count = encounter_count;
    this.offset_from_above = offset_from_above;
  }
}

export class AreaData {
  /// lowest to highest.
  public levels: LevelData[];

  constructor(levels: LevelData[]) {
    this.levels = levels;
  }
}