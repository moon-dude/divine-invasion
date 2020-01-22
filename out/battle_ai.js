"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("./data/util");
var battle_data_1 = require("./battle_data");
var jlib_1 = require("./jlib");
var actions_1 = require("./actions");
function ai_take_turn(fighter, fighters) {
    // Choose whether to attack or use skill.
    var chosen_skill = choose_skill(fighter);
    var targets = [];
    if (chosen_skill == null || chosen_skill.target == util_1.Target.SingleEnemy) {
        // Choose a random target.
        var target = get_attack_target(fighter, fighters);
        if (target == null) {
            return [null, []];
        }
        else {
            targets.push(target);
        }
    }
    else if (chosen_skill.target == util_1.Target.SingleAlly) {
        // TODO: Manually choose the best target for the skill.
        // For now just choose weakest health.
        var weakest_ally = null;
        var allies = fighters.get(fighter.side);
        for (var i = 0; i < allies.length; i++) {
            if (allies[i].mod_stats.hp == 0) {
                continue;
            }
            if (weakest_ally == null ||
                allies[i].modded_base_stats().hp <
                    weakest_ally.modded_base_stats().hp) {
                weakest_ally = allies[i];
            }
        }
        if (weakest_ally == null) {
        }
        else {
            targets.push(weakest_ally);
        }
    }
    else if (chosen_skill.target == util_1.Target.AllEnemies) {
        // TODO: select all enemies.
        var enemy_fighters = fighters
            .get(battle_data_1.other_side(fighter.side))
            .filter(function (x) { return x.modded_base_stats().hp > 0; });
        for (var i = 0; i < enemy_fighters.length; i++) {
            targets.push(enemy_fighters[i]);
        }
    }
    if (chosen_skill == null) {
        return [new actions_1.AttackAction(), targets];
    }
    else {
        return [new actions_1.SkillAction(chosen_skill.name), targets];
    }
}
exports.ai_take_turn = ai_take_turn;
function choose_skill(attacker) {
    var choice_idx = Math.floor(Math.random() * (attacker.skills.length + 1));
    if (choice_idx >= attacker.skills.length) {
        return null;
    }
    while (attacker.skills[choice_idx].cost > attacker.modded_base_stats().mp) {
        choice_idx++;
        if (choice_idx >= attacker.skills.length) {
            return null;
        }
    }
    return attacker.skills[choice_idx];
}
function get_attack_target(attacker, fighters) {
    return jlib_1.random_array_element(fighters
        .get(battle_data_1.other_side(attacker.side))
        .filter(function (x) { return x.modded_base_stats().hp > 0; }));
}
