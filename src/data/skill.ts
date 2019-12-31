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
  AllEnemies,
}

export enum SkillHits {
  x1
}

export enum SkillEffect {
  Damage,
  Heal,
  DebuffHitEvade,
}

export class Skill {
  name: string;
  cost: number;
  effect: SkillEffect;
  power: SkillPower;
  element: SkillElement;
  hits: SkillHits;
  rank: number;
  target: SkillTarget;

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
