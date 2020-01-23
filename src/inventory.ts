import { Item, ItemName } from "./data/item";
import { InventoryAction } from "./actions";
import { MenuEntry } from "./menu";
import { Game } from "./game";
import { Log } from "./log";

export class Inventory {
  private items: Map<ItemName, number> = new Map();

  public add_item(item: ItemName, count: number = 1) {
    if (count <= 0) {
      return;
    }
    if (this.items.get(item) == undefined) {
      this.items.set(item, 0);
    }
    this.items.set(item, this.items.get(item)! + count);
    Log.push("Recieved " + item + (count > 1 ? " x" + count : "") + ".");
  }

  public destroy_item(item: ItemName, count: number = 1): boolean {
    if (count <= 0) {
      return true;
    }
    if (this.items.get(item) == undefined || this.items.get(item)! < count) {
      console.log("Error destroying item: " + item + " (" + count + ")");
      return false;
    }
    this.items.set(item, this.items.get(item)! - count);
    Log.push("Lost " + item + (count > 1 ? " x" + count : "") + ".");
    return true;
  }

  public entries() {
    return this.items.entries();
  }
}

export function inventory_btn_on_click() {
  Game.Instance.set_current_action(new InventoryAction(null));
  let menu_entries: MenuEntry[] = [
    [
      "Back",
      () => {
        Game.Instance.menu.pop();
      }
    ]
  ];
  for (const entry of Game.Instance.player.inventory.entries()) {
    menu_entries.push([
      entry[0] + "(x" + entry[1] + ")",
      () => {
        Game.Instance.set_current_action(new InventoryAction(entry[0]));
        Game.Instance.set_actor_cards_enabled(true);
        Game.Instance.menu.push("Use item `" + entry[0] + "` (Select target)", [
          [
            "Back",
            () => {
              Game.Instance.menu.pop();
            }
          ]
        ]);
      }
    ]);
  }
  Game.Instance.menu.push("Inventory (Choose Item)", menu_entries);
}
