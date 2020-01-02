import { BattleFighter, BattleData } from "../battle_data";
import { Skill } from "./skill";
import { Buffs, Buffable } from "./buffs";

export enum SkillEffect {
  Damage,
  Heal,
  BuffDefense,
  DebuffDefense,
  BuffHitEvade,
  DebuffHitEvade,
  BuffAllStats,
  DebuffAllStats,
  BuffMagicAttack,
  BuffPhysAttack,
  Charm,
  Bind,
  Sick,
  Sleep,
  Panic,
  Mute,
  Poison,
  CurePoisonSick,
  CuresAllAilments,
  NextMagicAttackX2AndHalfDamage,
  NextPhysGunAttackGuaranteedCrit,
  RemoveAllBuffs,
  RemoveAllDebuffs,
  RemoveAllBuffsAndDebuffs,
  ReviveWithHalfHP,
  ReviveWithFullHP,
  ReviveWithFullHPCuredUserDies,
}

export enum SkillElement {
  Phys,
  Gun,
  Fire,
  Ice,
  Elec,
  Force,
  Dark,
  Light,
  Support,
  Recovery,
  Ailment,
  Almighty,
  Other,
  Passive,
}

export enum SkillResist {
  Weak,
  Resist
}

export enum SkillPower {
  Weak,
  Medium,
  Heavy,
  Severe,
}

export enum SkillTarget {
  Single,
  All,
  AllEnemies,
  AllAllies,
  Multi,
  Self,
}

export enum SkillHits {
  X1,
  X1To2,
  X1To3,
  X1To4,
  X1To5,
  X2,
  X2To3,
  X2To4,
  X4To6,
  X4To12,
}

function damage_power(power?: SkillPower) {
  switch (power) {
    case SkillPower.Severe:
      return 5;
    case SkillPower.Heavy:
      return 3;
    case SkillPower.Medium:
      return 2;
    case SkillPower.Weak:
    default:
      return 1;
  }
}

function buff_power(power?: SkillPower) {
  switch (power) {
    case SkillPower.Severe:
      return 4;
    case SkillPower.Heavy:
      return 3;
    case SkillPower.Medium:
      return 2;
    case SkillPower.Weak:
    default:
      return 1;
  }
}


// Returns info div innerHTML.
export function resolve_skill_effect(fighter: BattleFighter, skill: Skill, 
                                     targets: BattleFighter[]): string {
  let result_str = "";
  switch (skill.effect) {
    case SkillEffect.Damage:
      let damage = 1;
      if (skill.element == SkillElement.Phys) {
        damage = Math.floor(fighter.data.modded_base_stats().st * damage_power(skill.power));
      } else if (skill.element == SkillElement.Gun) {
        damage = Math.floor(fighter.data.modded_base_stats().dx * damage_power(skill.power));
      } else if (skill.element == SkillElement.Light || skill.element == SkillElement.Dark) {
        damage = Math.floor(fighter.data.modded_base_stats().lu * damage_power(skill.power));
      } else {
        damage = Math.floor(fighter.data.modded_base_stats().ma * damage_power(skill.power));
      }
      for (let t = 0; t < targets.length; t++) {
        targets[t].data.take_damage(damage);
        result_str += "<br/>" + targets[t].name + " took " + damage + " damage";
      }
      break;
    case SkillEffect.Heal:
      const power = Math.floor(fighter.data.modded_base_stats().ma) * damage_power(skill.power);
      for (let t = 0; t < targets.length; t++) {
        targets[t].data.heal_for(power);
        result_str += "<br/>" + targets[t].name + " healed for " + power + "";
      }
      break;
    case SkillEffect.BuffDefense:
      result_str += handy_buff_handler((b) => b.defense, targets, true, skill.power);
      break;
    case SkillEffect.DebuffDefense:
      result_str += handy_buff_handler((b) => b.defense, targets, false, skill.power);
      break;
    case SkillEffect.BuffHitEvade:
      result_str += handy_buff_handler((b) => b.hit_evade, targets, true, skill.power);
      break;
    case SkillEffect.DebuffHitEvade:
      result_str += handy_buff_handler((b) => b.hit_evade, targets, false, skill.power);
      break;
    case SkillEffect.BuffMagicAttack:
      result_str += handy_buff_handler((b) => b.magic_attack, targets, true, skill.power);
      break;
    case SkillEffect.BuffPhysAttack:
      result_str += handy_buff_handler((b) => b.physical_attack, targets, true, skill.power);
      break;
    case SkillEffect.BuffAllStats:
      result_str += handy_buff_handler((b) => b.defense, targets, true, skill.power);
      result_str += handy_buff_handler((b) => b.hit_evade, targets, true, skill.power);
      result_str += handy_buff_handler((b) => b.magic_attack, targets, true, skill.power);
      result_str += handy_buff_handler((b) => b.physical_attack, targets, true, skill.power);
      break;
    case SkillEffect.DebuffAllStats:
      result_str += handy_buff_handler((b) => b.defense, targets, false, skill.power);
      result_str += handy_buff_handler((b) => b.hit_evade, targets, false, skill.power);
      result_str += handy_buff_handler((b) => b.magic_attack, targets, false, skill.power);
      result_str += handy_buff_handler((b) => b.physical_attack, targets, false, skill.power);
      break;
    case SkillEffect.Charm:
    case SkillEffect.Bind:
    case SkillEffect.Sick:
    case SkillEffect.Sleep:
    case SkillEffect.Panic:
    case SkillEffect.Mute:
    case SkillEffect.Poison:
      result_str += handy_ailment_handler(targets, skill.effect);
      break;
    
  }
  return result_str;
}

function handy_buff_handler(buffer: (b: Buffs) => Buffable, targets: BattleFighter[], 
                            positive: boolean, skill_power?: SkillPower) {
  let result_str = "";
  for (let t = 0; t < targets.length; t++) {
    const power = buff_power(skill_power) * (positive ? 1 : -1);
    buffer(targets[t].data.buffs).raise(power);
    result_str += "<br/>" + targets[t].name + " had its " + buffer(targets[t].data.buffs) + 
      " lowered " + power + " times";
  }
  return result_str;
}

function handy_ailment_handler(targets: BattleFighter[], effect: SkillEffect) {
  let result_str = "";
  for (let t = 0; t < targets.length; t++) {
    targets[t].data.ailments.add(effect);
    result_str += "<br/>" + targets[t].name + " is " + effect;
  }
  return result_str;
}