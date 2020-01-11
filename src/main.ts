import { Game } from "./game";

let game: Game = new Game();

function onDocumentKeyDown(event: any) {
  game.key_down(event);
}

document.addEventListener("keydown", onDocumentKeyDown, false);

function update() {
  game.update();
  requestAnimationFrame(update);
}

// Kick off update loop.
update();
