import { Actor } from "./actor";
import { Stats, apply_stats_mod } from "./stats";
import { Player } from "./player";

const EMPTY_ENTRY: string = "<td></td><td></td><td></td>";

export enum BattleSide {
  Our,
  Their,
}

export class BattleData {
  side: BattleSide;
  base_stats: Stats;
  mod_stats: Stats;

  constructor(side: BattleSide, base_stats: Stats, mod_stats: Stats) {
    this.side = side;
    this.base_stats = base_stats;
    this.mod_stats = mod_stats;
  }

  public modded_base_stats(): Stats {
    return apply_stats_mod(this.base_stats, this.mod_stats);
  }
}

export const BATTLE_DATA_IDENTITY: BattleData = 
  new BattleData(BattleSide.Their, Stats.BASE_IDENTITY, Stats.MOD_IDENTITY);

// This class should be instantiated and destroyed without any move happening or Actors being destroyed.
export class Battle {
  fighters: [string, BattleData][];
  battle_idx = 0;
  battle_div: HTMLElement;
  battle_tbody: HTMLElement;

  constructor(fighters: [string, BattleData][]) {
    this.fighters = fighters;
    this.battle_div = document.getElementById("battle_div")!;
    this.battle_tbody = document.getElementById("battle_tbody")!;
    this.battle_div.style.visibility = "";
    let you_entries: string[] = [];
    let enemy_entries: string[] = [];
    for (let i = 0; i < this.fighters.length; i++) {
      if (this.fighters[i][1].side == BattleSide.Our) {
        you_entries.push(this.entry_html(this.fighters[i][0], this.fighters[i][1]));
      } else {
        enemy_entries.push(this.entry_html(this.fighters[i][0], this.fighters[i][1]));
      }
    }

    this.battle_tbody.innerHTML = "";
    for (let i = 0; i < you_entries.length || i < enemy_entries.length; i++) {
      let row_html = "<tr>"
      if (i < you_entries.length) {
        row_html += you_entries[i];
      } else {
        row_html += EMPTY_ENTRY;
      }
      row_html += "<td></td>";
      if (i < enemy_entries.length) {
        row_html += enemy_entries[i];
      } else {
        row_html += EMPTY_ENTRY;
      }
      this.battle_tbody.innerHTML += row_html;
    }
  }

  private entry_html(name: string, data: BattleData): string {
    return "<td>" + name + "</td><td>" + 
      data.modded_base_stats().hp + "/" + data.base_stats.hp+ "</td><td>" + 
      data.modded_base_stats().mp + "/" + data.base_stats.mp;
  }

  public update(player: Player) {

  }

  public next_turn() {
    this.battle_idx += 1;
  }
}