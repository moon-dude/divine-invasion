"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var THREE = __importStar(require("three"));
var BUMP_Z_MAX = 0.3;
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
            this.bump_z += (0 - this.bump_z) * 0.3;
        }
        else {
            this.bump_z += (BUMP_Z_MAX - this.bump_z) * 0.2;
            if (Math.abs(this.bump_z - BUMP_Z_MAX) < 0.1) {
                this.bump_return = true;
            }
        }
        var delta = new THREE.Vector3(shake_x, shake_y, this.bump_z);
        var axis = new THREE.Vector3(0, 1, 0);
        var angle = mesh.rotation.y;
        delta.applyAxisAngle(axis, angle);
        delta.add(base_pos);
        Object.assign(mesh.position, delta);
    };
    return ActorTween;
}());
exports.ActorTween = ActorTween;
