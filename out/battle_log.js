"use strict";
// oneof
Object.defineProperty(exports, "__esModule", { value: true });
var tag = "/battle/ ";
var BattleLog = /** @class */ (function () {
    function BattleLog() {
    }
    BattleLog.add = function (s, new_line) {
        if (new_line === void 0) { new_line = true; }
        if (new_line) {
            this.log_lines.push(tag);
        }
        var latest = this.log_lines.length - 1;
        this.log_lines[latest] += s;
        if (!new_line) {
            this.log_lines[latest] += ";";
        }
    };
    BattleLog.flush = function () {
        var inner_html = "";
        for (var i = 0; i < this.log_lines.length; i++) {
            inner_html += "<br />" + this.log_lines[i];
            console.log(this.log_lines[i]);
        }
        this.log_lines = [];
        return inner_html;
    };
    BattleLog.info_div = document.getElementById("battle_info");
    BattleLog.log_lines = [""];
    return BattleLog;
}());
exports.BattleLog = BattleLog;
