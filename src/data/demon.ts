import { Stats } from "../stats";

export class Demon {
  affinities: Object = {};
  ailments?: Object = undefined;
  lvl: number = 0;
  race: string = ""; 
  resists: Object = {};
  skills: Object = {};
  stats: Stats = Stats.new_base();
}