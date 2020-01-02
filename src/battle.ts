import { random_array_element } from "./jlib";
import { BattleSide, BattleFighter, BattleIndex, other_side } from "./battle_data";
import { Skill, } from "./data/skill";
import { SkillTarget, resolve_skill_effect } from "./data/skill_effect";

const EMPTY_ENTRY: string = "<td></td><td></td><td></td>";

// This class should be instantiated and destroyed without any move happening or Actors being destroyed.
export class Battle {
  private fighters: Map<BattleSide, BattleFighter[]>;
  private turn_order: BattleIndex[];
  private battle_idx = -1;
  private battle_tbody: HTMLElement;
  private info_div: HTMLElement;

  constructor(fighters: BattleFighter[]) {
    this.battle_tbody = document.getElementById("battle_tbody")!;
    this.info_div = document.getElementById("battle_info")!;
    this.fighters = new Map();
    this.fighters.set(BattleSide.Our, []);
    this.fighters.set(BattleSide.Their, []);
    this.turn_order = [];
    for (let i = 0; i < fighters.length; i++) {
      const side: BattleSide = fighters[i].data.side;
      this.fighters.get(side)?.push(fighters[i]);
      this.turn_order.push(new BattleIndex(side, (this.fighters.get(side)?.length || 0) - 1));
    }
  }

  public render() {
    this.battle_tbody.innerHTML = "";
    const theirs = this.fighters.get(BattleSide.Their)!;
    const ours = this.fighters.get(BattleSide.Our)!;
    for (let i = 0; i < ours.length || i < theirs.length; i++) {
      let row_html = "<tr>"
      if (i < ours.length) {
        row_html += this.entry_html(ours[i]);
      } else {
        row_html += EMPTY_ENTRY;
      }
      row_html += "<td></td>";
      if (i < theirs.length) {
        row_html += this.entry_html(theirs[i]);
      } else {
        row_html += EMPTY_ENTRY;
      }
      this.battle_tbody.innerHTML += row_html;
    }
  }

  private entry_html(fighter: BattleFighter): string {
    return "<td>" + fighter.name + "</td><td>" + 
      fighter.data.modded_base_stats().hp + "/" + fighter.data.base_stats.hp+ "</td><td>" + 
      fighter.data.modded_base_stats().mp + "/" + fighter.data.base_stats.mp;
  }

  // returns null if battle is not over.
  public battle_winner(): BattleSide | null {
    let winner: BattleSide | null = BattleSide.Their;
    for (let i = 0; i < this.fighters.get(BattleSide.Our)!.length; i++) {
      if (this.fighters.get(BattleSide.Our)![i]!.data.modded_base_stats().hp > 0) {
        winner = BattleSide.Our;
        break;
      }
    }
    if (winner == BattleSide.Their) {
      return winner;
    }
    for (let i = 0; i < this.fighters.get(BattleSide.Their)!.length; i++) {
      if (this.fighters.get(BattleSide.Their)![i]!.data.modded_base_stats().hp > 0) {
        winner = null;
        break;
      }
    }
    return winner;
  }

  public next_turn() {
    this.battle_idx = (this.battle_idx + 1) % this.turn_order.length;
    this.take_turn();
  }

  public take_turn() {
    // get who's turn it is.
    let turn_index = this.turn_order[this.battle_idx]!;
    let fighter = this.fighters.get(turn_index.side)![turn_index.index]!;
    if (fighter.data.modded_base_stats().hp <= 0) {
      this.info_div.innerHTML = "" + fighter.name + " is dead and can't attack!";
      return;
    }
    // Choose whether to attack or use skill.
    let chosen_skill = this.choose_skill(fighter);
    let targets = [];
    if (chosen_skill == null || chosen_skill.target == SkillTarget.Single) {
      // Choose a random target.
      let target = this.get_attack_target(fighter);
      if (target == null) {
        this.info_div.innerHTML = "" + fighter.name + " has no one to attack!";
        return;
      } else {
        targets.push(target);
      }
    } else if (chosen_skill.target == SkillTarget.AllEnemies) {
      // TODO: select all enemies.
    }
    // attack target.
    this.take_battle_action(fighter, chosen_skill, targets);
  }

  private choose_skill(attacker: BattleFighter): Skill | null {
    let choice_idx = Math.floor(Math.random() * (attacker.data.skills.length + 1));
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

  private get_attack_target(attacker: BattleFighter): BattleFighter | null {
    return random_array_element(
      this.fighters.get(other_side(attacker.data.side))!
        .filter(x => x.data.modded_base_stats().hp > 0));

  }

  private take_battle_action(fighter: BattleFighter, skill: Skill | null, targets: BattleFighter[]) {
    if (skill == null) {
      this.info_div.innerHTML = "" + fighter.name + " attacked!";
      let damage = Math.floor(fighter.data.modded_base_stats().st + fighter.data.modded_base_stats().dx);
      for (let t = 0; t < targets.length; t++) {
        targets[t].data.mod_stats.hp -= damage;
        this.info_div.innerHTML += "<br/>" + targets[t].name + " took " + damage + " damage!";
      }
    } else {
      fighter.data.mod_stats.mp -= skill.cost;
      this.info_div.innerHTML = "" + fighter.name + " used " + skill.name + "!";
      this.info_div.innerHTML += resolve_skill_effect(fighter, skill, targets);
    }
  }
}