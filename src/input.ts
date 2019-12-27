import { Player } from "./player";
import { ApplyDir, DirCW } from "./jlib";

/// Returns true on a successful move.
function move(player: Player, steps: number): boolean {
  if (player.movement_locked) {
    return false;
  }
  player.coor = ApplyDir(player.coor, player.dir, steps);
  return true;
}

/// Returns true on a successful turn.
function turn(player: Player, cw: boolean) {
  if (player.movement_locked) {
    return false;
  }
  if (cw) {
    player.dir = DirCW(player.dir);
  } else {
    player.dir = DirCW(DirCW(DirCW(player.dir)));
  }
  return true;
}

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
  public check(event: any, player: Player): InputResult {
    var keyCode = event.which;
    let moved = false;
    let turned = false;
    let actioned = false;
    if (keyCode == 87) {  // W.
      moved = move(player, 1);
    } else if (keyCode == 65) {  // A.
      turned = turn(player, false);
    } else if (keyCode == 68) {  // D.
      turned = turn(player, true);
    } else if (keyCode == 83) {  // S.
      moved = move(player, -1);
    } else if (keyCode == 32) {  // Space.
      actioned = true;
    }
    return new InputResult(moved, turned, actioned);
  }
}