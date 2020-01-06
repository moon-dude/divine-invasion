import { random_array_element } from "./jlib";
import { BattleSide, BattleFighter, BattleIndex, other_side } from "./battle_data";
import { Skill, } from "./data/skill";
import { SkillTarget, resolve_skill_effect } from "./data/skill_effect";
import { BattleInfo } from "./battle_info";
import { mood_string as get_mood_string } from "./emotion";
import { SmartHTMLElement } from "./SmartHTMLElement";

const EMPTY_ENTRY: string = "<td></td><td></td><td></td>";

// This class should be instantiated and destroyed without any move happening or Actors being destroyed.
export class Battle {
  private fighters: Map<BattleSide, BattleFighter[]>;
  private turn_order: BattleIndex[];
  private battle_idx = -1;
  private battle_tbody: HTMLElement;
  private info_title: SmartHTMLElement;
  private info_description: SmartHTMLElement;
  private more_info: SmartHTMLElement;
  private battle_action_span: HTMLElement;
  private battle_action_btns: HTMLElement[] = [];

  constructor(fighters: BattleFighter[]) {
    this.battle_tbody = document.getElementById("battle_tbody")!;
    this.info_title = new SmartHTMLElement("info_title");
    this.info_description = new SmartHTMLElement("info_description");
    this.more_info = new SmartHTMLElement("more_info_div");
    this.battle_action_span = document.getElementById("battle_action_span")!;
    this.fighters = new Map();
    this.fighters.set(BattleSide.Our, []);
    this.fighters.set(BattleSide.Their, []);
    this.turn_order = [];
    for (let i = 0; i < 10; i++) {
      const new_button = document.createElement("button");
      this.battle_action_span.appendChild(new_button);
      this.battle_action_btns.push(new_button);
    }
    for (let i = 0; i < fighters.length; i++) {
      const side: BattleSide = fighters[i].data.side;
      this.fighters.get(side)?.push(fighters[i]);
      this.turn_order.push(new BattleIndex(side, (this.fighters.get(side)?.length || 0) - 1));
    }
  }

  public render() {
    let new_battle_tbody = "";
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
      new_battle_tbody += row_html;
    }
    if (new_battle_tbody != this.battle_tbody.innerHTML) {
      this.battle_tbody.innerHTML = new_battle_tbody;
    }
  }

  private entry_html(fighter: BattleFighter): string {
    let mood = "";
    if (fighter.data.mood != null) {
      mood =  get_mood_string(fighter.data.mood);
    }
    return "<td>" + fighter.name + " " + mood + "</td><td>" + 
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
    this.render_turn();
  }

  private take_turn() {
    // get who's turn it is.
    let turn_index = this.turn_order[this.battle_idx]!;
    let fighter = this.fighters.get(turn_index.side)![turn_index.index]!;
    BattleInfo.actor_name = fighter.name;
    if (fighter.data.modded_base_stats().hp <= 0) {
      BattleInfo.description = " is dead and can't attack! ";
      return;
    }
    if (fighter.data.side == BattleSide.Our) {
      this.me_take_turn(fighter);
    } else {
      this.ai_take_turn(fighter);
    }
  }

  private me_take_turn(fighter: BattleFighter) {
    this.battle_action_span.style.display = "";
    let button_index = 0;
    this.battle_action_btns[button_index++].innerHTML = "Attack";
    for (let i = 0; i < fighter.data.skills.length; i++) {
      this.set_button(button_index++, fighter.data.skills[i].name);
    }
    while (button_index < this.battle_action_btns.length) {
      this.set_button(button_index++, null);
    }
  }

  private set_button(idx: number, value: string | null) {
    if (value == null) {
      this.battle_action_btns[idx].style.display = "none";
    } else {
      this.battle_action_btns[idx].style.display = "";
      this.battle_action_btns[idx].innerHTML = value;
    }
  }

  private ai_take_turn(fighter: BattleFighter) {
    this.battle_action_span.style.display = "none";
    // Choose whether to attack or use skill.
    let chosen_skill = this.choose_skill(fighter);
    let targets: BattleFighter[] = [];
    if (chosen_skill == null || chosen_skill.target == SkillTarget.SingleEnemy) {
      // Choose a random target.
      let target = this.get_attack_target(fighter);
      if (target == null) {
        BattleInfo.description = "has no one to attack! ";
        fighter.data.before_end_of_turn();
        return;
      } else {
        targets.push(target);
      }
    } else if (chosen_skill.target == SkillTarget.SingleAlly) {
      // TODO: Manually choose the best target for the skill.
      // For now just choose weakest health.
      let weakest_ally: BattleFighter | null = null;
      const allies = this.fighters.get(fighter.data.side)!;
      for (let i = 0; i < allies.length; i++) {
        if (allies[i].data.mod_stats.hp == 0) {
          continue;
        }
        if (weakest_ally == null || 
            allies[i].data.modded_base_stats().hp < weakest_ally.data.modded_base_stats().hp) {
          weakest_ally = allies[i];
        }
      }
      if (weakest_ally == null) {
        BattleInfo.description = "could not find a valid target!";
      } else {
        targets.push(weakest_ally);
      }
    } else if (chosen_skill.target == SkillTarget.AllEnemies) {
      // TODO: select all enemies.
      const enemy_fighters = (this.fighters.get(other_side(fighter.data.side))!
        .filter(x => x.data.modded_base_stats().hp > 0));
      for (let i = 0; i < enemy_fighters.length; i++) {
        targets.push(enemy_fighters[i]);
      }
    }
    // attack target.
    this.take_battle_action(fighter, chosen_skill, targets);
    fighter.data.before_end_of_turn();
  }

  private render_turn() {
    this.info_title.set_inner_html(BattleInfo.actor_name) + ": ";
    this.info_description.set_inner_html(BattleInfo.description);
    this.more_info.set_inner_html(BattleInfo.result);
    BattleInfo.clear();
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
    BattleInfo.actor_name = fighter.name;
    if (skill == null) {
      BattleInfo.description = "attacked. ";
      let damage = Math.floor(fighter.data.modded_base_stats().st + fighter.data.modded_base_stats().dx);
      for (let t = 0; t < targets.length; t++) {
        BattleInfo.result += targets[t].name + " ";  
        targets[t].data.take_damage(damage);
      }
    } else {
      fighter.data.mod_stats.mp -= skill.cost;
      BattleInfo.description = "used `" + skill.name + "`. ";
      for (let t = 0; t < targets.length; t++) {
        resolve_skill_effect(fighter, skill, targets[t]);
      }
    }
  }
}