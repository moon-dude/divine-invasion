import * as THREE from 'three';

import { TileMap } from "./map";
import { Actor } from "./actor";
import { Player } from './player';
import { flags } from './globals';

export class World {
  map: TileMap;
  actors: Actor[];

  dialogue_idx: number = 0;
  
  private ambient_light: THREE.AmbientLight;

  constructor(scene: THREE.Scene, map: TileMap, actors: Actor[]) {
    this.map = map;
    this.actors = actors;
    this.ambient_light = new THREE.AmbientLight();
    scene.add(this.ambient_light);
    
    for (let i = 0; i < this.actors.length; i++) {
      scene.add(this.actors[i].mesh);
    }

    for (let i = 0; i < this.map.meshes.length; i++) {
      scene.add(this.map.meshes[i]);
    }
  }
  public update(player: Player, dialogue_div: HTMLElement) {
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
      
      dialogue_div.innerHTML = actor.name + ": <br />\"" + dialogue.speech
        + "\"<br /><em>" + dialogue.info + "</em>";
    }
  }
}