"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emotion_1 = require("./emotion");
var ActorCard = /** @class */ (function () {
    function ActorCard(parent, fighter_data, show_stats) {
        var _this = this;
        this.name_btn_clicked = false;
        this.card_span = document.createElement("span");
        this.card_span.className = "actor_card";
        parent.appendChild(this.card_span);
        this.name_btn = document.createElement("button");
        this.name_btn.innerHTML = fighter_data.name;
        this.name_btn.disabled = true;
        this.name_btn.onclick = function () { _this.name_btn_clicked = true; };
        this.mood_span = document.createElement("span");
        if (fighter_data.mood != null) {
            this.mood_span.innerHTML = emotion_1.mood_string(fighter_data.mood);
        }
        this.card_span.appendChild(this.name_btn);
        this.name_btn.appendChild(this.mood_span);
        this.show_stats = show_stats;
        this.health = document.createElement("span");
        this.card_span.appendChild(this.health);
        this.mana = document.createElement("span");
        this.card_span.appendChild(this.mana);
        this.update(fighter_data);
    }
    ActorCard.prototype.set_name_btn_enabled = function (value) {
        this.name_btn.disabled = !value;
    };
    ActorCard.prototype.update = function (fighter_data) {
        if (fighter_data.mood == null) {
            this.mood_span.innerHTML = "";
        }
        else {
            this.mood_span.innerHTML = emotion_1.mood_string(fighter_data.mood);
        }
        if (this.show_stats) {
            this.health.innerHTML =
                fighter_data.modded_base_stats().hp +
                    '<span class="sub">/' +
                    fighter_data.base_stats.hp +
                    " HP</span> ";
            this.mana.innerHTML =
                fighter_data.modded_base_stats().mp +
                    '<span class="sub">/' +
                    fighter_data.base_stats.mp +
                    " MP</span> ";
        }
    };
    ActorCard.prototype.was_clicked = function () {
        var result = this.name_btn_clicked;
        this.name_btn_clicked = false;
        return result;
    };
    return ActorCard;
}());
exports.ActorCard = ActorCard;
