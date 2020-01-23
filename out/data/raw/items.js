"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../util");
var ITEMS = [
    {
        name: "Life Stone",
        target: util_1.Target.SingleAlly,
        effect: function (target) {
            target.heal_for(50);
        }
    },
    {
        name: "Chakra Drop",
        target: util_1.Target.SingleAlly,
        effect: function (target) {
            target.restore_mp_for(15);
        }
    },
    {
        name: "Revival Bead",
        target: util_1.Target.SingleAlly,
        effect: function (target) {
            target.revive();
        }
    }
];
exports.ITEM_MAP = new Map(ITEMS.map(function (i) { return [i.name, i]; }));
