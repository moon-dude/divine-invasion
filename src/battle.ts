import { BattleSide, BattleIndex, BattleData } from "./battle_data";
import { resolve_skill_effect } from "./data/skill_effect";
import { ai_take_turn } from "./battle_ai";
import { Log } from "./log";
import { Game, GameAction } from "./game";
import { ITEM_MAP } from "./data/raw/items";
import { SKILL_MAP } from "./data/raw/skills";
import { try_ai_request, request_result } from "./requests";
import { set_up_player_turn } from "./battle_player";
import {
  AttackAction,
  InventoryAction,
  SkillAction,
  RequestAction
} from "./actions";
import { ActorCard } from "./actor_card";

// This class should be instantiated and destroyed without any move
// happening or Actors being destroyed.
export class Battle {
  private fighters: Map<BattleSide, BattleData[]>;
  private turn_order: BattleIndex[];
  private turn_idx: number = 0;
  private battle_idx: number = -1;

  public enemy_actor_cards: ActorCard[];

  private enemy_info_div: HTMLElement;

  constructor(fighters: BattleData[]) {
    this.fighters = new Map();
    this.fighters.set(BattleSide.Our, []);
    this.fighters.set(BattleSide.Their, []);
    this.turn_order = [];
    for (let i = 0; i < fighters.length; i++) {
      const side: BattleSide = fighters[i].side;
      this.fighters.get(side)?.push(fighters[i]);
      this.turn_order.push(
        new BattleIndex(side, (this.fighters.get(side)?.length || 0) - 1)
      );
    }
    this.enemy_info_div = document.getElementById("enemy_info_div")!;
    this.enemy_actor_cards = [];
    let enemies = this.fighters.get(BattleSide.Their)!;
    for (let i = 0; i < enemies.length; i++) {
      this.enemy_actor_cards.push(
        new ActorCard(this.enemy_info_div, enemies[i], false)
      );
    }
    Game.Instance.menu.push("You've been attacked by demons!", [
      [
        "Continue",
        () => {
          Game.Instance.get_battle()?.next_turn();
        }
      ]
    ]);
  }

  public update(current_action: GameAction | null) {
    // Check for actor btn click.
    let last_battle_data_clicked: BattleData | null =
      Game.Instance.player.get_last_battle_data_clicked() ||
      this.get_last_enemy_clicked();
    if (last_battle_data_clicked != null && current_action != null) {
      this.execute_player_turn(last_battle_data_clicked, current_action);
    }
    for (let i = 0; i < this.enemy_actor_cards.length; i++) {
      this.enemy_actor_cards[i].update(
        this.fighters.get(BattleSide.Their)![i]!
      );
    }
  }

  private get_last_enemy_clicked() {
    for (let i = 0; i < this.enemy_actor_cards.length; i++) {
      if (this.enemy_actor_cards[i].was_clicked()) {
        return this.fighters.get(BattleSide.Their)![i]!;
      }
    }
    return null;
  }

  public set_actor_cards_enabled(
    enabled: boolean,
    filter: (fighter: BattleData) => boolean = () => true
  ) {
    for (let i = 0; i < this.enemy_actor_cards.length; i++) {
      if (filter(this.fighters.get(BattleSide.Their)![i])) {
        this.enemy_actor_cards[i].set_name_btn_enabled(enabled);
      }
    }
  }

  // Increment turn index, take turn, render changes.
  public next_turn() {
    this.turn_idx += 1;
    this.battle_idx = (this.battle_idx + 1) % this.turn_order.length;
    this.set_up_turn();
  }

  private set_up_turn() {
    let fighter = this.current_fighter();
    if (fighter.modded_base_stats().hp <= 0) {
      this.set_auto_next_interval();
      return;
    }
    if (fighter.side == BattleSide.Our && fighter.name == "Player") {
      // For Player, let them choose what to do.
      set_up_player_turn(fighter);
    } else {
      // Otherwise, let AI choose.
      let result = ai_take_turn(fighter, this.fighters);
      if (result[0] != null) {
        Game.Instance.take_action(fighter, result[1], result[0]);
      }
      // Take the resulting action.
      fighter.before_end_of_turn();
      this.set_auto_next_interval();
    }
  }

  private set_auto_next_interval() {
    const SECONDS = 0.5;
    window.setTimeout(
      auto_next_interval_callback,
      SECONDS * 1000,
      this.turn_idx
    );
  }

  public is_auto_next_ready(interval_idx: number): boolean {
    return interval_idx == this.turn_idx;
  }

  private current_fighter(): BattleData {
    let turn_index = this.turn_order[this.battle_idx]!;
    return this.fighters.get(turn_index.side)![turn_index.index]!;
  }

  private execute_player_turn(target: BattleData, current_action: GameAction) {
    Game.Instance.menu.clear();
    Game.Instance.take_action(this.current_fighter(), [target], current_action);
    Game.Instance.clear_current_action();
    this.set_auto_next_interval();
  }

  public take_battle_action(
    fighter: BattleData,
    targets: BattleData[],
    action: GameAction
  ): void {
    fighter.mark_just_acted();
    if (action instanceof AttackAction) {
      Log.push(this.current_fighter().name + " attacked.");
      let damage = Math.floor(
        fighter.modded_base_stats().st + fighter.modded_base_stats().dx
      );
      for (let t = 0; t < targets.length; t++) {
        targets[t].take_damage(damage);
      }
    } else if (action instanceof SkillAction) {
      const skill = SKILL_MAP.get(action.skill_name!)!;
      fighter.mod_stats.mp -= skill.cost;
      Log.push(this.current_fighter().name + " used `" + skill.name + "`.");
      for (let t = 0; t < targets.length; t++) {
        resolve_skill_effect(fighter, skill, targets[t]);
      }
    } else if (action instanceof RequestAction) {
      for (let t = 0; t < targets.length; t++) {
        let request_worked = try_ai_request(
          fighter,
          targets[t],
          action.request
        );
        if (request_worked) {
          request_result(targets[t], action.request);
        } else {
          Log.push(targets[t].name + " was not convinced.");
        }
      }
    }
    Game.Instance.menu.clear();
    Game.Instance.set_actor_cards_enabled(false);
  }

  // returns null if battle is not over.
  public battle_winner(): BattleSide | null {
    let winner: BattleSide | null = BattleSide.Their;
    for (let i = 0; i < this.fighters.get(BattleSide.Our)!.length; i++) {
      if (this.fighters.get(BattleSide.Our)![i]!.modded_base_stats().hp > 0) {
        winner = BattleSide.Our;
        break;
      }
    }
    if (winner == BattleSide.Their) {
      return winner;
    }
    for (let i = 0; i < this.fighters.get(BattleSide.Their)!.length; i++) {
      if (
        this.fighters.get(BattleSide.Their)![i]!.modded_base_stats().hp > 0 &&
        !this.fighters.get(BattleSide.Their)![i]!.recruited
      ) {
        winner = null;
        break;
      }
    }
    return winner;
  }

  public end(): void {
    Game.Instance.menu.clear();
    for (let i = 0; i < this.enemy_actor_cards.length; i++) {
      this.enemy_info_div.removeChild(this.enemy_actor_cards[i].card_span);
    }
  }
}

function auto_next_interval_callback(idx: number) {
  if (Game.Instance.get_battle()?.is_auto_next_ready(idx)) {
    Game.Instance.get_battle()?.next_turn();
  }
}
