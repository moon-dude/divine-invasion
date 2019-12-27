"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jlib_1 = require("./jlib");
/// Returns true on a successful move.
function move(player, steps, map) {
    if (player.movement_locked) {
        return false;
    }
    var move_coor = jlib_1.ApplyDir(player.coor, player.dir, steps);
    if (map.walkable.get(move_coor.x, move_coor.z) == 1) {
        return false;
    }
    player.coor = move_coor;
    return true;
}
/// Returns true on a successful turn.
function turn(player, cw) {
    if (player.movement_locked) {
        return false;
    }
    if (cw) {
        player.dir = jlib_1.DirCW(player.dir);
    }
    else {
        player.dir = jlib_1.DirCW(jlib_1.DirCW(jlib_1.DirCW(player.dir)));
    }
    return true;
}
var InputResult = /** @class */ (function () {
    function InputResult(moved, turned, actioned) {
        this.moved = moved;
        this.turned = turned;
        this.actioned = actioned;
    }
    return InputResult;
}());
exports.InputResult = InputResult;
var Input = /** @class */ (function () {
    function Input() {
    }
    Input.prototype.check = function (event, player, map) {
        var keyCode = event.which;
        var moved = false;
        var turned = false;
        var actioned = false;
        if (keyCode == 87) { // W.
            moved = move(player, 1, map);
        }
        else if (keyCode == 65) { // A.
            turned = turn(player, false);
        }
        else if (keyCode == 68) { // D.
            turned = turn(player, true);
        }
        else if (keyCode == 83) { // S.
            moved = move(player, -1, map);
        }
        else if (keyCode == 32) { // Space.
            actioned = true;
        }
        return new InputResult(moved, turned, actioned);
    };
    return Input;
}());
exports.Input = Input;
