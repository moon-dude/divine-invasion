import { Player } from "./player";
import { ApplyDir, DirCW } from "./jlib";
import { Map } from "./map";


export class InputResult {
  moved: boolean;
  turned: boolean;
  actioned: boolean

  constructor(moved: boolean, turned: boolean, actioned: boolean) {
    this.moved = moved;
    this.turned = turned;
    this.actioned = actioned;
  }
}

export class Input {
  public check(event: any, player: Player, map: Map): InputResult {
    var keyCode = event.which;
    let moved = false;
    let turned = false;
    let actioned = false;
    if (keyCode == 87) {  // W.
      moved = player.move(1, map);
    } else if (keyCode == 65) {  // A.
      turned = player.turn(false);
    } else if (keyCode == 68) {  // D.
      turned = player.turn(true);
    } else if (keyCode == 83) {  // S.
      moved = player.move(-1, map);
    } else if (keyCode == 32) {  // Space.
      actioned = true;
    }
    return new InputResult(moved, turned, actioned);
  }
}