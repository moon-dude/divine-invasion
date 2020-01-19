"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BUMP_Z_MAX = 1.1;
var ActorTween = /** @class */ (function () {
    function ActorTween() {
        this.shake = 0;
        this.bump_z = 0;
        this.bump_return = true;
    }
    ActorTween.prototype.set_shake = function (amount) {
        if (this.shake > amount) {
            return;
        }
        this.shake = amount;
    };
    ActorTween.prototype.bump = function () {
        this.bump_return = false;
    };
    ActorTween.prototype.update = function (mesh, base_pos) {
        var shake_x = 0;
        var shake_y = 0;
        if (this.shake > 0) {
            shake_x = (Math.random() * 2 - 1) * this.shake;
            shake_y = (Math.random() * 2 - 1) * this.shake;
            this.shake *= 0.9;
        }
        if (this.bump_return) {
            this.bump_z += (0 - this.bump_z) * 0.2;
        }
        else {
            this.bump_z += (BUMP_Z_MAX - this.bump_z) * 0.2;
            if (Math.abs(this.bump_z - BUMP_Z_MAX) < 0.02) {
                this.bump_return = true;
            }
        }
        mesh.position.x = base_pos.x + shake_x;
        mesh.position.y = base_pos.y + shake_y;
        mesh.position.z = base_pos.z + this.bump_z;
    };
    return ActorTween;
}());
exports.ActorTween = ActorTween;
