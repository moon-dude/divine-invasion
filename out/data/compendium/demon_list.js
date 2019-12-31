"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var skill_1 = require("../skill");
exports.DEMON_MAP = new Map([
    {
        name: "Pixie",
        affinities: (_a = {},
            _a[skill_1.SkillElement.Elec] = 1,
            _a[skill_1.SkillElement.Recovery] = 1,
            _a),
        ailments: {
            panic: "wk"
        },
        level: 9,
        race: "Fairy",
        resists: new Map([
            [skill_1.SkillElement.Dark, "wk"],
            [skill_1.SkillElement.Elec, "rs"],
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
            [skill_1.SkillElement.Force, "wk"],
            [skill_1.SkillElement.Light, "wk"],
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
].map(function (x) { return [x.name, x]; }));
