"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// These are stored in a list in each actor.
var Dialogue = /** @class */ (function () {
    function Dialogue(speech) {
        this.info = "";
        this.trigger_criteria = function () { return true; };
        this.lock_player = false;
        this.speech = speech;
    }
    Dialogue.prototype.lock = function () {
        this.lock_player = true;
        return this;
    };
    Dialogue.prototype.set_info = function (val) {
        this.info = val;
        return this;
    };
    Dialogue.prototype.set_criteria = function (trigger_criteria) {
        this.trigger_criteria = trigger_criteria;
        return this;
    };
    return Dialogue;
}());
exports.Dialogue = Dialogue;
