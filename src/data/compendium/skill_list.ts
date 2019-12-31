import { Skill, SkillEffect, SkillPower, SkillElement, SkillHits, SkillTarget } from "../skill";

export const SKILL_MAP: Map<string, Skill> = new Map([
  {
    "name": "Zio",
    "cost": 5, 
    "effect": SkillEffect.Damage,
    "power": SkillPower.Weak, 
    "element": SkillElement.Elec, 
    "hits": SkillHits.x1, 
    "rank": 1, 
    "target": SkillTarget.Single
  }, {
    "name": "Dia",
    "cost": 8, 
    "effect": SkillEffect.Heal, 
    "power": SkillPower.Weak,
    "element": SkillElement.Recovery, 
    "hits": SkillHits.x1,
    "rank": 2, 
    "target": SkillTarget.Single
  }
].map(x => [x.name, x]));