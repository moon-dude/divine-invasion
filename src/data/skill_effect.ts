import { BattleFighter } from "../battle_data";
import { Skill } from "./skill";
import { Buffs, Buffable } from "./buffs";
import { Log } from "../log";

export enum SkillEffect {
  Damage = "Damage",
  Heal = "Heal",
  BuffDefense = "BuffDefense",
  DebuffDefense = "DebuffDefense",
  BuffHitEvade = "BuffHitEvade",
  DebuffHitEvade = "DebuffHitEvade",
  BuffAllStats = "BuffAllStats",
  DebuffAllStats = "DebuffAllStats",
  BuffMagicAttack = "BuffMagicAttack",
  BuffPhysAttack = "BuffPhysAttack",
  Charm = "Charm",
  Bind = "Bind",
  Sick = "Sick",
  Sleep = "Sleep",
  Panic = "Panic",
  Mute = "Mute",
  Poison = "Poison",
  CurePoisonSick = "CurePoisonSick",
  CuresAllAilments = "CuresAllAilments",
  NextMagicAttackX2AndHalfDamage = "NextMagicAttackX2AndHalfDamage",
  NextPhysGunAttackCrit = "NextPhysGunAttackCrit",
  RemoveAllBuffs = "RemoveAllBuffs",
  RemoveAllDebuffs = "RemoveAllDebuffs",
  RemoveAllBuffsAndDebuffs = "RemoveAllBuffsAndDebuffs",
  ReviveWithHalfHP = "ReviveWithHalfHP",
  ReviveWithFullHP = "ReviveWithFullHP",
  ReviveWithFullHPCuredUserDies = "ReviveWithFullHPCuredUserDies"
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
  Passive
}

export enum SkillResist {
  Weak,
  Resist
}

export enum SkillPower {
  Weak,
  Medium,
  Heavy,
  Severe
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
  X4To12
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

export function resolve_skill_effect(
  fighter: BattleFighter,
  skill: Skill,
  target: BattleFighter
) {
  switch (skill.effect) {
    case SkillEffect.Damage:
      let damage = 1;
      if (skill.element == SkillElement.Phys) {
        damage = Math.floor(
          fighter.data.modded_base_stats().st * damage_power(skill.power)
        );
      } else if (skill.element == SkillElement.Gun) {
        damage = Math.floor(
          fighter.data.modded_base_stats().dx * damage_power(skill.power)
        );
      } else if (
        skill.element == SkillElement.Light ||
        skill.element == SkillElement.Dark
      ) {
        damage = Math.floor(
          fighter.data.modded_base_stats().lu * damage_power(skill.power)
        );
      } else {
        damage = Math.floor(
          fighter.data.modded_base_stats().ma * damage_power(skill.power)
        );
      }
      const success: boolean = target.data.will_take_hit(
        fighter.data.modded_base_stats().dx,
        fighter.data.buffs.defense.get(),
        1.0
      ); // TODO: Pipe in hit/miss chance for skills here.
      if (success) {
        target.data.take_damage(damage);
      } else {
        Log.push(target.name + " dodged! ");
      }
      break;
    case SkillEffect.Heal:
      const power =
        Math.floor(fighter.data.modded_base_stats().ma) *
        damage_power(skill.power);
      target.data.heal_for(power);
      break;
    case SkillEffect.BuffDefense:
      handy_buff_handler(b => b.defense, target, true, skill.power);
      break;
    case SkillEffect.DebuffDefense:
      handy_buff_handler(b => b.defense, target, false, skill.power);
      break;
    case SkillEffect.BuffHitEvade:
      handy_buff_handler(b => b.hit_evade, target, true, skill.power);
      break;
    case SkillEffect.DebuffHitEvade:
      handy_buff_handler(b => b.hit_evade, target, false, skill.power);
      break;
    case SkillEffect.BuffMagicAttack:
      handy_buff_handler(b => b.magic_attack, target, true, skill.power);
      break;
    case SkillEffect.BuffPhysAttack:
      handy_buff_handler(b => b.physical_attack, target, true, skill.power);
      break;
    case SkillEffect.BuffAllStats:
      handy_buff_handler(b => b.defense, target, true, skill.power);
      handy_buff_handler(b => b.hit_evade, target, true, skill.power);
      handy_buff_handler(b => b.magic_attack, target, true, skill.power);
      handy_buff_handler(b => b.physical_attack, target, true, skill.power);
      break;
    case SkillEffect.DebuffAllStats:
      handy_buff_handler(b => b.defense, target, false, skill.power);
      handy_buff_handler(b => b.hit_evade, target, false, skill.power);
      handy_buff_handler(b => b.magic_attack, target, false, skill.power);
      handy_buff_handler(b => b.physical_attack, target, false, skill.power);
      break;
    case SkillEffect.Charm:
    case SkillEffect.Bind:
    case SkillEffect.Sick:
    case SkillEffect.Sleep:
    case SkillEffect.Panic:
    case SkillEffect.Mute:
    case SkillEffect.Poison:
      handy_ailment_handler(target, skill.effect, true);
      break;
  }
}

function handy_buff_handler(
  buffer: (b: Buffs) => Buffable,
  target: BattleFighter,
  positive: boolean,
  skill_power?: SkillPower
) {
  const power = buff_power(skill_power) * (positive ? 1 : -1);
  buffer(target.data.buffs).raise(power);
  Log.push(
    buffer(target.data.buffs) + (positive ? " raised" : " lowered"));
}

function handy_ailment_handler(
  target: BattleFighter,
  effect: SkillEffect,
  positive: boolean
) {
  // positive in the medical way.
  if (positive) {
    Log.push(target.name + " is now " + effect);
    target.data.ailments.add(effect);
  } else if (target.data.ailments.has(effect)) {
    Log.push(target.name + " is no longer " + effect);
    target.data.ailments.delete(effect);
  }
}
