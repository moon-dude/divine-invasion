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
      return "took no damage";
    }
    if (this.buffs.defense.get() > 1) {
      amount /= this.buffs.defense.get();
    } else if (this.buffs.defense.get() < -1) {
      amount *= -this.buffs.defense.get();
    }
    this.mod_stats.hp -= amount;
    BattleLog.add("took " + amount + " damage", false);
  }

  public heal_for(amount: number): string {
    if (amount < 0) {
      return "could not be healed";
    }
    if (this.mod_stats.hp == 0) {
      return "is already fully healed";
    }
    const diff = Math.min(this.mod_stats.hp + amount, 0);
    this.mod_stats.hp = diff;
    return "healed for " + diff;
  }

  public modded_base_stats(): Stats {
    return apply_stats_mod(this.base_stats, this.mod_stats);
  }

  public will_take_hit(attacker_dx: number, attacker_hit_evade: number, 
                       skill_percent: number = 1): boolean {
    skill_percent *= 1 + (this.modded_base_stats().dx - attacker_dx) * .1;
    skill_percent *= 1 + (this.buffs.hit_evade.get_raised_by(-attacker_hit_evade)) * .2;
    return Math.random() < skill_percent;
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