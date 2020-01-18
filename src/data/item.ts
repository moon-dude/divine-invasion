import { Target } from "./util";
import { Actor } from "../actor";

export class Item {
  name: string = "";
  target: Target = Target.All;
  effect: (actor: Actor) => void = (a) => {};
}