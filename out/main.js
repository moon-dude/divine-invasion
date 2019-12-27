"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var game_1 = require("./game");
var game = null;
var three_div = document.getElementById("three_div");
var dialogue_div = document.getElementById("dialogue_div");
if (!three_div) {
    throw new Error("no three_div");
}
else if (!dialogue_div) {
    throw new Error("no dialogue_div");
}
else {
    game = new game_1.Game(three_div, dialogue_div);
}
function onDocumentKeyDown(event) {
    var _a;
    (_a = game) === null || _a === void 0 ? void 0 : _a.key_down(event);
}
document.addEventListener("keydown", onDocumentKeyDown, false);
function update() {
    var _a;
    (_a = game) === null || _a === void 0 ? void 0 : _a.update();
    requestAnimationFrame(update);
}
// Kick off update loop.
update();
