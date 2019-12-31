"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SkillElement;
(function (SkillElement) {
    SkillElement[SkillElement["Phys"] = 0] = "Phys";
    SkillElement[SkillElement["Gun"] = 1] = "Gun";
    SkillElement[SkillElement["Elec"] = 2] = "Elec";
    SkillElement[SkillElement["Force"] = 3] = "Force";
    SkillElement[SkillElement["Dark"] = 4] = "Dark";
    SkillElement[SkillElement["Light"] = 5] = "Light";
    SkillElement[SkillElement["Support"] = 6] = "Support";
    SkillElement[SkillElement["Recovery"] = 7] = "Recovery";
})(SkillElement = exports.SkillElement || (exports.SkillElement = {}));
var SkillPower;
(function (SkillPower) {
    SkillPower[SkillPower["Weak"] = 2] = "Weak";
    SkillPower[SkillPower["Medium"] = 3] = "Medium";
    SkillPower[SkillPower["Strong"] = 4] = "Strong";
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
