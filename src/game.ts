import * as THREE from "three";
import { Input } from "./input";
import { Player } from "./player";
import { World } from "./world";
import { level1_data } from "./data/levels/level1";
import { level2_data } from "./data/levels/level2";
import { Battle } from "./battle";
import { BattleSide, BattleData } from "./battle_data";
import { Log } from "./log";
import { Menu } from "./menu";

export class Game {
  public static Menu: Menu = new Menu("menu_div");

  private world: World;

  // Meta.
  private input: Input = new Input();
  private player: Player = new Player();

  // Rendering.
  private scene: THREE.Scene = new THREE.Scene();
  private renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer();
  private battle_div: HTMLElement;
  private log_div: HTMLElement;

  constructor() {
    this.scene.add(this.player.body);
    this.world = new World(this.scene, level2_data);
    document.getElementById("three_div")?.appendChild(this.renderer.domElement);
    this.battle_div = document.getElementById("battle_div")!;
    this.log_div = document.getElementById("log_div")!;
  }

  private render() {
    this.renderer.setSize(window.innerWidth, window.innerHeight * .5);
    this.player.camera.scale.setX(window.innerWidth / window.innerHeight);
    this.renderer.render(this.scene, this.player.camera);
    this.log_div.innerHTML = "_____LOG<br/>" + Log.as_string();
  }

  public update(): void {
    this.player.update();
    this.world.update();
    Battle.Instance?.update();
    const winner = Battle.Instance?.battle_winner();
    if (winner != null && winner != undefined) {
      this.end_battle(winner);
    }
    this.render();
  }

  private end_battle(winner: BattleSide) {
    Battle.Instance!.end();
    if (winner == BattleSide.Our) {
      let actors_at_player_coor = this.world.actors_at(this.player.coor);
      this.player.movement_locked = false;
      this.player.party_gain_exp(actors_at_player_coor);
      this.battle_div.style.visibility = "hidden";
    } else {
      this.battle_div.innerHTML = "YOU DIED";
    }
  }

  public key_down(event: any) {
    const result = this.input.check(
      event,
      this.player,
      this.world.map,
      this.world.actors
    );
    if (result.moved) {
      this.world.dialogue_idx = 0;
      // check for encounter.
      let start_battle = false;
      let actors_at_player_coor = this.world.actors_at(this.player.coor);
      for (let i = 0; i < actors_at_player_coor.length; i++) {
        if (actors_at_player_coor[i].battle_data.side == BattleSide.Their) {
          start_battle = true;
        }
      }
      if (start_battle) {
        let battle_fighters: BattleData[] = actors_at_player_coor.map(
          actor => actor.battle_data
        );
        battle_fighters.push(this.player.battle_data);
        for (let i = 0; i < this.player.supports.length; i++) {
          battle_fighters.push(
            this.player.supports[i].battle_data
          );
        }
        Battle.Instance = new Battle(battle_fighters);
        this.player.movement_locked = true;
        this.battle_div.style.visibility = "";
      }
    }
    if (result.actioned) {
      this.world.dialogue_idx += 1;
      if (Battle.Instance != null) {
        Battle.Instance.next_turn();
      }
    }
  }
}
