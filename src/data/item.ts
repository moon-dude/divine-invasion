import { Target } from "./util";
import { BattleData } from "../battle_data";

export type ItemName = string;

export class Item {
  name: ItemName = "";
  target: Target = Target.All;
  effect: (target: BattleData) => void = (_) => {};
}