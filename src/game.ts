import * as THREE from 'three';
import { Input } from "./input";
import { Player } from './player';
import { World } from './world';
import { level1_map, level1_actors } from './data/levels/level1';

export class Game {
  private world: World;

  // meta.
  private input: Input = new Input();
  private player: Player = new Player();

  // rendering.
  private scene: THREE.Scene = new THREE.Scene;
  private renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer();

  constructor() {
    this.world = new World(this.scene, level1_map, level1_actors);
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
      this.world.dialogue_idx = 0;
    }
    if (result.actioned) {
      this.world.dialogue_idx += 1;
    }
  }
}
