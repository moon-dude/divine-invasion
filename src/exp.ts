import { Stats } from "./stats";

// 10+2^(x*.3+3)

export class Exp {
  count: number = 0;
  levels_gained: number = 0;
  stat_bonus: Stats = Stats.new_exp(); 

  /// Returns the delta levels gained.
  add(value: number): number {
    this.count += value;
    const new_levels_gained = Math.floor(Math.sqrt(this.count) - 1);
    const delta = new_levels_gained - this.levels_gained;
    this.levels_gained = new_levels_gained;
    return delta;
  }
}

