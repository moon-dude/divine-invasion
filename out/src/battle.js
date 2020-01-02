"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jlib_1 = require("./jlib");
var battle_data_1 = require("./battle_data");
var skill_1 = require("./data/skill");
var EMPTY_ENTRY = "<td></td><td></td><td></td>";
// This class should be instantiated and destroyed without any move happening or Actors being destroyed.
var Battle = /** @class */ (function () {
    function Battle(fighters) {
        var _a, _b;
        this.battle_idx = -1;
        this.battle_tbody = document.getElementById("battle_tbody");
        this.info_div = document.getElementById("battle_info");
        this.fighters = new Map();
        this.fighters.set(battle_data_1.BattleSide.Our, []);
        this.fighters.set(battle_data_1.BattleSide.Their, []);
        this.turn_order = [];
        for (var i = 0; i < fighters.length; i++) {
            var side = fighters[i].data.side;
            (_a = this.fighters.get(side)) === null || _a === void 0 ? void 0 : _a.push(fighters[i]);
            this.turn_order.push(new battle_data_1.BattleIndex(side, (((_b = this.fighters.get(side)) === null || _b === void 0 ? void 0 : _b.length) || 0) - 1));
        }
    }
    Battle.prototype.render = function () {
        this.battle_tbody.innerHTML = "";
        var theirs = this.fighters.get(battle_data_1.BattleSide.Their);
        var ours = this.fighters.get(battle_data_1.BattleSide.Our);
        for (var i = 0; i < ours.length || i < theirs.length; i++) {
            var row_html = "<tr>";
            if (i < ours.length) {
                row_html += this.entry_html(ours[i]);
            }
            else {
                row_html += EMPTY_ENTRY;
            }
            row_html += "<td></td>";
            if (i < theirs.length) {
                row_html += this.entry_html(theirs[i]);
            }
            else {
                row_html += EMPTY_ENTRY;
            }
            this.battle_tbody.innerHTML += row_html;
        }
    };
    Battle.prototype.entry_html = function (fighter) {
        return "<td>" + fighter.name + "</td><td>" +
            fighter.data.modded_base_stats().hp + "/" + fighter.data.base_stats.hp + "</td><td>" +
            fighter.data.modded_base_stats().mp + "/" + fighter.data.base_stats.mp;
    };
    // returns null if battle is not over.
    Battle.prototype.battle_winner = function () {
        var winner = battle_data_1.BattleSide.Their;
        for (var i = 0; i < this.fighters.get(battle_data_1.BattleSide.Our).length; i++) {
            if (this.fighters.get(battle_data_1.BattleSide.Our)[i].data.modded_base_stats().hp > 0) {
                winner = battle_data_1.BattleSide.Our;
                break;
            }
        }
        if (winner == battle_data_1.BattleSide.Their) {
            return winner;
        }
        for (var i = 0; i < this.fighters.get(battle_data_1.BattleSide.Their).length; i++) {
            if (this.fighters.get(battle_data_1.BattleSide.Their)[i].data.modded_base_stats().hp > 0) {
                winner = null;
                break;
            }
        }
        return winner;
    };
    Battle.prototype.next_turn = function () {
        this.battle_idx = (this.battle_idx + 1) % this.turn_order.length;
        this.take_turn();
    };
    Battle.prototype.take_turn = function () {
        // get who's turn it is.
        var turn_index = this.turn_order[this.battle_idx];
        var fighter = this.fighters.get(turn_index.side)[turn_index.index];
        if (fighter.data.modded_base_stats().hp <= 0) {
            this.info_div.innerHTML = "" + fighter.name + " is dead and can't attack!";
            return;
        }
        // Choose whether to attack or use skill.
        var chosen_skill = this.choose_skill(fighter);
        var targets = [];
        if (chosen_skill == null || chosen_skill.target == skill_1.SkillTarget.Single) {
            // Choose a random target.
            var target = this.get_attack_target(fighter);
            if (target == null) {
                this.info_div.innerHTML = "" + fighter.name + " has no one to attack!";
                return;
            }
            else {
                targets.push(target);
            }
        }
        else if (chosen_skill.target == skill_1.SkillTarget.AllEnemies) {
            // TODO: select all enemies.
        }
        // attack target.
        this.take_battle_action(fighter, chosen_skill, targets);
    };
    Battle.prototype.choose_skill = function (attacker) {
        var choice_idx = Math.floor(Math.random() * (attacker.data.skills.length + 1));
        if (choice_idx >= attacker.data.skills.length) {
            return null;
        }
        while (attacker.data.skills[choice_idx].cost > attacker.data.modded_base_stats().mp) {
            choice_idx++;
            if (choice_idx >= attacker.data.skills.length) {
                return null;
            }
        }
        return attacker.data.skills[choice_idx];
    };
    Battle.prototype.get_attack_target = function (attacker) {
        return jlib_1.random_array_element(this.fighters.get(battle_data_1.other_side(attacker.data.side))
            .filter(function (x) { return x.data.modded_base_stats().hp > 0; }));
    };
    Battle.prototype.take_battle_action = function (fighter, skill, targets) {
        if (skill == null) {
            this.info_div.innerHTML = "" + fighter.name + " attacked!";
            var damage = Math.floor(fighter.data.modded_base_stats().st + fighter.data.modded_base_stats().dx);
            for (var t = 0; t < targets.length; t++) {
                targets[t].data.mod_stats.hp -= damage;
                this.info_div.innerHTML += "<br/>" + targets[t].name + " took " + damage + " damage!";
            }
        }
        else {
            fighter.data.mod_stats.mp -= skill.cost;
            this.info_div.innerHTML = "" + fighter.name + " used " + skill.name + "!";
            if (skill.effect == skill_1.SkillEffect.Damage) {
                var damage = 1;
                if (skill.element == skill_1.SkillElement.Phys) {
                    damage = Math.floor(fighter.data.modded_base_stats().st * skill.power);
                }
                else if (skill.element == skill_1.SkillElement.Gun) {
                    damage = Math.floor(fighter.data.modded_base_stats().dx * skill.power);
                }
                else if (skill.element == skill_1.SkillElement.Light || skill.element == skill_1.SkillElement.Dark) {
                    damage = Math.floor(fighter.data.modded_base_stats().lu * skill.power);
                }
                else {
                    damage = Math.floor(fighter.data.modded_base_stats().ma * skill.power);
                }
                for (var t = 0; t < targets.length; t++) {
                    targets[t].data.mod_stats.hp -= damage;
                    this.info_div.innerHTML += "<br/>" + targets[t].name + " took " + damage + " damage";
                }
            }
            else if (skill.effect == skill_1.SkillEffect.Heal) {
                var power = Math.floor(fighter.data.modded_base_stats().ma) * skill.power;
                for (var t = 0; t < targets.length; t++) {
                    targets[t].data.mod_stats.hp += power;
                    this.info_div.innerHTML += "<br/>" + targets[t].name + " healed for " + power + "";
                }
            }
        }
    };
    return Battle;
}());
exports.Battle = Battle;