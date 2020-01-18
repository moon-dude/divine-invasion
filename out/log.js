"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOG_INDENT_CHAR = "&#8619";
var Log = /** @class */ (function () {
    function Log() {
    }
    Log.push = function (entry) {
        this.lines.unshift(entry);
    };
    Log.as_string = function () {
        return this.lines.join("<br/>");
    };
    Log.lines = [];
    return Log;
}());
exports.Log = Log;
