"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    };
    Inventory.prototype.destroy_item = function (item, count) {
        if (count === void 0) { count = 1; }
        if (count <= 0) {
            return true;
        }
        if (this.items.get(item) == undefined || this.items.get(item) < count) {
            return false;
        }
        this.items.set(item, this.items.get(item) - count);
        return true;
    };
    Inventory.prototype.entries = function () {
        return this.items.entries();
    };
    return Inventory;
}());
exports.Inventory = Inventory;
