import * as THREE from 'three';
import { Game } from './game';

let game: Game | null = null;
let three_div: HTMLElement | null = document.getElementById("three_div");
let dialogue_div: HTMLElement | null = document.getElementById("dialogue_div");
if (!three_div) {
  throw new Error("no three_div");
} else if (!dialogue_div) {
  throw new Error("no dialogue_div");
} else {
  game = new Game(three_div, dialogue_div);
}


function onDocumentKeyDown(event: any) {
  game?.key_down(event); 
}

document.addEventListener("keydown", onDocumentKeyDown, false);

function update() {
  game?.update();
	requestAnimationFrame(update);
}

// Kick off update loop.
update();