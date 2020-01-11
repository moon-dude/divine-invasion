import { Stats } from "../stats";
import { SkillElement } from "./skill_effect";
import { SkillId } from "./skill";

export type Race = string;

export class Demon {
  name: string = "";
  affinities: [SkillElement, number][] = [];
  ailments?: [string, string][] = [];
  evolves?: string;
  attack?: string = "";
  level?: number = 0;
  race: Race = "";
  resists: [SkillElement, string][] = [];
  skills: [SkillId, number][] = [];
  stats: Stats = Stats.new_base();
}

export class RawDemon {
  affinities: [string, number][] = [];
  ailments?: [string, string][];
  lvl: number = 0;
  race: string = "";
  resists: [string, string][] = [];
  skills: [string, number][] = [];
  stats: Stats = Stats.new_base();
}
