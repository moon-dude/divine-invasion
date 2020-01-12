import { BattleFighter, BattleData } from "./battle_data";
import { mood_string as get_mood_string } from "./emotion";

/// An HTML entity manager for the battle table.

function append_empty_entry(parent: HTMLTableRowElement) {
  parent.appendChild(document.createElement("td"));
  parent.appendChild(document.createElement("td"));
  parent.appendChild(document.createElement("td"));
}

class BattleEntry {
  private name_cell: HTMLTableCellElement;
  private name_btn: HTMLButtonElement;
  private mood_span: HTMLSpanElement;
  private health: HTMLTableCellElement;
  private mana: HTMLTableCellElement;

  constructor(
    parent_row: HTMLTableRowElement,
    name: string,
    fighter_data: BattleData,
    on_click: () => void
  ) {
    this.name_btn = document.createElement("button");
    this.name_btn.innerHTML = name;
    this.name_btn.disabled = true;
    this.name_btn.onclick = on_click;
    this.name_cell = document.createElement("td");
    this.mood_span = document.createElement("span");
    if (fighter_data.mood != null) {
      this.mood_span.innerHTML = get_mood_string(fighter_data.mood);
    }
    this.name_cell.appendChild(this.name_btn);
    this.name_cell.appendChild(this.mood_span);
    parent_row.appendChild(this.name_cell);
    this.health = document.createElement("td");
    parent_row.appendChild(this.health);
    this.mana = document.createElement("td");
    parent_row.appendChild(this.mana);
    this.update(fighter_data);
  }

  public set_name_btn_enabled(value: boolean) {
    this.name_btn.disabled = !value;
  }

  public update(fighter_data: BattleData) {
    if (fighter_data.mood == null) {
      this.mood_span.innerHTML = "";
    } else {
      this.mood_span.innerHTML = get_mood_string(fighter_data.mood);
    }
    this.health.innerHTML =
      fighter_data.modded_base_stats().hp + "<span class=\"sub\">/" + fighter_data.base_stats.hp + "</span>";
    this.mana.innerHTML =
      fighter_data.modded_base_stats().mp + "<span class=\"sub\">/" + fighter_data.base_stats.mp + "</span>";
  }
}

export class BattleTable {
  private table_body: HTMLElement;
  private our_fighters: BattleEntry[];
  private their_fighters: BattleEntry[];
  private last_click_result: BattleFighter | null = null;

  constructor(our_fighters: BattleFighter[], their_fighters: BattleFighter[]) {
    this.table_body = document.getElementById("battle_tbody")!;
    this.table_body.innerHTML = "";
    this.our_fighters = [];
    this.their_fighters = [];

    for (let i = 0; i < our_fighters.length || i < their_fighters.length; i++) {
      let row = document.createElement("tr");
      this.table_body.appendChild(row);
      if (i < our_fighters.length) {
        let our = our_fighters[i];
        this.our_fighters.push(
          new BattleEntry(row, our.name, our.data, () => {
            this.last_click_result = our;
          })
        );
      } else {
        append_empty_entry(row);
      }
      row.appendChild(document.createElement("td"));
      if (i < their_fighters.length) {
        let their = their_fighters[i];
        this.their_fighters.push(
          new BattleEntry(row, their.name, their.data, () => {
            this.last_click_result = their;
          })
        );
      } else {
        append_empty_entry(row);
      }
    }
  }

  public update(
    our_fighters: BattleFighter[],
    their_fighters: BattleFighter[]
  ) {
    for (let i = 0; i < this.our_fighters.length; i++) {
      this.our_fighters[i].update(our_fighters[i]!.data);
    }
    for (let i = 0; i < this.their_fighters.length; i++) {
      this.their_fighters[i].update(their_fighters[i]!.data);
    }
  }

  public set_our_btns_enabled(value: boolean) {
    for (let i = 0; i < this.our_fighters.length; i++) {
      this.our_fighters[i].set_name_btn_enabled(value);
    }
  }

  public set_their_btns_enabled(value: boolean) {
    for (let i = 0; i < this.their_fighters.length; i++) {
      this.their_fighters[i].set_name_btn_enabled(value);
    }
  }

  public set_all_btns_enabled(value: boolean) {
    for (let i = 0; i < this.our_fighters.length; i++) {
      this.our_fighters[i].set_name_btn_enabled(value);
    }
    for (let i = 0; i < this.their_fighters.length; i++) {
      this.their_fighters[i].set_name_btn_enabled(value);
    }
  }

  public get_last_click(): BattleFighter | null {
    let result = this.last_click_result;
    this.last_click_result = null;
    return result;
  }
}
