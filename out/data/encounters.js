"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EncounterType = /** @class */ (function () {
    function EncounterType(enemies) {
        this.enemies = enemies;
    }
    return EncounterType;
}());
exports.EncounterType = EncounterType;
exports.ENC_INCUBI = new EncounterType(function () {
    return ["Pixie", "Pixie", "Pixie"];
});
