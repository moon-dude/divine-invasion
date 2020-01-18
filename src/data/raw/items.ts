import { Item } from "../item";
import { Target } from "../util";
import { Actor } from "../../actor";

const ITEMS: Item[] = [
  {
    name: "Life Stone",
    target: Target.SingleAlly,
    effect: (actor: Actor) => {
      actor.battle_data.heal_for(25);
    }
  }
];

export const ITEM_MAP: Map<string, Item> = new Map(ITEMS.map(i => [i.name, i]));
