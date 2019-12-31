export enum SkillElement {
  Support,
  Recovery,
  Elec,
  Force,
  Dark,
  Light,
}

export enum SkillPower {
  Weak,
  Medium,
  Strong,
}

export enum SkillTarget {
  Single
}

export enum SkillHits {
  x1
}

export enum SkillEffect {
  Damage,
  Heal,
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
