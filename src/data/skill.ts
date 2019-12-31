export enum SkillElement {
  Phys,
  Gun,
  Elec,
  Force,
  Dark,
  Light,
  Support,
  Recovery,
}

export enum SkillPower {
  Weak = 2,
  Medium = 3,
  Strong = 4,
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
