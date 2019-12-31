"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var skill_1 = require("../skill");
exports.SKILL_MAP = new Map([
    {
        "name": "Zio",
        "cost": 5,
        "effect": skill_1.SkillEffect.Damage,
        "power": skill_1.SkillPower.Weak,
        "element": skill_1.SkillElement.Elec,
        "hits": skill_1.SkillHits.x1,
        "rank": 1,
        "target": skill_1.SkillTarget.Single
    }, {
        "name": "Dia",
        "cost": 8,
        "effect": skill_1.SkillEffect.Heal,
        "power": skill_1.SkillPower.Weak,
        "element": skill_1.SkillElement.Recovery,
        "hits": skill_1.SkillHits.x1,
        "rank": 2,
        "target": skill_1.SkillTarget.Single
    }, {
        "name": "Tathlum Shot",
        "cost": 7,
        "effect": skill_1.SkillEffect.Damage,
        "power": skill_1.SkillPower.Medium,
        "element": skill_1.SkillElement.Gun,
        "hits": skill_1.SkillHits.x1,
        "rank": 7,
        "target": skill_1.SkillTarget.Single
    },
    {
        "name": "Sukunda",
        "cost": 25,
        "effect": skill_1.SkillEffect.DebuffHitEvade,
        "power": skill_1.SkillPower.Weak,
        "element": skill_1.SkillElement.Support,
        "hits": skill_1.SkillHits.x1,
        "rank": 12,
        "target": skill_1.SkillTarget.AllEnemies
    },
].map(function (x) { return [x.name, x]; }));
