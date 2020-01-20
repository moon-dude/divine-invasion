"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// These are stored in a list in each actor.
var Dialogue = /** @class */ (function () {
    function Dialogue(speech) {
        this.info = "";
        this.trigger_criteria = function () { return true; };
        this.lock_player = false;
        this.flags = [];
        this.actor_block = undefined;
        this.heal_player = false;
        this.speech = speech;
    }
    Dialogue.prototype.flag = function (s) {
        this.flags.push(s);
        return this;
    };
    Dialogue.prototype.lock = function () {
        this.lock_player = true;
        return this;
    };
    Dialogue.prototype.set_info = function (val) {
        this.info = val;
        return this;
    };
    Dialogue.prototype.set_actor_block = function (val) {
        this.actor_block = val;
        return this;
    };
    Dialogue.prototype.set_criteria = function (trigger_criteria) {
        this.trigger_criteria = trigger_criteria;
        return this;
    };
    Dialogue.prototype.set_heal_player = function () {
        this.heal_player = true;
        return this;
    };
    return Dialogue;
}());
exports.Dialogue = Dialogue;
