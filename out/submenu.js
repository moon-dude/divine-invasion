"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MenuFrame = /** @class */ (function () {
    function MenuFrame() {
        this.description = "";
        this.entries = [];
    }
    return MenuFrame;
}());
exports.MenuFrame = MenuFrame;
var Menu = /** @class */ (function () {
    function Menu(parent) {
        this.menu_stack = [];
        this.buttons = [];
        this.parent = document.getElementById(parent);
        this.description = document.createElement("div");
        this.parent.appendChild(this.description);
    }
    Menu.prototype.push = function (description, entries) {
        this.menu_stack.push({ description: description, entries: entries });
        this.set(description, entries);
    };
    Menu.prototype.pop = function () {
        if (this.menu_stack.length > 0) {
            this.menu_stack.pop();
        }
        if (this.menu_stack.length > 0) {
            var current_frame = this.menu_stack[this.menu_stack.length - 1];
            this.set(current_frame.description, current_frame.entries);
        }
        else {
            this.set("", []);
        }
    };
    Menu.prototype.set = function (description, entries) {
        this.description.innerHTML = description;
        for (var i = 0; i < entries.length; i++) {
            if (i >= this.buttons.length) {
                var new_button = document.createElement("button");
                this.buttons.push(new_button);
                this.parent.appendChild(new_button);
            }
            this.buttons[i].innerHTML = entries[i][0];
            this.buttons[i].onclick = entries[i][1];
        }
    };
    return Menu;
}());
exports.Menu = Menu;
