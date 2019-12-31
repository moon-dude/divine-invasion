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
  Weak = 2,
  Medium = 3,
  Heavy = 4,
  Severe = 5,
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

export enum SkillEffect {
  Damage,
  Heal,
  BuffDefense,
  DebuffDefense,
  BuffHitEvade,
  DebuffHitEvade,
  BuffAllStats,
  DebuffAllStats,
  BuffMagic,
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

export class Skill {
  name: string;
  cost: number;
  effect?: SkillEffect;
  secondary_effect?: SkillEffect;
  tertiary_effect?: SkillEffect;
  power?: SkillPower;
  element: SkillElement;
  hits?: SkillHits;
  rank: number;
  target: SkillTarget;
  remark?: string = "";
  also_cast?: string[] = [];

  constructor(name: string,
    cost: number,
    effect: SkillEffect,
    power: SkillPower,
    element: SkillElement,
    hits: SkillHits,
    rank: number,
    target: SkillTarget) {
      this.name = name;
      this.cost = cost;
      this.effect = effect;
      this.power = power;
      this.element = element;
      this.hits = hits;
      this.rank = rank;
      this.target = target;
    }
}
