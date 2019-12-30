import { random_array_element } from "./jlib";
import { BattleSide, BattleFighter, BattleIndex, other_side } from "./battle_data";

const EMPTY_ENTRY: string = "<td></td><td></td><td></td>";

// This class should be instantiated and destroyed without any move happening or Actors being destroyed.
export class Battle {
  private fighters: Map<BattleSide, BattleFighter[]>;
  private turn_order: BattleIndex[];
  private battle_idx = -1;
  private battle_div: HTMLElement;
  private battle_tbody: HTMLElement;
  private info_div: HTMLElement;

  constructor(fighters: BattleFighter[]) {
    this.battle_div = document.getElementById("battle_div")!;
    this.battle_tbody = document.getElementById("battle_tbody")!;
    this.info_div = document.getElementById("battle_info")!;
    this.battle_div.style.visibility = "";
    this.fighters = new Map();
    this.fighters.set(BattleSide.Our, []);
    this.fighters.set(BattleSide.Their, []);
    this.turn_order = [];
    for (let i = 0; i < fighters.length; i++) {
      const side: BattleSide = fighters[i].data.side;
      this.fighters.get(side)?.push(fighters[i]);
      this.turn_order.push(new BattleIndex(side, (this.fighters.get(side)?.length || 0) - 1));
    }
    console.log(this.fighters);
    console.log(this.turn_order);
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

  public next_turn() {
    this.battle_idx = (this.battle_idx + 1) % this.turn_order.length;
    this.take_turn();
  }

  public take_turn() {
    // get who's turn it is.
    let turn_index = this.turn_order[this.battle_idx]!;
    let fighter = this.fighters.get(turn_index.side)![turn_index.index]!;
    if (fighter.data.modded_base_stats().hp <= 0) {
      this.info_div.innerHTML = "" + fighter.name + " is too dead to attack!";
      return;
    }
    // choose a random target.
    let target = this.get_attack_target(fighter);
    if (target == null) {
      this.info_div.innerHTML = "" + fighter.name + " has no one to attack!";
      return;
    }
    // attack target.
    this.attack(fighter, target);
  }

  private get_attack_target(attacker: BattleFighter): BattleFighter | null {
    return random_array_element(
      this.fighters.get(other_side(attacker.data.side))!
        .filter(x => x.data.modded_base_stats().hp > 0));

  }

  private attack(attacker: BattleFighter, target: BattleFighter) {
    target.data.mod_stats.hp -= attacker.data.modded_base_stats().st + attacker.data.modded_base_stats().dx;
    this.info_div.innerHTML = "" + attacker.name + " attacked " + target.name + "!";
  }
}