import { Target } from "./data/util";
import { BattleFighter, BattleSide, other_side } from "./battle_data";
import { random_array_element } from "./jlib";
import { Skill } from "./data/skill";
import { BattleAction, AttackAction, SkillAction } from "./battle";

export function ai_take_turn(
  fighter: BattleFighter,
  fighters: Map<BattleSide, BattleFighter[]>
): [BattleAction | null, BattleFighter[]] {
  // Choose whether to attack or use skill.
  let chosen_skill = choose_skill(fighter);
  let targets: BattleFighter[] = [];
  if (chosen_skill == null || chosen_skill.target == Target.SingleEnemy) {
    // Choose a random target.
    let target = get_attack_target(fighter, fighters);
    if (target == null) {
      return [null, []];
    } else {
      targets.push(target);
    }
  } else if (chosen_skill.target == Target.SingleAlly) {
    // TODO: Manually choose the best target for the skill.
    // For now just choose weakest health.
    let weakest_ally: BattleFighter | null = null;
    const allies = fighters.get(fighter.data.side)!;
    for (let i = 0; i < allies.length; i++) {
      if (allies[i].data.mod_stats.hp == 0) {
        continue;
      }
      if (
        weakest_ally == null ||
        allies[i].data.modded_base_stats().hp <
          weakest_ally.data.modded_base_stats().hp
      ) {
        weakest_ally = allies[i];
      }
    }
    if (weakest_ally == null) {
      
    } else {
      targets.push(weakest_ally);
    }
  } else if (chosen_skill.target == Target.AllEnemies) {
    // TODO: select all enemies.
    const enemy_fighters = fighters
      .get(other_side(fighter.data.side))!
      .filter(x => x.data.modded_base_stats().hp > 0);
    for (let i = 0; i < enemy_fighters.length; i++) {
      targets.push(enemy_fighters[i]);
    }
  }
  if (chosen_skill == null) {
    return [new AttackAction(), targets];
  } else {
    return [new SkillAction(chosen_skill.name), targets];
  }
}

function choose_skill(attacker: BattleFighter): Skill | null {
  let choice_idx = Math.floor(
    Math.random() * (attacker.data.skills.length + 1)
  );
  if (choice_idx >= attacker.data.skills.length) {
    return null;
  }
  while (
    attacker.data.skills[choice_idx].cost > attacker.data.modded_base_stats().mp
  ) {
    choice_idx++;
    if (choice_idx >= attacker.data.skills.length) {
      return null;
    }
  }
  return attacker.data.skills[choice_idx];
}

function get_attack_target(
  attacker: BattleFighter,
  fighters: Map<BattleSide, BattleFighter[]>
): BattleFighter | null {
  return random_array_element(
    fighters
      .get(other_side(attacker.data.side))!
      .filter(x => x.data.modded_base_stats().hp > 0)
  );
}
