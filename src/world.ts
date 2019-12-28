import * as THREE from 'three';

import { TileMap } from "./map";
import { Actor } from "./actor";
import { Player } from './player';
import { flags } from './globals';

export class World {
  // data.
  map: TileMap;
  actors: Actor[];
  dialogue_idx: number = 0;
  
  // Three objects.
  private ambient_light: THREE.AmbientLight;
  private lights: THREE.PointLight[];

  // html.
  private speaker_div: HTMLElement;
  private speech_div: HTMLElement;
  private info_div: HTMLElement;

  constructor(scene: THREE.Scene, map: TileMap, actors: Actor[]) {
    this.map = map;
    this.actors = actors;
    this.ambient_light = new THREE.AmbientLight("#000099", .5);

    this.speaker_div = document.getElementById("dialogue_speaker")!;
    this.speech_div = document.getElementById("dialogue_speech")!;
    this.info_div = document.getElementById("dialogue_info")!;

    scene.add(this.ambient_light);
    
    for (let i = 0; i < this.actors.length; i++) {
      scene.add(this.actors[i].mesh);
    }

    for (let i = 0; i < this.map.meshes.length; i++) {
      scene.add(this.map.meshes[i]);
    }

    this.lights = [];
    for (let x = 1; x < this.map.walkable.width; x += 4) {
      for (let z = 1; z < this.map.walkable.width; z += 4) {
        const new_light = new THREE.PointLight("#ff5500", .1);
        this.lights.push(new_light);
        scene.add(new_light);
      }
    }
  }

  public update(player: Player) {
    this.speaker_div.innerHTML = "";
    this.speech_div.innerHTML = "";
    this.info_div.innerHTML = "";
    for (let i = 0; i < this.actors.length; i++) {
      let actor: Actor = this.actors[i];
      actor.update(player);

      if (!player.coor.equals(actor.coor)) {
        continue;
      }
      let dialogue = actor.dialogue[this.dialogue_idx];
      let meets_criteria = dialogue ? dialogue.trigger_criteria() : false;
      while (this.dialogue_idx < actor.dialogue.length && !meets_criteria) {
        this.dialogue_idx += 1;
        dialogue = actor.dialogue[this.dialogue_idx];
        meets_criteria = dialogue ? dialogue.trigger_criteria() : false;
      }
      if (!meets_criteria) {
        if (actor.is_blocking) {
          player.movement_locked = false;
          player.move(-1, this.map, this.actors);
        }
        continue;
      }
      if (dialogue.lock_player) {
        player.movement_locked = true;
      } else {
        player.movement_locked = false;
      }
      actor.is_blocking = dialogue.actor_block != undefined ? dialogue.actor_block : actor.is_blocking;

      for (let f = 0; f < dialogue.flags.length; f++) {
        flags.add(dialogue.flags[f]);
      }
      
      this.speaker_div.innerHTML = actor.name;
      this.speech_div.innerHTML = dialogue.speech;
      this.info_div.innerHTML = dialogue.info;
    }
  }
}