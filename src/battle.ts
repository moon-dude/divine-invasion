import {
  BattleSide,
  BattleFighter,
  BattleIndex,
} from "./battle_data";
import { Skill } from "./data/skill";
import { resolve_skill_effect } from "./data/skill_effect";
import { BattleInfo } from "./battle_info";
import { SmartHTMLElement } from "./SmartHTMLElement";
import { BattleTable } from "./battle_table";
import { ai_take_turn } from "./battle_ai";

// This class should be instantiated and destroyed without any move 
// happening or Actors being destroyed.
export class Battle {
  public static Instance: Battle;

  private fighters: Map<BattleSide, BattleFighter[]>;
  private turn_order: BattleIndex[];
  private battle_idx = -1;
  private battle_table: BattleTable;
  private info_title: SmartHTMLElement;
  private info_description: SmartHTMLElement;
  private more_info: SmartHTMLElement;
  private battle_action_span: HTMLElement;
  private battle_action_btns: HTMLButtonElement[] = [];
  private current_action: Skill | "Attack" | null = null;

  constructor(fighters: BattleFighter[]) {
    Battle.Instance = this;
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
      if (i == 0) {
        new_button.innerHTML = "Start Battle";
        new_button.onclick = () => {
          Battle.Instance.next_turn();
        };
      } else {
        new_button.style.display = "none";
      }
      this.battle_action_span.appendChild(new_button);
      this.battle_action_btns.push(new_button);
    }
    for (let i = 0; i < fighters.length; i++) {
      const side: BattleSide = fighters[i].data.side;
      this.fighters.get(side)?.push(fighters[i]);
      this.turn_order.push(
        new BattleIndex(side, (this.fighters.get(side)?.length || 0) - 1)
      );
    }
    this.battle_table = new BattleTable(
      this.fighters.get(BattleSide.Our)!,
      this.fighters.get(BattleSide.Their)!
    );
  }

  public update() {
    let last_battle_table_click = this.battle_table.get_last_click();
    if (last_battle_table_click != null && this.current_action != null) {
      if (this.current_action == "Attack") {
        this.take_battle_action(this.current_fighter(), null, [
          last_battle_table_click
        ]);
      } else {
        this.take_battle_action(this.current_fighter(), this.current_action, [
          last_battle_table_click
        ]);
      }
      this.current_action = null;
      this.render_turn();
    }
    this.battle_table.update();
  }

  // returns null if battle is not over.
  public battle_winner(): BattleSide | null {
    let winner: BattleSide | null = BattleSide.Their;
    for (let i = 0; i < this.fighters.get(BattleSide.Our)!.length; i++) {
      if (
        this.fighters.get(BattleSide.Our)![i]!.data.modded_base_stats().hp > 0
      ) {
        winner = BattleSide.Our;
        break;
      }
    }
    if (winner == BattleSide.Their) {
      return winner;
    }
    for (let i = 0; i < this.fighters.get(BattleSide.Their)!.length; i++) {
      if (
        this.fighters.get(BattleSide.Their)![i]!.data.modded_base_stats().hp > 0
      ) {
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

  private current_fighter(): BattleFighter {
    let turn_index = this.turn_order[this.battle_idx]!;
    return this.fighters.get(turn_index.side)![turn_index.index]!;
  }

  private take_turn() {
    let fighter = this.current_fighter();
    // get who's turn it is.
    BattleInfo.actor_name = fighter.name;
    if (fighter.data.modded_base_stats().hp <= 0) {
      BattleInfo.description = " is dead and can't attack! ";
      return;
    }
    this.battle_action_span.style.display = "none";
    if (fighter.data.side == BattleSide.Our) {
      this.me_take_turn(fighter);
    } else {
      let result = ai_take_turn(fighter, this.fighters);
      // attack target.
      this.take_battle_action(fighter, result[0], result[1]);
      fighter.data.before_end_of_turn();
    }
  }

  private me_take_turn(fighter: BattleFighter) {
    this.battle_action_span.style.display = "";
    let button_index = 0;
    this.set_button_skill(button_index++, "Attack");
    for (let i = 0; i < fighter.data.skills.length; i++) {
      this.set_button_skill(button_index++, fighter.data.skills[i]);
    }
    while (button_index < this.battle_action_btns.length) {
      this.clear_button(button_index++);
    }
  }

  private clear_buttons() {
    for (let i = 0; i < this.battle_action_btns.length; i++) {
      this.clear_button(i);
    }
  }

  private clear_button(idx: number) {
    this.battle_action_btns[idx].style.display = "none";
  }

  private set_button_skill(idx: number, value: Skill | "Attack") {
    this.battle_action_btns[idx].style.display = "";
    this.current_action = value;
    if (value == "Attack") {
      this.battle_action_btns[idx].innerHTML = value;
      this.battle_action_btns[idx].onclick = () => {
        // show enemy targets
        this.battle_table.set_their_btns_enabled(true);
      };
    } else {
      this.battle_action_btns[idx].innerHTML = value.name;
      this.battle_action_btns[idx].onclick = () => {
        // TODO: show targets based on skill.
        this.battle_table.set_all_btns_enabled(true);
      };
    }
  }

  private set_button_continue() {
    this.clear_buttons();
    this.battle_action_btns[0].innerHTML = "Next";
    this.battle_action_btns[0].style.display = "";
    this.battle_action_btns[0].onclick = () => {
      Battle.Instance.next_turn();
    };
  }

  private render_turn() {
    this.info_title.set_inner_html(BattleInfo.actor_name) + ": ";
    this.info_description.set_inner_html(BattleInfo.description);
    this.more_info.set_inner_html(BattleInfo.result);
    BattleInfo.clear();
  }

  private take_battle_action(
    fighter: BattleFighter,
    skill: Skill | null,
    targets: BattleFighter[]
  ) {
    BattleInfo.actor_name = fighter.name;
    if (skill == null) {
      BattleInfo.description = "attacked. ";
      let damage = Math.floor(
        fighter.data.modded_base_stats().st +
          fighter.data.modded_base_stats().dx
      );
      BattleInfo.result = "";
      for (let t = 0; t < targets.length; t++) {
        BattleInfo.result += targets[t].name + " ";
        targets[t].data.take_damage(damage);
      }
    } else {
      fighter.data.mod_stats.mp -= skill.cost;
      BattleInfo.description = "used `" + skill.name + "`. ";
      BattleInfo.result = "";
      for (let t = 0; t < targets.length; t++) {
        BattleInfo.result += targets[t].name + " ";
        resolve_skill_effect(fighter, skill, targets[t]);
      }
    }
    this.set_button_continue();
  }
}
