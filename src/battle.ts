import { BattleSide, BattleFighter, BattleIndex } from "./battle_data";
import { Skill } from "./data/skill";
import { resolve_skill_effect } from "./data/skill_effect";
import { BattleTable } from "./battle_table";
import { ai_take_turn } from "./battle_ai";
import { Log } from "./log";
import { Game } from "./game";
import { MenuEntry, Menu } from "./menu";

export enum BattleAction {
  Attack,
  Inventory
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

  public battle_table: BattleTable;
  public current_action: Skill | BattleAction | null = null;

  constructor(fighters: BattleFighter[]) {
    Battle.Instance = this;
    this.fighters = new Map();
    this.fighters.set(BattleSide.Our, []);
    this.fighters.set(BattleSide.Their, []);
    this.turn_order = [];
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
    Game.Menu.push("You've been attacked by demons!", [
      [
        "Continue",
        () => {
          Battle.Instance!.next_turn();
        }
      ]
    ]);
  }

  public update() {
    // Check for actor btn click.
    let last_battle_table_click = this.battle_table.get_last_click();
    if (last_battle_table_click != null && this.current_action != null) {
      this.execute_player_turn(last_battle_table_click);
    }
    // Update table for new fighter values.
    this.battle_table.update(
      this.fighters.get(BattleSide.Our)!,
      this.fighters.get(BattleSide.Their)!
    );
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
      this.set_auto_next_interval();
      return;
    }
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
    window.setTimeout(
      auto_next_interval_callback,
      SECONDS * 1000,
      this.turn_idx
    );
  }

  public is_auto_next_ready(interval_idx: number): boolean {
    return interval_idx == this.turn_idx;
  }

  private current_fighter(): BattleFighter {
    let turn_index = this.turn_order[this.battle_idx]!;
    return this.fighters.get(turn_index.side)![turn_index.index]!;
  }

  private set_up_player_turn(fighter: BattleFighter) {
    let battle_action_entries: MenuEntry[] = [
      [
        "Attack",
        () => {
          // Show enemy targets & back button.
          Battle.Instance!.battle_table.set_their_btns_enabled(true);
          Battle.Instance!.current_action = BattleAction.Attack;
          Game.Menu.push("Attack (Choose Target)", [
            [
              "Back",
              () => {
                Game.Menu.pop();
              }
            ]
          ]);
        }
      ],
      [
        "Inventory",
        () => {
          Battle.Instance!.current_action = BattleAction.Inventory;
          // TODO: Itemize inventory.
          Game.Menu.push("Attack (Choose Target)", [
            [
              "Back",
              () => {
                Game.Menu.pop();
              }
            ]
          ]);
        }
      ]
    ];
    for (let i = 0; i < fighter.data.skills.length; i++) {
      battle_action_entries.push([
        fighter.data.skills[i].name,
        () => {
          Battle.Instance!.battle_table.set_all_btns_enabled(true);
          Battle.Instance!.current_action = fighter.data.skills[i];
          Game.Menu.push(
            "Use `" + fighter.data.skills[i].name + "` (Choose Target)",
            [
              [
                "Back",
                () => {
                  Game.Menu.pop();
                }
              ]
            ]
          );
        }
      ]);
    }
    Game.Menu.push("Player turn", battle_action_entries);
  }

  private execute_player_turn(last_battle_table_click: BattleFighter) {
    Game.Menu.clear();
    if (this.current_action == BattleAction.Attack) {
      this.take_battle_action(this.current_fighter(), null, [
        last_battle_table_click
      ]);
    } else if (this.current_action == BattleAction.Inventory) {
      // TODO:
    } else {
      this.take_battle_action(this.current_fighter(), this.current_action, [
        last_battle_table_click
      ]);
    }
    this.current_action = null;
    this.set_auto_next_interval();
  }

  private take_battle_action(
    fighter: BattleFighter,
    skill: Skill | null,
    targets: BattleFighter[]
  ): void {
    fighter.data.mark_just_acted();
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
    Game.Menu.clear();
    this.battle_table.set_all_btns_enabled(false);
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

  public end(): void {
    Game.Menu.clear();
    Battle.Instance = null;
  }
}

function auto_next_interval_callback(idx: number) {
  if (Battle.Instance?.is_auto_next_ready(idx)) {
    Battle.Instance?.next_turn();
  }
}
