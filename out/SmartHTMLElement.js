"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SmartHTMLElement = /** @class */ (function () {
    function SmartHTMLElement(id) {
        this.value = document.getElementById(id);
    }
    SmartHTMLElement.prototype.set_inner_html = function (s) {
        if (this.value.innerHTML != s) {
            this.value.innerHTML = s;
        }
    };
    SmartHTMLElement.prototype.set_display = function (s) {
        if (this.value.style.display != s) {
            this.value.style.display = s;
        }
    };
    return SmartHTMLElement;
}());
exports.SmartHTMLElement = SmartHTMLElement;
