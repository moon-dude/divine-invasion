import * as THREE from 'three';
import { Map } from './map';
import { TILE_SIZE } from './constants';
import { Grid, Coor, Dir, DirRotation } from './jlib';
import { Actor } from './actor';
import { Dialogue } from './dialogue';
import { Player } from './player';
import { Input } from './input';

var flags: Set<string> = new Set();

var three_div = document.getElementById("three_div");
var dialogue_div = document.getElementById("dialogue_div");

var scene = new THREE.Scene();

var renderer = new THREE.WebGLRenderer();

var input = new Input();

var light = new THREE.AmbientLight( 0x888888 );
var light2 = new THREE.PointLight( 0xf00f00, 6, 100 );

var player = new Player();

var dialogue_idx = 0;

var map_walkable = [
  1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 0, 0, 0, 1, 0, 0, 0, 1,
  1, 0, 0, 0, 1, 0, 0, 0, 1,
  1, 1, 0, 1, 1, 1, 0, 1, 1,
  1, 1, 0, 0, 0, 0, 0, 1, 1,
  1, 1, 1, 1, 1, 1, 0, 1, 1,
  1, 0, 1, 0, 0, 0, 0, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 1, 0, 0, 0, 0, 0, 1,
  1, 1, 1, 1, 0, 1, 0, 1, 1,
  1, 1, 1, 1, 0, 1, 1, 0, 1,
];
var map = new Map(new Grid(map_walkable, 9));

var npcs: Actor[] = [
  new Actor("Abel", new Coor(2, 3), [
    new Dialogue("Well, well, it looks like the new recruit is finally awake.")
      .set_info("<< SPACE: continue >>").lock(),
    new Dialogue("You're expected in the divination room.").lock(),
    new Dialogue("You know where that is right?"),
  ]),
  new Actor("Beth", new Coor(4, 4), [
    new Dialogue("My head hurts..."),
    new Dialogue("Think I'm possessed by a demon?"),
  ]),
  new Actor("Chloe", new Coor(6, 1), [
    new Dialogue("Isn't my incubus beautiful?..."),
  ]),
  new Actor("Incubus", new Coor(7, 1), [
    new Dialogue("Need demon blood?").set_criteria(() => flags.has('demon_blood')).lock(),
    new Dialogue("Well I'm the only demon around, you gonna take it from me?").set_criteria(() => flags.has('demon_blood')).lock(),
    new Dialogue("You are!?").set_criteria(() => flags.has('demon_blood')).lock(),
    new Dialogue("Hee hee hee...").set_criteria(() => !flags.has('demon_blood')),
  ]),
  new Actor("Daniel", new Coor(6, 5), [
    new Dialogue("I can't wait until we start the summoning ritual!"),
    new Dialogue("Have you practiced your rites?"),
  ]),
  new Actor("Eve", new Coor(4, 9), [
    new Dialogue("The divination room? It's through here.").lock(),
    new Dialogue("Do you have your demon blood?").lock(),
    new Dialogue("You don't?").lock(),
    new Dialogue("Well you'll have to go find demon blood somewhere...").flag('demon_blood'),
    new Dialogue("Go find some demon blood and I'll let you through."),
  ]),
];


function render() {
	renderer.render(scene, player.camera);
}

function update() {
  if (!dialogue_div) {
    return;
  }

  player.update();
  dialogue_div.innerText = "";
  for (let n = 0; n < npcs.length; n++) {
    let npc: Actor = npcs[n];
    npc.update(player);

    if (player.coor.equals(npc.coor)) {
      while (dialogue_idx < npc.dialogue.length && 
              !npc.dialogue[dialogue_idx].trigger_criteria()) {
        dialogue_idx += 1;
      }
      if (dialogue_idx >= npc.dialogue.length) {
        continue;
      }
      let dialogue = npc.dialogue[dialogue_idx];
      if (dialogue.lock_player) {
        player.movement_locked = true;
      } else {
        player.movement_locked = false;
      }

      for (let f = 0; f < dialogue.flags.length; f++) {
        flags.add(dialogue.flags[f]);
      }
      
      dialogue_div.innerHTML = npc.name + ": <br />\"" + dialogue.speech
        + "\"<br /><em>" + dialogue.info + "</em>";
    }
  }

  render();
	requestAnimationFrame(update);
}

function onDocumentKeyDown(event: any) {
  const result = input.check(event, player, map);
  if (result.moved) {
    dialogue_idx = 0;
  }
  if (result.actioned) {
    dialogue_idx += 1;
  }
}

function main() {
  if (!three_div) {
    return;
  }
  renderer.setSize(window.innerWidth, window.innerHeight - 100);
  three_div.appendChild(renderer.domElement);
  
  scene.add(light);
  light2.position.set( 0, 1, 0 );
  scene.add(light2);
  let id: string = "";
  for (id in npcs) {
    scene.add(npcs[id].mesh);
  }

  for (let i = 0; i < map.meshes.length; i++) {
    scene.add(map.meshes[i]);
  }
  
  document.addEventListener("keydown", onDocumentKeyDown, false);
  
  // Kick off update loop.
  update();
}

main();