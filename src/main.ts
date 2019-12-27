import * as THREE from 'three';
import { Map } from './map';
import { TILE_SIZE } from './constants';
import { Grid, Coor, Dir, DirRotation } from './jlib';
import { Actor } from './actor';
import { Dialogue } from './dialogue';
import { Player } from './player';
import { Input } from './input';

var three_div = document.getElementById("three_div");
var dialogue_div = document.getElementById("dialogue_div");

var scene = new THREE.Scene();

var renderer = new THREE.WebGLRenderer();

var input = new Input();

var light = new THREE.AmbientLight( 0x888888 );
var light2 = new THREE.PointLight( 0xf00f00, 6, 100 );

var player = new Player();

var dialogue_idx = 0;

var npcs: Actor[] = [
  new Actor("Abel", new Coor(2, 3), [
    new Dialogue("Well, well, it looks like the new recruit is finally awake.")
      .set_info("<< Press SPACE to continue >>").lock(),
    new Dialogue("You're expected in the divination room.").lock(),
    new Dialogue("You know where that is right?"),
  ]),
  new Actor("Beth", new Coor(4, 4), [
    new Dialogue("My head hurts..."),
    new Dialogue("Think I'm possessed by a demon?"),
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
      if (dialogue_idx < npc.dialogue.length) {
        let dialogue = npc.dialogue[dialogue_idx];
        if (dialogue.lock_player) {
          player.movement_locked = true;
        } else {
          player.movement_locked = false;
        }
        dialogue_div.innerHTML = npc.name + ": <br />\"" + dialogue.speech
          + "\"<br /><em>" + dialogue.info + "</em>";
      }
    }
  }

  render();
	requestAnimationFrame(update);
}

function onDocumentKeyDown(event: any) {
  const result = input.check(event, player);
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

  var map_walkable = [
    1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 1, 0, 0, 0, 1,
    1, 0, 0, 0, 1, 0, 0, 0, 1,
    1, 1, 0, 1, 1, 1, 0, 1, 1,
    1, 1, 0, 0, 0, 0, 0, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1,
    1, 0, 0, 0, 1, 0, 0, 0, 1,
    1, 0, 0, 0, 1, 0, 0, 0, 1,
    1, 0, 0, 0, 1, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1,
  ];
  var map = new Map(new Grid(map_walkable, 9));
  for (let i = 0; i < map.meshes.length; i++) {
    scene.add(map.meshes[i]);
  }
  
  document.addEventListener("keydown", onDocumentKeyDown, false);
  
  // Kick off update loop.
  update();
}

main();