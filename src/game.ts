import * as THREE from 'three';
import { Input } from "./input";
import { Player } from './player';
import { World } from './world';
import { level1_data } from './data/levels/level1';
import { level2_data } from './data/levels/level2';
import { random_array_element } from './jlib';
import { Actor } from './actor';

export class Game {
  private world: World;

  // Meta.
  private input: Input = new Input();
  private player: Player = new Player();

  // Rendering.
  private scene: THREE.Scene = new THREE.Scene;
  private renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer();

  constructor() {
    this.world = new World(this.scene, level2_data);
    this.renderer.setSize(window.innerWidth, window.innerHeight - 100);
    document.getElementById("three_div")?.appendChild(this.renderer.domElement);
  }
  
  private render() {
    this.renderer.render(this.scene, this.player.camera);
  }

  public update(): void {
    this.player.update();
    this.world.update(this.player);
    this.render();
  }

  public key_down(event: any) {
    const result = this.input.check(event, this.player, this.world.map, this.world.actors);
    if (result.moved) {
      console.log("well well a");
      this.world.dialogue_idx = 0;
      // check for encounter.
      let encounter_idx: number | null = null;
      for (let i = 0; i < this.world.encounters.length; i++) {
        if (this.player.coor.equals(this.world.encounters[i])) {
          encounter_idx = i;
          break;
        }
      }
      if (encounter_idx != null) {
        console.log("well well 50");
        // hit encounter.
        const coor = this.world.encounters.splice(encounter_idx, 1)[0];
        let encounter_type = random_array_element(this.world.encounter_types);
        if (encounter_type != null) {
          // spawn encounter enemies and start a battle.
          // create enemy actors.
          let enemy_actors: Actor[] = encounter_type.enemies().map((id) => Actor.from_demon(id, coor));
          console.log("well well 100");
        }
      }
    }
    if (result.actioned) {
      this.world.dialogue_idx += 1;
    }
  }
}
