"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
