import { TileMap } from "../../map";
import { Actor } from "../../actor";
import { EncounterType } from "../encounter_type";

export class LevelData {
  map: TileMap;
  actors: Actor[];
  encounter_types: EncounterType[];
  encounter_count: number;

  constructor(map: TileMap, actors: Actor[], encounter_types: EncounterType[], encounter_count: number) {
    this.map = map;
    this.actors = actors;
    this.encounter_types = encounter_types;
    this.encounter_count = encounter_count;
  }
}