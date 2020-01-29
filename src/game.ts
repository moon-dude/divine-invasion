import * as THREE from "three";
import { Player } from "./player";
import { World } from "./world";
import { Battle } from "./battle";
import { BattleSide, BattleData } from "./battle_data";
import { Log } from "./log";
import { Menu } from "./menu";
import { AreaData } from "./data/areas/area_data";
import { cave_data } from "./data/areas/1_cave/cave_area";
import { Coor } from "./jlib";
import {
  InventoryAction,
  AttackAction,
  SkillAction,
  RequestAction
} from "./actions";
import { Exploration } from "./exploration";
import { ITEM_MAP } from "./data/raw/items";
import { Actor } from "./actor";


export type GameAction = AttackAction | InventoryAction | SkillAction | RequestAction;

export class Game {
  public static Instance: Game;

  public menu: Menu = new Menu("menu_div");
  public player: Player;
  public world: World;

  private area: AreaData = cave_data;
  private level_idx: number = 1;
  private state: Battle | Exploration | null = null;
  private current_action: GameAction | null = null;

  // Rendering.
  private scene: THREE.Scene = new THREE.Scene();
  private renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer();
  private log_div: HTMLElement;
  private header_div: HTMLElement;

  constructor() {
    Game.Instance = this;
    this.world = new World(this.scene, this.area.levels[this.level_idx]);
    this.player = new Player(this.world.map.player_start!);
    this.scene.add(this.player.body);
    document.getElementById("three_div")?.appendChild(this.renderer.domElement);
    this.log_div = document.getElementById("log_div")!;
    this.header_div = document.getElementById("header_div")!;
  }

  public get_battle(): Battle | null {
    return this.state instanceof Battle ? this.state : null;
  }

  public set_current_action(action: GameAction) {
    this.current_action = action;
  }

  public clear_current_action() {
    this.current_action = null;
  }

  private render() {
    this.renderer.setSize(window.innerWidth, window.innerHeight * 0.7);
    this.player.camera.scale.setX(window.innerWidth / window.innerHeight);
    this.renderer.render(this.scene, this.player.camera);
    this.log_div.innerHTML = Log.as_string();
    this.header_div.innerHTML = "♄" + this.player.macca;
  }

  public update(): void {
    if (this.state == null) {
      this.state = new Exploration();
    }
    this.player.update();
    this.world.update();
    this.state?.update(this.current_action);
    const winner = this.get_battle()?.battle_winner();
    if (winner != null && winner != undefined) {
      this.end_battle(winner);
    }
    this.render();
  }

  public take_action(
    actor: BattleData,
    targets: BattleData[],
    action: GameAction | null = null,
  ): void {
    if (action == null) {
      if (this.current_action == null) {
        return;
      }
      action = this.current_action;
    }
    actor.mark_just_acted();
    if (action instanceof InventoryAction) {
      Log.push(
        actor.name + " used `" + action.item_name! + "`."
      );
      const item = ITEM_MAP.get(action.item_name!);
      for (let t = 0; t < targets.length; t++) {
        item?.effect(targets[t]);
      }
      this.player.inventory.destroy_item(action.item_name!);
      this.menu.pop();
      this.menu.pop();
      this.set_actor_cards_enabled(false);
    } else {
      if (this.state instanceof Battle) {
        this.state.take_battle_action(actor, targets, action);
      }
    }
  }

  public key_down(event: any) {
    this.state?.key_down(event);
  }

  public end_battle(winner: BattleSide | null) {
    this.get_battle()!.end();
    this.state = new Exploration();
    if (winner == BattleSide.Their) {
      Log.push("YOU DIED");
    } else {
      this.player.movement_locked = false;
      if (winner == BattleSide.Our) {
        let actors_at_player_coor = this.world.actors_at(this.player.coor);
        this.player.party_gain_loot(actors_at_player_coor);
      }
    }
  }

  public set_actor_cards_enabled(
    enabled: boolean,
    filter: (fighter: BattleData) => boolean = () => true
  ) {
    if (filter(this.player.battle_data)) {
      this.player.actor_cards[0].set_name_btn_enabled(enabled);
    }
    for (let i = 1; i < this.player.actor_cards.length; i++) {
      if (filter(this.player.recruits[i - 1].battle_data)) {
        this.player.actor_cards[i].set_name_btn_enabled(enabled);
      }
    }
    this.get_battle()?.set_actor_cards_enabled(enabled, filter);
  }

  public change_level(delta: number) {
    this.level_idx += delta;
    Game.Instance.world.unload(this.scene);
    Game.Instance.world = new World(this.scene, this.area.levels[this.level_idx]);
  }

  public start_battle(actors: Actor[]) {
    let battle_fighters: BattleData[] = actors.map(
      actor => actor.battle_data
    );
    battle_fighters.push(Game.Instance.player.battle_data);
    for (let i = 0; i < Game.Instance.player.recruits.length; i++) {
      battle_fighters.push(Game.Instance.player.recruits[i].battle_data);
    }
    this.state = new Battle(battle_fighters);
    this.player.movement_locked = true;
  }
}
