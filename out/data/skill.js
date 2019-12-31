"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SkillElement;
(function (SkillElement) {
    SkillElement[SkillElement["Phys"] = 0] = "Phys";
    SkillElement[SkillElement["Gun"] = 1] = "Gun";
    SkillElement[SkillElement["Fire"] = 2] = "Fire";
    SkillElement[SkillElement["Ice"] = 3] = "Ice";
    SkillElement[SkillElement["Elec"] = 4] = "Elec";
    SkillElement[SkillElement["Force"] = 5] = "Force";
    SkillElement[SkillElement["Dark"] = 6] = "Dark";
    SkillElement[SkillElement["Light"] = 7] = "Light";
    SkillElement[SkillElement["Support"] = 8] = "Support";
    SkillElement[SkillElement["Recovery"] = 9] = "Recovery";
    SkillElement[SkillElement["Ailment"] = 10] = "Ailment";
    SkillElement[SkillElement["Almighty"] = 11] = "Almighty";
    SkillElement[SkillElement["Other"] = 12] = "Other";
    SkillElement[SkillElement["Passive"] = 13] = "Passive";
})(SkillElement = exports.SkillElement || (exports.SkillElement = {}));
var SkillResist;
(function (SkillResist) {
    SkillResist[SkillResist["Weak"] = 0] = "Weak";
    SkillResist[SkillResist["Resist"] = 1] = "Resist";
})(SkillResist = exports.SkillResist || (exports.SkillResist = {}));
var SkillPower;
(function (SkillPower) {
    SkillPower[SkillPower["Weak"] = 2] = "Weak";
    SkillPower[SkillPower["Medium"] = 3] = "Medium";
    SkillPower[SkillPower["Heavy"] = 4] = "Heavy";
    SkillPower[SkillPower["Severe"] = 5] = "Severe";
})(SkillPower = exports.SkillPower || (exports.SkillPower = {}));
var SkillTarget;
(function (SkillTarget) {
    SkillTarget[SkillTarget["Single"] = 0] = "Single";
    SkillTarget[SkillTarget["All"] = 1] = "All";
    SkillTarget[SkillTarget["AllEnemies"] = 2] = "AllEnemies";
    SkillTarget[SkillTarget["AllAllies"] = 3] = "AllAllies";
    SkillTarget[SkillTarget["Multi"] = 4] = "Multi";
    SkillTarget[SkillTarget["Self"] = 5] = "Self";
})(SkillTarget = exports.SkillTarget || (exports.SkillTarget = {}));
var SkillHits;
(function (SkillHits) {
    SkillHits[SkillHits["X1"] = 0] = "X1";
    SkillHits[SkillHits["X1To2"] = 1] = "X1To2";
    SkillHits[SkillHits["X1To3"] = 2] = "X1To3";
    SkillHits[SkillHits["X1To4"] = 3] = "X1To4";
    SkillHits[SkillHits["X1To5"] = 4] = "X1To5";
    SkillHits[SkillHits["X2"] = 5] = "X2";
    SkillHits[SkillHits["X2To3"] = 6] = "X2To3";
    SkillHits[SkillHits["X2To4"] = 7] = "X2To4";
    SkillHits[SkillHits["X4To6"] = 8] = "X4To6";
    SkillHits[SkillHits["X4To12"] = 9] = "X4To12";
})(SkillHits = exports.SkillHits || (exports.SkillHits = {}));
var SkillEffect;
(function (SkillEffect) {
    SkillEffect[SkillEffect["Damage"] = 0] = "Damage";
    SkillEffect[SkillEffect["Heal"] = 1] = "Heal";
    SkillEffect[SkillEffect["BuffDefense"] = 2] = "BuffDefense";
    SkillEffect[SkillEffect["DebuffDefense"] = 3] = "DebuffDefense";
    SkillEffect[SkillEffect["BuffHitEvade"] = 4] = "BuffHitEvade";
    SkillEffect[SkillEffect["DebuffHitEvade"] = 5] = "DebuffHitEvade";
    SkillEffect[SkillEffect["BuffAllStats"] = 6] = "BuffAllStats";
    SkillEffect[SkillEffect["DebuffAllStats"] = 7] = "DebuffAllStats";
    SkillEffect[SkillEffect["BuffMagic"] = 8] = "BuffMagic";
    SkillEffect[SkillEffect["BuffPhysAttack"] = 9] = "BuffPhysAttack";
    SkillEffect[SkillEffect["Charm"] = 10] = "Charm";
    SkillEffect[SkillEffect["Bind"] = 11] = "Bind";
    SkillEffect[SkillEffect["Sick"] = 12] = "Sick";
    SkillEffect[SkillEffect["Sleep"] = 13] = "Sleep";
    SkillEffect[SkillEffect["Panic"] = 14] = "Panic";
    SkillEffect[SkillEffect["Mute"] = 15] = "Mute";
    SkillEffect[SkillEffect["Poison"] = 16] = "Poison";
    SkillEffect[SkillEffect["CurePoisonSick"] = 17] = "CurePoisonSick";
    SkillEffect[SkillEffect["CuresAllAilments"] = 18] = "CuresAllAilments";
    SkillEffect[SkillEffect["NextMagicAttackX2AndHalfDamage"] = 19] = "NextMagicAttackX2AndHalfDamage";
    SkillEffect[SkillEffect["NextPhysGunAttackGuaranteedCrit"] = 20] = "NextPhysGunAttackGuaranteedCrit";
    SkillEffect[SkillEffect["RemoveAllBuffs"] = 21] = "RemoveAllBuffs";
    SkillEffect[SkillEffect["RemoveAllDebuffs"] = 22] = "RemoveAllDebuffs";
    SkillEffect[SkillEffect["RemoveAllBuffsAndDebuffs"] = 23] = "RemoveAllBuffsAndDebuffs";
    SkillEffect[SkillEffect["ReviveWithHalfHP"] = 24] = "ReviveWithHalfHP";
    SkillEffect[SkillEffect["ReviveWithFullHP"] = 25] = "ReviveWithFullHP";
    SkillEffect[SkillEffect["ReviveWithFullHPCuredUserDies"] = 26] = "ReviveWithFullHPCuredUserDies";
})(SkillEffect = exports.SkillEffect || (exports.SkillEffect = {}));
var Skill = /** @class */ (function () {
    function Skill(name, cost, effect, power, element, hits, rank, target) {
        this.remark = "";
        this.also_cast = [];
        this.name = name;
        this.cost = cost;
        this.effect = effect;
        this.power = power;
        this.element = element;
        this.hits = hits;
        this.rank = rank;
        this.target = target;
    }
    return Skill;
}());
exports.Skill = Skill;
