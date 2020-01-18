import { BattleSide, BattleFighter, BattleIndex } from "./battle_data";
import { Skill } from "./data/skill";
import { resolve_skill_effect } from "./data/skill_effect";
import { BattleInfo } from "./battle_info";
import { SmartHTMLElement } from "./SmartHTMLElement";
import { BattleTable } from "./battle_table";
import { ai_take_turn } from "./battle_ai";
import { BattleActionBtns } from "./battle_action_btns";
import { Log } from "./log";

export enum BattleAction {
  Attack,
  // Inventory,
  // Demand,
}

// This class should be instantiated and destroyed without any move
// happening or Actors being destroyed.
export class Battle {
  public static Instance: Battle | null = null;

  private fighters: Map<BattleSide, BattleFighter[]>;
  private turn_order: BattleIndex[];
  private turn_idx: number = 0;
  private battle_idx: number = -1;
  private info_title: SmartHTMLElement;
  private more_info: SmartHTMLElement;
  private continue_btn: HTMLButtonElement;
  private back_btn: HTMLButtonElement;

  public battle_table: BattleTable;
  public battle_action_btns: BattleActionBtns;
  public current_action: Skill | BattleAction | null = null;
  public info_description: SmartHTMLElement;

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
    this.set_continue_btn(true, () => {
      Battle.Instance!.next_turn();
    });
    this.set_back_btn(false);
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
    this.turn_idx += 1;
    this.battle_idx = (this.battle_idx + 1) % this.turn_order.length;
    this.set_up_turn();
  }

  private set_up_turn() {
    let fighter = this.current_fighter();
    if (fighter.data.modded_base_stats().hp <= 0) {
      return;
    }
    this.battle_action_btns.set_visible(false);
    if (fighter.data.side == BattleSide.Our && fighter.name == "Player") {
      // For Player, let them choose what to do.
      this.set_up_player_turn(fighter);
    } else {
      // Otherwise, let AI choose.
      let result = ai_take_turn(fighter, this.fighters);
      // Take the resulting action.
      this.take_battle_action(fighter, result[0], result[1]);
      fighter.data.before_end_of_turn();
      this.set_auto_next_interval();
    }
  }

  private set_auto_next_interval() {
    const SECONDS = 0.5;
    window.setTimeout(auto_next_interval_callback, SECONDS * 1000, this.turn_idx);
  }
  
  public is_auto_next_ready(interval_idx: number): boolean {
    return interval_idx == this.turn_idx;
  }
  
  private current_fighter(): BattleFighter {
    let turn_index = this.turn_order[this.battle_idx]!;
    return this.fighters.get(turn_index.side)![turn_index.index]!;
  }

  private set_up_player_turn(fighter: BattleFighter) {
    this.battle_action_btns.set_visible(true);
    let button_index = 0;
    this.battle_action_btns.set_button_skill(button_index++, BattleAction.Attack);
    for (let i = 0; i < fighter.data.skills.length; i++) {
      this.battle_action_btns.set_button_skill(
        button_index++,
        fighter.data.skills[i]
      );
    }
    this.battle_action_btns.clear_buttons(button_index);
    this.set_continue_btn(false);
    this.set_back_btn(false, () => {
      Battle.Instance!.set_up_player_turn(fighter);
    });
    this.render();
  }

  private execute_player_turn(last_battle_table_click: BattleFighter) {
    this.set_back_btn(false);
    if (this.current_action == BattleAction.Attack) {
      this.take_battle_action(this.current_fighter(), null, [
        last_battle_table_click
      ]);
    } else {
      this.take_battle_action(this.current_fighter(), this.current_action, [
        last_battle_table_click
      ]);
    }
    this.current_action = null;
    this.set_auto_next_interval();
  }

  private render(): void {

  }

  private take_battle_action(
    fighter: BattleFighter,
    skill: Skill | null,
    targets: BattleFighter[]
  ): void {
    if (skill == null) {
      Log.push(this.current_fighter().name + " attacked.");
      let damage = Math.floor(
        fighter.data.modded_base_stats().st +
          fighter.data.modded_base_stats().dx
      );
      for (let t = 0; t < targets.length; t++) {
        targets[t].data.take_damage(damage);
      }
    } else {
      fighter.data.mod_stats.mp -= skill.cost;
      Log.push(this.current_fighter().name + " used `" + skill.name + "`.");
      for (let t = 0; t < targets.length; t++) {
        resolve_skill_effect(fighter, skill, targets[t]);
      }
    }
    this.set_continue_btn(true);
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

  public set_continue_btn(visible: boolean, on_click: (() => void) | null = null) {
    this.continue_btn.style.display = visible ? "" : "none";
    this.continue_btn.onclick = on_click || this.continue_btn.onclick;
  }

  public set_back_btn(visible: boolean, on_click: (() => void) | null = null) {
    this.back_btn.style.display = visible ? "" : "none";
    this.back_btn.onclick = on_click || this.back_btn.onclick;
  }

  public end(): void {
    this.battle_action_btns.clear_buttons();
    this.set_continue_btn(false);
    this.set_back_btn(false);
    BattleInfo.clear();
    Battle.Instance = null;
  }
}

function auto_next_interval_callback(idx: number) {
  if (Battle.Instance?.is_auto_next_ready(idx)) {
    Battle.Instance?.next_turn();
  }
}