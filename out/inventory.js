"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var actions_1 = require("./actions");
var game_1 = require("./game");
var log_1 = require("./log");
var Inventory = /** @class */ (function () {
    function Inventory() {
        this.items = new Map();
    }
    Inventory.prototype.add_item = function (item, count) {
        if (count === void 0) { count = 1; }
        if (count <= 0) {
            return;
        }
        if (this.items.get(item) == undefined) {
            this.items.set(item, 0);
        }
        this.items.set(item, this.items.get(item) + count);
        log_1.Log.push("Recieved " + item + (count > 1 ? " x" + count : "") + ".");
    };
    Inventory.prototype.destroy_item = function (item, count) {
        if (count === void 0) { count = 1; }
        if (count <= 0) {
            return true;
        }
        if (this.items.get(item) == undefined || this.items.get(item) < count) {
            console.log("Error destroying item: " + item + " (" + count + ")");
            return false;
        }
        this.items.set(item, this.items.get(item) - count);
        log_1.Log.push("Lost " + item + (count > 1 ? " x" + count : "") + ".");
        return true;
    };
    Inventory.prototype.entries = function () {
        return this.items.entries();
    };
    return Inventory;
}());
exports.Inventory = Inventory;
function inventory_btn_on_click() {
    var e_1, _a;
    game_1.Game.Instance.set_current_action(new actions_1.InventoryAction(null));
    var menu_entries = [
        [
            "Back",
            function () {
                game_1.Game.Instance.menu.pop();
            }
        ]
    ];
    var _loop_1 = function (entry) {
        menu_entries.push([
            entry[0] + "(x" + entry[1] + ")",
            function () {
                game_1.Game.Instance.set_current_action(new actions_1.InventoryAction(entry[0]));
                game_1.Game.Instance.set_actor_cards_enabled(true);
                game_1.Game.Instance.menu.push("Use item `" + entry[0] + "` (Select target)", [
                    [
                        "Back",
                        function () {
                            game_1.Game.Instance.menu.pop();
                        }
                    ]
                ]);
            }
        ]);
    };
    try {
        for (var _b = __values(game_1.Game.Instance.player.inventory.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var entry = _c.value;
            _loop_1(entry);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    game_1.Game.Instance.menu.push("Inventory (Choose Item)", menu_entries);
}
exports.inventory_btn_on_click = inventory_btn_on_click;
