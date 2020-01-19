import { Target } from "./util";
import { BattleData } from "../battle_data";

export type ItemName = "Life Stone";

export class Item {
  name: ItemName = "Life Stone";
  target: Target = Target.All;
  effect: (target: BattleData) => void = (_) => {};
}