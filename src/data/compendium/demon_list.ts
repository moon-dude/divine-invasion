import { Demon } from "../demon";
import { SkillElement } from "../skill";

export const DEMON_MAP: Map<string, Demon> = new Map([
  {
    name: "Pixie",
    affinities: {
      [SkillElement.Elec]: 1,
      [SkillElement.Recovery]: 1,
    }, 
    ailments: {
      panic: "wk"
    }, 
    level: 9, 
    race: "Fairy", 
    resists: new Map([
      [SkillElement.Dark, "wk"], 
      [SkillElement.Elec, "rs"],
    ]), 
    skills: new Map([
      ["Dia", 0], 
      ["Dormina", 12], 
      ["Healing Knowhow", 11], 
      ["Zio", 0],
    ]), 
    stats: {
      ag: 22, 
      dx: 13, 
      hp: 101, 
      lu: 15, 
      ma: 19, 
      mp: 86, 
      st: 11
    }
  }, 
  { 
    name: "Poltergeist",
    affinities: {
      "ailment": 1, 
      "force": -4, 
      "gun": 2, 
      "light": -3, 
      "recovery": -2, 
      "support": 1
    }, 
    ailments: {
      "panic": "rs"
    }, 
    attack: "Phys x1-2, 1 enemy",
    level: 19, 
    race: "Spirit", 
    resists: new Map([
      [SkillElement.Force, "wk"], 
      [SkillElement.Light, "wk"],
    ]), 
    skills: new Map([
      ["Healing Knowhow", 21], 
      ["Rapid Needle", 20], 
      ["Sukunda", 0], 
      ["Tathlum Shot", 0],
    ]), 
    stats: {
      ag: 25, 
      dx: 23, 
      hp: 157, 
      lu: 28, 
      ma: 32, 
      mp: 132, 
      st: 15
    },
  }
].map(x => [x.name, x]));