import { Item } from "./data/item";

export class Inventory {
  private items: Map<Item, number> = new Map();

  public add_item(item: Item, count: number = 1) {
    if (count <= 0) {
      return;
    }
    if (this.items.get(item) == undefined) {
      this.items.set(item, 0);
    }
    this.items.set(item, this.items.get(item)! + count);
  }

  public destroy_item(item: Item, count: number = 1): boolean {
    if (count <= 0) {
      return true;
    }
    if (this.items.get(item) == undefined || this.items.get(item)! < count) {
      return false;
    }
    this.items.set(item, this.items.get(item)! - count);
    return true;
  }
}
