"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("./data/util");
var battle_data_1 = require("./battle_data");
var jlib_1 = require("./jlib");
function ai_take_turn(fighter, fighters) {
    // Choose whether to attack or use skill.
    var chosen_skill = choose_skill(fighter);
    var targets = [];
    if (chosen_skill == null || chosen_skill.target == util_1.Target.SingleEnemy) {
        // Choose a random target.
        var target = get_attack_target(fighter, fighters);
        if (target == null) {
            fighter.data.before_end_of_turn();
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
        var allies = fighters.get(fighter.data.side);
        for (var i = 0; i < allies.length; i++) {
            if (allies[i].data.mod_stats.hp == 0) {
                continue;
            }
            if (weakest_ally == null ||
                allies[i].data.modded_base_stats().hp <
                    weakest_ally.data.modded_base_stats().hp) {
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
            .get(battle_data_1.other_side(fighter.data.side))
            .filter(function (x) { return x.data.modded_base_stats().hp > 0; });
        for (var i = 0; i < enemy_fighters.length; i++) {
            targets.push(enemy_fighters[i]);
        }
    }
    return [chosen_skill, targets];
}
exports.ai_take_turn = ai_take_turn;
function choose_skill(attacker) {
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
}
function get_attack_target(attacker, fighters) {
    return jlib_1.random_array_element(fighters
        .get(battle_data_1.other_side(attacker.data.side))
        .filter(function (x) { return x.data.modded_base_stats().hp > 0; }));
}
