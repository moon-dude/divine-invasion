import { ItemName } from "./data/item";
import { Request } from "./requests";

export class AttackAction {};

export class InventoryAction {
  public item_name: ItemName | null;
  constructor(value: ItemName | null) {
    this.item_name = value;
  }
}

export class SkillAction {
  public skill_name: string;
  constructor(value: string) {
    this.skill_name = value;
  }
}

export class RequestAction {
  public request: Request;
  constructor(value: Request) {
    this.request = value;
  }
}
