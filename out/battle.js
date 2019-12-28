"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// class Skill { }
var BattleStats = /** @class */ (function () {
    function BattleStats(hp, mp, attack_power) {
        this.max_hp = hp;
        this.hp = hp;
        this.max_mp = mp;
        this.mp = mp;
        this.attack_power = attack_power;
    }
    return BattleStats;
}());
exports.BattleStats = BattleStats;
// This class should be instantiated and destroyed without any move happening or Actors being destroyed.
var Battle = /** @class */ (function () {
    function Battle(player_supports, enemies) {
        this.player_supports = player_supports;
        this.enemies = enemies;
    }
    Battle.prototype.update = function () {
    };
    return Battle;
}());
exports.Battle = Battle;
