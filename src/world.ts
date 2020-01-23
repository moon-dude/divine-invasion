import * as THREE from "three";

import { TileMap } from "./map";
import { Actor } from "./actor";
import { flags } from "./globals";
import { LevelData, EMPTY_SPACE_CHAR, ENCOUNTER_CHAR } from "./data/areas/area_data";
import { Coor, shuffle_array, random_array_element } from "./jlib";
import { TILE_SIZE } from "./constants";
import { BattleSide } from "./battle_data";
import { Game } from "./game";

export class World {
  // data.
  public map: TileMap;
  public actors: Actor[];
  public dialogue_idx: number = 0;

  // Three objects.
  private ambient_light: THREE.AmbientLight;
  private lights: THREE.PointLight[];

  // html.
  private speaker_div: HTMLElement;
  private speech_div: HTMLElement;
  private info_div: HTMLElement;

  constructor(scene: THREE.Scene, level_data: LevelData) {
    this.map = level_data.map;
    this.actors = level_data.actors;

    // this.encounter_types = level_data.encounter_types;
    const encounter_coors: Coor[] = this.make_encounters(
      this.map,
      level_data.encounter_count
    );
    for (let i = 0; i < encounter_coors.length; i++) {
      const encounter_type = random_array_element(level_data.encounter_types)!;
      const enemies = encounter_type.enemies;
      let battle_actors = enemies.map(id =>
        Actor.from_demon(id, BattleSide.Their, encounter_coors[i])
      );
      for (let j = 0; j < battle_actors.length; j++) {
        battle_actors[j].pos_index = j;
        this.actors.push(battle_actors[j]);
      }
    }

    this.ambient_light = new THREE.AmbientLight("#001155", 2);
    scene.add(this.ambient_light);

    this.speaker_div = document.getElementById("dialogue_speaker")!;
    this.speech_div = document.getElementById("dialogue_speech")!;
    this.info_div = document.getElementById("dialogue_info")!;

    for (let i = 0; i < this.actors.length; i++) {
      scene.add(this.actors[i].mesh);
    }

    for (let i = 0; i < this.map.meshes.length; i++) {
      scene.add(this.map.meshes[i]);
    }

    this.lights = [];
    // for (let x = 1; x < this.map.walkable.width; x += 4) {
    //   for (let z = 1; z < this.map.walkable.width; z += 4) {
    //     const new_light = new THREE.PointLight("#2222cc");
    //     new_light.position.x = x * TILE_SIZE;
    //     new_light.position.z = z * TILE_SIZE;
    //     new_light.position.y = 1;
    //     this.lights.push(new_light);
    //     scene.add(new_light);
    //   }
    // }
  }

  /// Identify all of the open tiles and pick a random unique set.
  private make_encounters(map: TileMap, count: number): Coor[] {
    let open_coors: Coor[] = map.string_grid.filter_eq(ENCOUNTER_CHAR);
    shuffle_array(open_coors);
    let result: Coor[] = [];
    for (let i = 0; i < count && i < open_coors.length; i++) {
      result.push(open_coors[i]);
    }
    return result;
  }

  public update() {
    this.speaker_div.innerHTML = "";
    this.speech_div.innerHTML = "";
    this.info_div.innerHTML = "";
    for (let i = 0; i < this.actors.length; i++) {
      let actor: Actor = this.actors[i];
      actor.update();

      if (!Game.Instance.player.coor.equals(actor.coor)) {
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
          Game.Instance.player.movement_locked = false;
          Game.Instance.player.move(-1, this.map, this.actors);
        }
        continue;
      }
      if (dialogue.lock_player) {
        Game.Instance.player.movement_locked = true;
      } else {
        Game.Instance.player.movement_locked = false;
      }
      if (dialogue.heal_player) {
        Game.Instance.player.fully_heal();
      }
      actor.is_blocking =
        dialogue.actor_block != undefined
          ? dialogue.actor_block
          : actor.is_blocking;

      for (let f = 0; f < dialogue.flags.length; f++) {
        flags.add(dialogue.flags[f]);
      }

      this.speaker_div.innerHTML = actor.name;
      this.speech_div.innerHTML = dialogue.speech;
      this.info_div.innerHTML = dialogue.info;
    }
  }

  public actors_at(coor: Coor): Actor[] {
    let result: Actor[] = [];
    for (let i = 0; i < this.actors.length; i++) {
      if (this.actors[i].coor?.equals(coor)) {
        result.push(this.actors[i]);
      }
    }
    return result;
  }

  public unload(scene: THREE.Scene): void {    
    scene.remove(this.ambient_light);

    for (let i = 0; i < this.actors.length; i++) {
      scene.remove(this.actors[i].mesh);
    }

    for (let i = 0; i < this.map.meshes.length; i++) {
      scene.remove(this.map.meshes[i]);
    }

    for (let i = 0; i < this.lights.length; i++) {
      scene.remove(this.lights[i]);
    }
  }
}
