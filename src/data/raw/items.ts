import { Item } from "../item";
import { Target } from "../util";
import { BattleData } from "../../battle_data";

const ITEMS: Item[] = [
  {
    name: "Life Stone",
    target: Target.SingleAlly,
    effect: (target: BattleData) => {
      target.heal_for(50);
    }
  }
];

export const ITEM_MAP: Map<string, Item> = new Map(ITEMS.map(i => [i.name, i]));
