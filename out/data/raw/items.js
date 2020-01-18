"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../util");
var ITEMS = [
    {
        name: "Life Stone",
        target: util_1.Target.SingleAlly,
        effect: function (actor) {
            actor.battle_data.heal_for(25);
        }
    }
];
exports.ITEM_MAP = new Map(ITEMS.map(function (i) { return [i.name, i]; }));
