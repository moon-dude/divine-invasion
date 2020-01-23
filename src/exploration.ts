import { GameAction, Game } from "./game";
import { MenuEntry } from "./menu";
import { inventory_btn_on_click } from "./inventory";
import { BattleData } from "./battle_data";

export class Exploration {
  constructor() {
    let menu_entries: MenuEntry[] = [["Inventory", inventory_btn_on_click]];
    Game.Instance.menu.push("", menu_entries);
  }

  update() {
    let last_battle_data_clicked: BattleData | null = 
      Game.Instance.player.get_last_battle_data_clicked();
    if (last_battle_data_clicked != null) {
      Game.Instance.take_action(Game.Instance.player.battle_data, [
        last_battle_data_clicked
      ]);
    }
  }
}
