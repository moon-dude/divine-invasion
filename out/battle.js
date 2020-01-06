"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jlib_1 = require("./jlib");
var battle_data_1 = require("./battle_data");
var skill_effect_1 = require("./data/skill_effect");
var battle_info_1 = require("./battle_info");
var emotion_1 = require("./emotion");
var SmartHTMLElement_1 = require("./SmartHTMLElement");
var EMPTY_ENTRY = "<td></td><td></td><td></td>";
// This class should be instantiated and destroyed without any move happening or Actors being destroyed.
var Battle = /** @class */ (function () {
    function Battle(fighters) {
        var _a, _b;
        this.battle_idx = -1;
        this.battle_action_btns = [];
        this.battle_tbody = document.getElementById("battle_tbody");
        this.info_title = new SmartHTMLElement_1.SmartHTMLElement("info_title");
        this.info_description = new SmartHTMLElement_1.SmartHTMLElement("info_description");
        this.more_info = new SmartHTMLElement_1.SmartHTMLElement("more_info_div");
        this.battle_action_span = document.getElementById("battle_action_span");
        this.fighters = new Map();
        this.fighters.set(battle_data_1.BattleSide.Our, []);
        this.fighters.set(battle_data_1.BattleSide.Their, []);
        this.turn_order = [];
        for (var i = 0; i < 10; i++) {
            var new_button = document.createElement("button");
            this.battle_action_span.appendChild(new_button);
            this.battle_action_btns.push(new_button);
        }
        for (var i = 0; i < fighters.length; i++) {
            var side = fighters[i].data.side;
            (_a = this.fighters.get(side)) === null || _a === void 0 ? void 0 : _a.push(fighters[i]);
            this.turn_order.push(new battle_data_1.BattleIndex(side, (((_b = this.fighters.get(side)) === null || _b === void 0 ? void 0 : _b.length) || 0) - 1));
        }
    }
    Battle.prototype.render = function () {
        var new_battle_tbody = "";
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
            new_battle_tbody += row_html;
        }
        if (new_battle_tbody != this.battle_tbody.innerHTML) {
            this.battle_tbody.innerHTML = new_battle_tbody;
        }
    };
    Battle.prototype.entry_html = function (fighter) {
        var mood = "";
        if (fighter.data.mood != null) {
            mood = emotion_1.mood_string(fighter.data.mood);
        }
        return "<td>" + fighter.name + " " + mood + "</td><td>" +
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
        this.render_turn();
    };
    Battle.prototype.take_turn = function () {
        // get who's turn it is.
        var turn_index = this.turn_order[this.battle_idx];
        var fighter = this.fighters.get(turn_index.side)[turn_index.index];
        battle_info_1.BattleInfo.actor_name = fighter.name;
        if (fighter.data.modded_base_stats().hp <= 0) {
            battle_info_1.BattleInfo.description = " is dead and can't attack! ";
            return;
        }
        if (fighter.data.side == battle_data_1.BattleSide.Our) {
            this.me_take_turn(fighter);
        }
        else {
            this.ai_take_turn(fighter);
        }
    };
    Battle.prototype.me_take_turn = function (fighter) {
        this.battle_action_span.style.display = "";
        var button_index = 0;
        this.battle_action_btns[button_index++].innerHTML = "Attack";
        for (var i = 0; i < fighter.data.skills.length; i++) {
            this.set_button(button_index++, fighter.data.skills[i].name);
        }
        while (button_index < this.battle_action_btns.length) {
            this.set_button(button_index++, null);
        }
    };
    Battle.prototype.set_button = function (idx, value) {
        if (value == null) {
            this.battle_action_btns[idx].style.display = "none";
        }
        else {
            this.battle_action_btns[idx].style.display = "";
            this.battle_action_btns[idx].innerHTML = value;
        }
    };
    Battle.prototype.ai_take_turn = function (fighter) {
        this.battle_action_span.style.display = "none";
        // Choose whether to attack or use skill.
        var chosen_skill = this.choose_skill(fighter);
        var targets = [];
        if (chosen_skill == null || chosen_skill.target == skill_effect_1.SkillTarget.SingleEnemy) {
            // Choose a random target.
            var target = this.get_attack_target(fighter);
            if (target == null) {
                battle_info_1.BattleInfo.description = "has no one to attack! ";
                fighter.data.before_end_of_turn();
                return;
            }
            else {
                targets.push(target);
            }
        }
        else if (chosen_skill.target == skill_effect_1.SkillTarget.SingleAlly) {
            // TODO: Manually choose the best target for the skill.
            // For now just choose weakest health.
            var weakest_ally = null;
            var allies = this.fighters.get(fighter.data.side);
            for (var i = 0; i < allies.length; i++) {
                if (allies[i].data.mod_stats.hp == 0) {
                    continue;
                }
                if (weakest_ally == null ||
                    allies[i].data.modded_base_stats().hp < weakest_ally.data.modded_base_stats().hp) {
                    weakest_ally = allies[i];
                }
            }
            if (weakest_ally == null) {
                battle_info_1.BattleInfo.description = "could not find a valid target!";
            }
            else {
                targets.push(weakest_ally);
            }
        }
        else if (chosen_skill.target == skill_effect_1.SkillTarget.AllEnemies) {
            // TODO: select all enemies.
            var enemy_fighters = (this.fighters.get(battle_data_1.other_side(fighter.data.side))
                .filter(function (x) { return x.data.modded_base_stats().hp > 0; }));
            for (var i = 0; i < enemy_fighters.length; i++) {
                targets.push(enemy_fighters[i]);
            }
        }
        // attack target.
        this.take_battle_action(fighter, chosen_skill, targets);
        fighter.data.before_end_of_turn();
    };
    Battle.prototype.render_turn = function () {
        this.info_title.set_inner_html(battle_info_1.BattleInfo.actor_name) + ": ";
        this.info_description.set_inner_html(battle_info_1.BattleInfo.description);
        this.more_info.set_inner_html(battle_info_1.BattleInfo.result);
        battle_info_1.BattleInfo.clear();
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
        battle_info_1.BattleInfo.actor_name = fighter.name;
        if (skill == null) {
            battle_info_1.BattleInfo.description = "attacked. ";
            var damage = Math.floor(fighter.data.modded_base_stats().st + fighter.data.modded_base_stats().dx);
            for (var t = 0; t < targets.length; t++) {
                battle_info_1.BattleInfo.result += targets[t].name + " ";
                targets[t].data.take_damage(damage);
            }
        }
        else {
            fighter.data.mod_stats.mp -= skill.cost;
            battle_info_1.BattleInfo.description = "used `" + skill.name + "`. ";
            for (var t = 0; t < targets.length; t++) {
                skill_effect_1.resolve_skill_effect(fighter, skill, targets[t]);
            }
        }
    };
    return Battle;
}());
exports.Battle = Battle;
