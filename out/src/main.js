"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var game_1 = require("./game");
var game = new game_1.Game();
function onDocumentKeyDown(event) {
    game.key_down(event);
}
document.addEventListener("keydown", onDocumentKeyDown, false);
function update() {
    game.update();
    requestAnimationFrame(update);
}
// Kick off update loop.
update();
