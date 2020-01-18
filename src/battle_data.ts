import { Stats, apply_stats_mod } from "./stats";
import { Skill } from "./data/skill";
import { Buffs } from "./data/buffs";
import { SkillEffect } from "./data/skill_effect";
import { BattleInfo } from "./battle_info";
import { Exp } from "./exp";
import { Mood } from "./emotion";
import { Log, LOG_INDENT_CHAR } from "./log";

export enum BattleSide {
  Our,
  Their
}

export function other_side(side: BattleSide): BattleSide {
  return side == BattleSide.Our ? BattleSide.Their : BattleSide.Our;
}

export class BattleData {
  public static IDENTITY: BattleData = new BattleData(
    "",
    BattleSide.Their,
    Stats.new_base(),
    Stats.new_mod(),
    [],
    Mood.Aggressive
  );

  public readonly name: string;
  public readonly side: BattleSide;
  public readonly base_stats: Stats;
  public readonly skills: Skill[];

  public mod_stats: Stats;
  public buffs: Buffs = new Buffs();
  public ailments: Set<SkillEffect> = new Set();
  public exp: Exp = new Exp();
  public mood: Mood | null;

  constructor(
    name: string,
    side: BattleSide,
    base_stats: Stats,
    mod_stats: Stats,
    skills: Skill[],
    mood: Mood | null
  ) {
    this.name = name;
    this.side = side;
    this.base_stats = base_stats;
    this.mod_stats = mod_stats;
    this.skills = skills;
    this.mood = mood;
  }

  private log_result(s: string): void {
    Log.push("<span class=\"log_result\">" + this.name + " " + s + " " + LOG_INDENT_CHAR + "</span>");
  }

  public take_damage(amount: number) {
    if (amount <= 0) {
      this.log_result("took no damage.");
    }
    if (this.buffs.defense.get() > 1) {
      amount /= this.buffs.defense.get();
    } else if (this.buffs.defense.get() < -1) {
      amount *= -this.buffs.defense.get();
    }
    amount = Math.floor(amount);
    this.mod_stats.hp -= amount;
    this.log_result("took " + amount + " damage.");
    if (this.modded_base_stats().hp == 0) {
      this.mood = Mood.Dead;
    }
  }

  public heal_for(amount: number) {
    if (this.mod_stats.hp == 0) {
      this.log_result("is already fully healed.");
    }
    if (amount < 0 || this.modded_base_stats().hp == 0) {
      this.log_result("could not be healed.");
      return;
    }
    amount = Math.floor(amount);
    amount = Math.min(amount, -this.mod_stats.hp);
    this.mod_stats.hp += amount;
    this.log_result("healed for " + amount + ". ");
  }

  public modded_base_stats(): Stats {
    return apply_stats_mod(this.base_stats, this.mod_stats);
  }

  public will_take_hit(
    attacker_dx: number,
    attacker_hit_evade: number,
    skill_percent: number = 1
  ): boolean {
    skill_percent *= 1 + (this.modded_base_stats().dx - attacker_dx) * 0.1;
    skill_percent *=
      1 + this.buffs.hit_evade.get_raised_by(-attacker_hit_evade) * 0.2;
    return Math.random() < skill_percent;
  }

  public before_end_of_turn() {
    if (this.ailments.has(SkillEffect.Poison)) {
      const damage = this.base_stats.hp * 0.075;
      this.take_damage(damage);
      BattleInfo.result += "took " + damage + "damage from poison. ";
    }
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
