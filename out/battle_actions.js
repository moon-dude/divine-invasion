"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AttackAction = /** @class */ (function () {
    function AttackAction() {
    }
    return AttackAction;
}());
exports.AttackAction = AttackAction;
;
var InventoryAction = /** @class */ (function () {
    function InventoryAction(value) {
        this.item_name = value;
    }
    return InventoryAction;
}());
exports.InventoryAction = InventoryAction;
var SkillAction = /** @class */ (function () {
    function SkillAction(value) {
        this.skill_name = value;
    }
    return SkillAction;
}());
exports.SkillAction = SkillAction;
var RequestAction = /** @class */ (function () {
    function RequestAction(value) {
        this.request = value;
    }
    return RequestAction;
}());
exports.RequestAction = RequestAction;
