import * as THREE from 'three';
import { Map } from './map';
import { Grid, Coor } from './jlib';
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
  1, 1, 1, 1, 0, 1, 1, 0, 1,
  1, 0, 0, 0, 0, 0, 1, 0, 1,
  1, 0, 1, 0, 1, 0, 1, 0, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1,
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
    new Dialogue("<< You attacked Incubus and damaged it! >>")
      .set_info("TODO: Replace this with an actual battle sequence to give player a taste of it.")
      .set_criteria(() => flags.has('demon_blood')).lock(),
    new Dialogue("<< Recieved demon blood! >>").flag("has_demon_blood"),
    new Dialogue("Hee hee hee...").set_criteria(() => !flags.has('demon_blood')),
  ]),
  new Actor("Daniel", new Coor(6, 5), [
    new Dialogue("I can't wait until we start the summoning ritual!"),
    new Dialogue("Have you practiced your rites?"),
  ]),
  new Actor("Eve", new Coor(4, 9), [
    new Dialogue("The divination room? It's through here.").set_criteria(() => !flags.has('has_demon_blood')).lock().set_actor_block(true),
    new Dialogue("Do you have your demon blood?").set_criteria(() => !flags.has('has_demon_blood')).lock(),
    new Dialogue("You don't?").set_criteria(() => !flags.has('has_demon_blood')).lock(),
    new Dialogue("Well you'll have to go find demon blood somewhere...").set_criteria(() => !flags.has('has_demon_blood')).flag('demon_blood'),
    new Dialogue("Go find some demon blood and I'll let you through.").set_criteria(() => !flags.has('has_demon_blood')),
    new Dialogue("I see you have found some demon blood!").set_criteria(() => flags.has('has_demon_blood')).lock(),
    new Dialogue("Now before you pass, you'll have to smear it over yourself.").set_criteria(() => flags.has('has_demon_blood')).lock(),
    new Dialogue("<< You smear demon blood all over yourself >>").set_criteria(() => flags.has('has_demon_blood')).lock(),
    new Dialogue("Ha ha, wow you actually did it!").set_criteria(() => flags.has('has_demon_blood')).lock(),
    new Dialogue("You sure smell now, haha!").set_criteria(() => flags.has('has_demon_blood')).set_actor_block(false),
  ]),
  new Actor("Frederick", new Coor(7, 9), [
    new Dialogue("New recruits aren't allowed any further.").set_actor_block(true),
  ]),
  new Actor("George", new Coor(1, 6), [
    new Dialogue("You don't get it! Without our divine laws, our cult would collapse!").set_actor_block(true),
  ]),
  new Actor("Harold", new Coor(1, 8), [
    new Dialogue("Let's see how your laws do against my fist?").set_actor_block(true),
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

    if (!player.coor.equals(npc.coor)) {
      continue;
    }
    let dialogue = npc.dialogue[dialogue_idx];
    let meets_criteria = dialogue ? dialogue.trigger_criteria() : false;
    while (dialogue_idx < npc.dialogue.length && !meets_criteria) {
      dialogue_idx += 1;
      dialogue = npc.dialogue[dialogue_idx];
      meets_criteria = dialogue ? dialogue.trigger_criteria() : false;
    }
    if (!meets_criteria) {
      if (npc.is_blocking) {
        player.move(-1, map, npcs);
      }
      continue;
    }
    if (dialogue.lock_player) {
      player.movement_locked = true;
    } else {
      player.movement_locked = false;
    }
    npc.is_blocking = dialogue.actor_block != undefined ? dialogue.actor_block : npc.is_blocking;

    for (let f = 0; f < dialogue.flags.length; f++) {
      flags.add(dialogue.flags[f]);
    }
    
    dialogue_div.innerHTML = npc.name + ": <br />\"" + dialogue.speech
      + "\"<br /><em>" + dialogue.info + "</em>";
  }

  render();
	requestAnimationFrame(update);
}

function onDocumentKeyDown(event: any) {
  const result = input.check(event, player, map, npcs);
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