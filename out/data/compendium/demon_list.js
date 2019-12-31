"use strict";
// import { Demon, RawDemon } from "../demon";
// import { SkillElement, SkillResist } from "../skill";
// import * as DEMONS_JSON from "../raw/mini/demons.json"
// let demon_map: Map<string, Demon> = new Map();
// for (const entry of DEMONS_JSON.entries) {
//   demon_map.set(entry.name, entry);
// }
// function demon_from(name: string, demon: RawDemon): Demon {
//   let result = new Demon();
//   result.affinities = demon.affinities;
//   result.ailments = demon.ailments;
//   result.level = demon.lvl;
//   result.race = demon.race;
//   result.resists = structure_resists(demon.resists);
//   for (const skill of demon.skills) {
//     result.skills.set(skill[0], skill[1]);
//   }
//   return result;
// }
// export const DEMON_MAP: Map<string, Demon> = demon_map;
// function structure_resists(resists: [string, string][]): Map<SkillElement, string> {
//   let result: Map<SkillElement, string> = new Map();
//   for (const entry of resists) {
//   }
//   return result;
// }
// export const DEMON_MAP: Map<string, Demon> = new Map([
//   {
//     name: "Pixie",
//     affinities: {
//       [SkillElement.Elec]: 1,
//       [SkillElement.Recovery]: 1,
//     }, 
//     ailments: {
//       panic: "wk"
//     }, 
//     level: 9, 
//     race: "Fairy", 
//     resists: new Map([
//       [SkillElement.Dark, "wk"], 
//       [SkillElement.Elec, "rs"],
//     ]), 
//     skills: new Map([
//       ["Dia", 0], 
//       ["Dormina", 12], 
//       ["Healing Knowhow", 11], 
//       ["Zio", 0],
//     ]), 
//     stats: {
//       ag: 22, 
//       dx: 13, 
//       hp: 101, 
//       lu: 15, 
//       ma: 19, 
//       mp: 86, 
//       st: 11
//     }
//   }, 
//   { 
//     name: "Poltergeist",
//     affinities: {
//       "ailment": 1, 
//       "force": -4, 
//       "gun": 2, 
//       "light": -3, 
//       "recovery": -2, 
//       "support": 1
//     }, 
//     ailments: {
//       "panic": "rs"
//     }, 
//     attack: "Phys x1-2, 1 enemy",
//     level: 19, 
//     race: "Spirit", 
//     resists: new Map([
//       [SkillElement.Force, SkillResist.Weak], 
//       [SkillElement.Light, SkillResist.Weak],
//     ]), 
//     skills: new Map([
//       ["Healing Knowhow", 21], 
//       ["Rapid Needle", 20], 
//       ["Sukunda", 0], 
//       ["Tathlum Shot", 0],
//     ]), 
//     stats: {
//       ag: 25, 
//       dx: 23, 
//       hp: 157, 
//       lu: 28, 
//       ma: 32, 
//       mp: 132, 
//       st: 15
//     },
//   },
//   {
//     name: "Katakirauwa",
//     affinities: new Map([
//         ["elec", -2], 
//         ["fire", -2], 
//         ["force", -2], 
//         ["ice", -2], 
//         ["light", -3]
//     ]), 
//     ailments: {
//         "sick": "rs"
//     }, 
//     level: 1, 
//     race: "Food", 
//     resists: {
//         "elec": SkillResist.Weak, 
//         "fire": SkillResist.Weak, 
//         "force": SkillResist.Weak, 
//         "ice": SkillResist.Weak, 
//         "light": SkillResist.Weak, 
//         "phys": SkillResist.Weak
//     }, 
//     "skills": {
//         "Bouncing Claw": 0, 
//         "Counter": 3, 
//         "Lunge": 2
//     }, 
//     "stats": {
//         "ag": 9, 
//         "dx": 6, 
//         "hp": 70, 
//         "lu": 7, 
//         "ma": 6, 
//         "mp": 34, 
//         "st": 7
//     }
// }, 
// ].map(x => [x.name, x]));
