"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emotion_1 = require("./emotion");
/// An HTML entity manager for the battle table.
function append_empty_entry(parent) {
    parent.appendChild(document.createElement("td"));
    parent.appendChild(document.createElement("td"));
    parent.appendChild(document.createElement("td"));
}
var BattleEntry = /** @class */ (function () {
    function BattleEntry(parent_row, name, fighter_data, on_click) {
        this.name_btn = document.createElement("button");
        this.name_btn.innerHTML = name;
        this.name_btn.disabled = true;
        this.name_btn.onclick = on_click;
        this.name_cell = document.createElement("td");
        this.mood_span = document.createElement("span");
        if (fighter_data.mood != null) {
            this.mood_span.innerHTML = emotion_1.mood_string(fighter_data.mood);
        }
        this.name_cell.appendChild(this.name_btn);
        this.name_cell.appendChild(this.mood_span);
        parent_row.appendChild(this.name_cell);
        this.health = document.createElement("td");
        parent_row.appendChild(this.health);
        this.mana = document.createElement("td");
        parent_row.appendChild(this.mana);
        this.update(fighter_data);
    }
    BattleEntry.prototype.set_name_btn_enabled = function (value) {
        this.name_btn.disabled = !value;
    };
    BattleEntry.prototype.update = function (fighter_data) {
        if (fighter_data.mood == null) {
            this.mood_span.innerHTML = "";
        }
        else {
            this.mood_span.innerHTML = emotion_1.mood_string(fighter_data.mood);
        }
        this.health.innerHTML =
            fighter_data.modded_base_stats().hp +
                '<span class="sub">/' +
                fighter_data.base_stats.hp +
                "</span>";
        this.mana.innerHTML =
            fighter_data.modded_base_stats().mp +
                '<span class="sub">/' +
                fighter_data.base_stats.mp +
                "</span>";
    };
    return BattleEntry;
}());
var BattleTable = /** @class */ (function () {
    function BattleTable(our_fighters, their_fighters) {
        var _this = this;
        this.last_click_result = null;
        this.table_body = document.getElementById("battle_tbody");
        this.table_body.innerHTML = "";
        this.our_fighters = [];
        this.their_fighters = [];
        var _loop_1 = function (i) {
            var row = document.createElement("tr");
            this_1.table_body.appendChild(row);
            if (i < our_fighters.length) {
                var our_1 = our_fighters[i];
                this_1.our_fighters.push(new BattleEntry(row, our_1.name, our_1.data, function () {
                    _this.last_click_result = our_1;
                }));
            }
            else {
                append_empty_entry(row);
            }
            row.appendChild(document.createElement("td"));
            if (i < their_fighters.length) {
                var their_1 = their_fighters[i];
                this_1.their_fighters.push(new BattleEntry(row, their_1.name, their_1.data, function () {
                    _this.last_click_result = their_1;
                }));
            }
            else {
                append_empty_entry(row);
            }
        };
        var this_1 = this;
        for (var i = 0; i < our_fighters.length || i < their_fighters.length; i++) {
            _loop_1(i);
        }
    }
    BattleTable.prototype.update = function (our_fighters, their_fighters) {
        for (var i = 0; i < this.our_fighters.length; i++) {
            this.our_fighters[i].update(our_fighters[i].data);
        }
        for (var i = 0; i < this.their_fighters.length; i++) {
            this.their_fighters[i].update(their_fighters[i].data);
        }
    };
    BattleTable.prototype.set_our_btns_enabled = function (value) {
        for (var i = 0; i < this.our_fighters.length; i++) {
            this.our_fighters[i].set_name_btn_enabled(value);
        }
    };
    BattleTable.prototype.set_their_btns_enabled = function (value) {
        for (var i = 0; i < this.their_fighters.length; i++) {
            this.their_fighters[i].set_name_btn_enabled(value);
        }
    };
    BattleTable.prototype.set_all_btns_enabled = function (value) {
        for (var i = 0; i < this.our_fighters.length; i++) {
            this.our_fighters[i].set_name_btn_enabled(value);
        }
        for (var i = 0; i < this.their_fighters.length; i++) {
            this.their_fighters[i].set_name_btn_enabled(value);
        }
    };
    BattleTable.prototype.get_last_click = function () {
        var result = this.last_click_result;
        this.last_click_result = null;
        return result;
    };
    return BattleTable;
}());
exports.BattleTable = BattleTable;
