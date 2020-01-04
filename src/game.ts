import * as THREE from 'three';
import { Input } from "./input";
import { Player } from './player';
import { World } from './world';
import { level1_data } from './data/levels/level1';
import { level2_data } from './data/levels/level2';
import { random_array_element } from './jlib';
import { Actor } from './actor';
import { Battle } from './battle';
import { BattleFighter, BattleSide } from './battle_data';

export class Game {
  private world: World;

  // Meta.
  private input: Input = new Input();
  private player: Player = new Player();
  private battle: Battle | null = null;
  private battle_actors: Actor[] = [];

  // Rendering.
  private scene: THREE.Scene = new THREE.Scene;
  private renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer();
  private battle_div: HTMLElement;

  constructor() {
    this.scene.add(this.player.body);
    this.world = new World(this.scene, level2_data);
    this.renderer.setSize(window.innerWidth, window.innerHeight - 150);
    document.getElementById("three_div")?.appendChild(this.renderer.domElement);
    this.battle_div = document.getElementById("battle_div")!;
  }
  
  private render() {
    this.renderer.render(this.scene, this.player.camera);
    if (this.battle != null) {
      this.battle.render();
    }
  }

  public update(): void {
    this.player.update();
    this.world.update(this.player);
    this.render();
    if (this.battle != null) {
      const winner = this.battle.battle_winner();
      if (winner != null) {
        this.battle = null;
          if (winner == BattleSide.Our) {
          this.player.movement_locked = false;
          for (let i = 0; i < this.battle_actors.length; i++) {
            this.player.body.remove(this.battle_actors[i].mesh);
          }
          this.battle_actors = [];
        } else {
          this.battle_div.innerHTML = "YOU DIED";
        }
      }
    }
  }

  public key_down(event: any) {
    const result = this.input.check(event, this.player, this.world.map, this.world.actors);
    if (result.moved) {
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
        // hit encounter.
        const coor = this.world.encounters.splice(encounter_idx, 1)[0];
        let encounter_type = random_array_element(this.world.encounter_types);
        if (encounter_type != null) {
          // spawn encounter enemies and start a battle.
          // create enemy actors.
          const enemies = encounter_type.enemies;
          this.battle_actors = enemies.map(id => Actor.from_demon(id, BattleSide.Their, coor));
          let battle_fighters: BattleFighter[] = this.battle_actors.map(
            actor => new BattleFighter(actor.name, actor.battle_data));
          for (let i = 0; i < this.battle_actors.length; i++) {
            this.player.body.add(this.battle_actors[i].mesh);
            this.battle_actors[i].mesh.position.z = -2 + i * .0001;
            this.battle_actors[i].mesh.position.x = 1 * (i - this.battle_actors.length / 2);
          }
          battle_fighters.push(new BattleFighter("Player", this.player.battle_data));
          for (let i = 0; i < this.player.supports.length; i++) {
            battle_fighters.push(new BattleFighter(
              this.player.supports[i].name, 
              this.player.supports[i].battle_data));
          }
          this.battle = new Battle(battle_fighters);
          this.player.movement_locked = true;
          this.battle_div.style.visibility = "";
        }
      }
    }

    if (result.actioned) {
      this.world.dialogue_idx += 1;
      if (this.battle != null) {
        this.battle.next_turn();
      }
    }
  }
}
