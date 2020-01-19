import { Target } from "./util";
import { Actor } from "../actor";

export type ItemName = string;

export class Item {
  name: ItemName = "";
  target: Target = Target.All;
  effect: (actor: Actor) => void = (a) => {};
}