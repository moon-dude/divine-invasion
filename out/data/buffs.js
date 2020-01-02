"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Buffable = /** @class */ (function () {
    function Buffable() {
        this.value = 1;
    }
    Buffable.prototype.raise = function (amount) {
        var delta = amount > 0 ? 1 : -1;
        for (var i = 0; i < amount; i++) {
            this.value += delta;
            if (this.value == 0) {
                this.value += delta;
            }
        }
    };
    Buffable.prototype.get = function () {
        return this.value;
    };
    return Buffable;
}());
exports.Buffable = Buffable;
var Buffs = /** @class */ (function () {
    function Buffs() {
        this.defense = new Buffable();
        this.hit_evade = new Buffable();
        this.magic_attack = new Buffable();
        this.physical_attack = new Buffable();
    }
    return Buffs;
}());
exports.Buffs = Buffs;
