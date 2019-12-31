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
    SkillTarget[SkillTarget["AllEnemies"] = 1] = "AllEnemies";
})(SkillTarget = exports.SkillTarget || (exports.SkillTarget = {}));
var SkillHits;
(function (SkillHits) {
    SkillHits[SkillHits["x1"] = 0] = "x1";
})(SkillHits = exports.SkillHits || (exports.SkillHits = {}));
var SkillEffect;
(function (SkillEffect) {
    SkillEffect[SkillEffect["Damage"] = 0] = "Damage";
    SkillEffect[SkillEffect["Heal"] = 1] = "Heal";
    SkillEffect[SkillEffect["DebuffHitEvade"] = 2] = "DebuffHitEvade";
})(SkillEffect = exports.SkillEffect || (exports.SkillEffect = {}));
var Skill = /** @class */ (function () {
    function Skill(name, cost, effect, power, element, hits, rank, target) {
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
