"use strict";
// oneof
Object.defineProperty(exports, "__esModule", { value: true });
var tag = "(battle) ";
var BattleInfo = /** @class */ (function () {
    function BattleInfo() {
    }
    BattleInfo.set = function (name, description, result) {
        this.actor_name = name;
        this.description = description;
        this.result = result;
    };
    BattleInfo.clear = function () {
        this.actor_name = "";
        this.description = "";
        this.result = "";
    };
    return BattleInfo;
}());
exports.BattleInfo = BattleInfo;
