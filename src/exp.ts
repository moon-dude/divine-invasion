import { Stats } from "./stats";
import { Log } from "./log";

// 10+2^(x*.3+3)

export class Exp {
  private base_level: number;
  private base_exp: number;
  private count: number = 0;
  private levels_gained: number = 0;
  private stat_bonus: Stats = Stats.new_exp();

  constructor(base_level: number) {
    this.base_level = base_level;
    this.base_exp = base_level * base_level + 1
  }

  /// Returns if leveled up.
  public add(value: number): boolean {
    this.count += value;
    const current_level = Math.floor(Math.sqrt(this.base_exp + this.count) - 1);
    const delta_levels = current_level - (this.levels_gained + this.base_level);
    if (delta_levels <= 0) {
      return false;
    }
    this.levels_gained += delta_levels;;
    this.stat_bonus.hp += delta_levels * 7;
    this.stat_bonus.mp += delta_levels * 3;
    this.stat_bonus.st += delta_levels;
    this.stat_bonus.ag += delta_levels;
    this.stat_bonus.lu += delta_levels;
    this.stat_bonus.dx += delta_levels;
    this.stat_bonus.ma += delta_levels;
    return true;
  }

  public get_levels_gained(): number {
    return this.levels_gained;
  }

  public get_stat_bonus(): Stats {
    return this.stat_bonus;
  }
}
