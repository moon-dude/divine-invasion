import {
  SkillEffect,
  SkillElement,
  SkillPower,
  SkillHits,
} from "./skill_effect";
import { Target } from "./util";

export type SkillId = string;

export class Skill {
  name: SkillId;
  cost: number;
  effect?: SkillEffect;
  secondary_effect?: SkillEffect;
  tertiary_effect?: SkillEffect;
  power?: SkillPower;
  element: SkillElement;
  hits?: SkillHits;
  rank: number;
  target: Target;
  remark?: string = "";
  also_cast?: string[] = [];

  constructor(
    name: string,
    cost: number,
    effect: SkillEffect,
    power: SkillPower,
    element: SkillElement,
    hits: SkillHits,
    rank: number,
    target: Target
  ) {
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
