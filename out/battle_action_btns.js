"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var battle_1 = require("./battle");
var BattleActionBtns = /** @class */ (function () {
    function BattleActionBtns() {
        this.battle_action_btns = [];
        this.battle_action_span = document.getElementById("battle_action_span");
        for (var i = 0; i < 10; i++) {
            var new_button = document.createElement("button");
            new_button.style.display = "none";
            this.battle_action_span.appendChild(new_button);
            this.battle_action_btns.push(new_button);
        }
    }
    BattleActionBtns.prototype.set_visible = function (value) {
        if (value) {
            this.battle_action_span.style.display = "";
        }
        else {
            this.battle_action_span.style.display = "none";
        }
    };
    BattleActionBtns.prototype.clear_button = function (idx) {
        this.battle_action_btns[idx].style.display = "none";
    };
    BattleActionBtns.prototype.clear_buttons = function (from) {
        if (from === void 0) { from = 0; }
        for (var i = from; i < this.battle_action_btns.length; i++) {
            this.clear_button(i);
        }
    };
    BattleActionBtns.prototype.set_button_skill = function (idx, value) {
        this.battle_action_btns[idx].style.display = "";
        battle_1.Battle.Instance.current_action = value;
        if (value == "Attack") {
            this.battle_action_btns[idx].innerHTML = value;
            this.battle_action_btns[idx].onclick = function () {
                // show enemy targets
                battle_1.Battle.Instance.battle_table.set_their_btns_enabled(true);
            };
        }
        else {
            this.battle_action_btns[idx].innerHTML = value.name;
            this.battle_action_btns[idx].onclick = function () {
                // TODO: show targets based on skill.
                battle_1.Battle.Instance.battle_table.set_all_btns_enabled(true);
            };
        }
    };
    return BattleActionBtns;
}());
exports.BattleActionBtns = BattleActionBtns;
