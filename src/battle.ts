import { BattleSide, BattleFighter, BattleIndex } from "./battle_data";
import { Skill } from "./data/skill";
import { resolve_skill_effect } from "./data/skill_effect";
import { BattleInfo } from "./battle_info";
import { SmartHTMLElement } from "./SmartHTMLElement";
import { BattleTable } from "./battle_table";
import { ai_take_turn } from "./battle_ai";
import { BattleActionBtns } from "./battle_action_btns";

// This class should be instantiated and destroyed without any move
// happening or Actors being destroyed.
export class Battle {
  public static Instance: Battle;

  private fighters: Map<BattleSide, BattleFighter[]>;
  private turn_order: BattleIndex[];
  private battle_idx = -1;
  private info_title: SmartHTMLElement;
  private info_description: SmartHTMLElement;
  private more_info: SmartHTMLElement;
  private battle_action_btns: BattleActionBtns;
  private continue_btn: HTMLButtonElement;
  private back_btn: HTMLButtonElement;

  public battle_table: BattleTable;
  public current_action: Skill | "Attack" | null = null;

  constructor(fighters: BattleFighter[]) {
    Battle.Instance = this;
    this.info_title = new SmartHTMLElement("info_title");
    this.info_description = new SmartHTMLElement("info_description");
    this.more_info = new SmartHTMLElement("more_info_div");
    this.fighters = new Map();
    this.fighters.set(BattleSide.Our, []);
    this.fighters.set(BattleSide.Their, []);
    this.turn_order = [];
    this.battle_action_btns = new BattleActionBtns();
    this.continue_btn = document.getElementById("continue_btn")! as HTMLButtonElement;
    this.back_btn = document.getElementById("back_btn")! as HTMLButtonElement;
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
    this.info_description.set_inner_html("You've been attacked by demons!");
    this.continue_btn.style.display = "";
    this.continue_btn.onclick = () => {
      Battle.Instance.next_turn();
    }
  }

  public update() {
    // Check for actor btn click.
    let last_battle_table_click = this.battle_table.get_last_click();
    if (last_battle_table_click != null && this.current_action != null) {
      this.execute_player_turn(last_battle_table_click);
    }
    // Update table for new fighter values.
    this.battle_table.update(this.fighters.get(BattleSide.Our)!, this.fighters.get(BattleSide.Their)!);
  }

  // Increment turn index, take turn, render changes.
  public next_turn() {
    this.battle_idx = (this.battle_idx + 1) % this.turn_order.length;
    this.set_up_turn();
  }

  private set_up_turn() {
    let fighter = this.current_fighter();
    BattleInfo.actor_name = fighter.name;
    if (fighter.data.modded_base_stats().hp <= 0) {
      BattleInfo.description = " is dead and can't attack! ";
      return;
    }
    this.battle_action_btns.set_visible(false);
    if (fighter.data.side == BattleSide.Our) {
      // For Player, let them choose what to do.
      this.set_up_player_turn(fighter);
    } else {
      // Otherwise, let AI choose.
      let result = ai_take_turn(fighter, this.fighters);
      // Take the resulting action.
      this.take_battle_action(fighter, result[0], result[1]);
      fighter.data.before_end_of_turn();
    }
  }
  
  private current_fighter(): BattleFighter {
    let turn_index = this.turn_order[this.battle_idx]!;
    return this.fighters.get(turn_index.side)![turn_index.index]!;
  }

  private set_up_player_turn(fighter: BattleFighter) {
    this.battle_action_btns.set_visible(true);
    let button_index = 0;
    this.battle_action_btns.set_button_skill(button_index++, "Attack");
    for (let i = 0; i < fighter.data.skills.length; i++) {
      this.battle_action_btns.set_button_skill(
        button_index++,
        fighter.data.skills[i]
      );
    }
    this.battle_action_btns.clear_buttons(button_index);
    this.continue_btn.style.display = "none";
    this.render();
  }

  private execute_player_turn(last_battle_table_click: BattleFighter) {
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
  }

  private render(): void {
    this.info_title.set_inner_html(BattleInfo.actor_name) + ": ";
    this.info_description.set_inner_html(BattleInfo.description);
    this.more_info.set_inner_html(BattleInfo.result);
    BattleInfo.clear();
  }

  private take_battle_action(
    fighter: BattleFighter,
    skill: Skill | null,
    targets: BattleFighter[]
  ): void {
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
    this.continue_btn.style.display = "";
    this.battle_action_btns.clear_buttons();
    this.battle_table.set_all_btns_enabled(false);
    this.render();
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
}
