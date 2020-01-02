import { Stats, apply_stats_mod } from "./stats";
import { Skill } from "./data/skill";
import { Buffs } from "./data/buffs";
import { SkillEffect } from "./data/skill_effect";

export enum BattleSide {
  Our,
  Their,
}

export function other_side(side: BattleSide): BattleSide {
  return (side == BattleSide.Our ? BattleSide.Their : BattleSide.Our);
}

export class BattleData {
  public static IDENTITY: BattleData = 
    new BattleData(BattleSide.Their, Stats.new_base(), Stats.new_mod(), []);

  public readonly side: BattleSide;
  public readonly base_stats: Stats;
  public readonly skills: Skill[];

  public mod_stats: Stats;
  public buffs: Buffs = new Buffs();
  public ailments: Set<SkillEffect> = new Set();

  constructor(side: BattleSide, base_stats: Stats, mod_stats: Stats, skills: Skill[]) {
    this.side = side;
    this.base_stats = base_stats;
    this.mod_stats = mod_stats;
    this.skills = skills;
  }

  public take_damage(amount: number) {
    if (amount <= 0) {
      return;
    }
    if (this.buffs.defense.get() > 1) {
      amount /= this.buffs.defense.get();
    } else if (this.buffs.defense.get() < -1) {
      amount *= -this.buffs.defense.get();
    }
    this.mod_stats.hp -= amount;
  }

  public heal_for(amount: number) {
    if (amount <= 0) {
      return;
    }
    this.mod_stats.hp = Math.min(this.mod_stats.hp + amount, 0);
  }

  public modded_base_stats(): Stats {
    return apply_stats_mod(this.base_stats, this.mod_stats);
  }
}


export class BattleIndex {
  side: BattleSide;
  index: number;

  constructor(side: BattleSide, index: number) {
    this.side = side;
    this.index = index;
  }
}

export class BattleFighter {
  name: string;
  data: BattleData;

  constructor(name: string, data: BattleData) {
    this.name = name;
    this.data = data;
  }
}