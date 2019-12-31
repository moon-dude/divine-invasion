"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var e_1, _a;
Object.defineProperty(exports, "__esModule", { value: true });
var demon_1 = require("../demon");
var DEMONS_JSON = __importStar(require("../../../raw/mini/demons.json"));
var demon_map = new Map();
try {
    for (var _b = __values(DEMONS_JSON.entries), _c = _b.next(); !_c.done; _c = _b.next()) {
        var entry = _c.value;
        demon_map.set(entry.name, demon_from(name, DEMONS_JSON[name]));
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
    }
    finally { if (e_1) throw e_1.error; }
}
function demon_from(name, demon) {
    var e_2, _a;
    var result = new demon_1.Demon();
    result.affinities = demon.affinities;
    result.ailments = demon.ailments;
    result.level = demon.lvl;
    result.race = demon.race;
    result.resists = structure_resists(demon.resists);
    try {
        for (var _b = __values(demon.skills), _c = _b.next(); !_c.done; _c = _b.next()) {
            var skill = _c.value;
            result.skills.set(skill[0], skill[1]);
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return result;
}
exports.DEMON_MAP = demon_map;
function structure_resists(resists) {
    var result = new Map();
    for (var key in resists) {
    }
    return result;
}
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
