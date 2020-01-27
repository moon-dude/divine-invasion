import { GameAction, Game } from "./game";
import { MenuEntry } from "./menu";
import { inventory_btn_on_click } from "./inventory";
import { BattleData, BattleSide } from "./battle_data";
import { World } from "./world";

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


  public key_down(event: any) {
    const key_code = event.which;
    let moved: boolean = false;
    if (key_code == 87) {
      // W.
      moved = Game.Instance.player.move(1, Game.Instance.world);
    } else if (key_code == 65) {
      // A.
      Game.Instance.player.turn(false);
    } else if (key_code == 68) {
      // D.
      Game.Instance.player.turn(true);
    } else if (key_code == 83) {
      // S.
      moved = Game.Instance.player.move(-1, Game.Instance.world);
    } else if (key_code == 69) {
      // E.
      Game.Instance.world.dialogue_idx += 1;
    }
    if (moved) {
      this.after_player_move();
    }
  }

  public after_player_move() {
    Game.Instance.world.dialogue_idx = 0;
    const x = Game.Instance.player.coor.x;
    const z = Game.Instance.player.coor.z;
    // check for stairs.
    const stairs_down = Game.Instance.world.map.stairs_down.get(
      x,z
    );
    if (stairs_down) {
      Game.Instance.change_level(-1);
    }
    const stairs_up = Game.Instance.world.map.stairs_up.get(
      x,
      z
    );
    if (stairs_up) {
      Game.Instance.change_level(1);
    }

    // check for items.
    const maybe_item = Game.Instance.world.map.item_at(x, z);
    if (maybe_item != null) {
      Game.Instance.player.inventory.add_item(maybe_item);
    }

    // check for encounter.
    let start_battle = false;
    let actors_at_player_coor = Game.Instance.world.actors_at(Game.Instance.player.coor);
    for (let i = 0; i < actors_at_player_coor.length; i++) {
      if (
        actors_at_player_coor[i].battle_data.side == BattleSide.Their &&
        actors_at_player_coor[i].battle_data.modded_base_stats().hp > 0
      ) {
        start_battle = true;
      }
    }
    if (start_battle) {
      Game.Instance.start_battle(actors_at_player_coor);
    }
  }
}
