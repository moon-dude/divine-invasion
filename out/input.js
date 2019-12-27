"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    Input.prototype.check = function (event, player, map, npcs) {
        var keyCode = event.which;
        var moved = false;
        var turned = false;
        var actioned = false;
        if (keyCode == 87) { // W.
            moved = player.move(1, map, npcs);
        }
        else if (keyCode == 65) { // A.
            turned = player.turn(false);
        }
        else if (keyCode == 68) { // D.
            turned = player.turn(true);
        }
        else if (keyCode == 83) { // S.
            moved = player.move(-1, map, npcs);
        }
        else if (keyCode == 32) { // Space.
            actioned = true;
        }
        return new InputResult(moved, turned, actioned);
    };
    return Input;
}());
exports.Input = Input;
