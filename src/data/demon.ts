import { Stats } from "../stats";
import { SkillElement } from "./skill";

export class Demon {
  affinities: Object = {};
  ailments?: Object = undefined;
  level: number = 0;
  race: string = ""; 
  resists: Map<SkillElement, string> = new Map();
  skills: Map<string, number> = new Map();
  stats: Stats = Stats.new_base();
}