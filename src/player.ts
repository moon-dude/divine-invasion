import * as THREE from "three";
import { Coor, Dir, DirRotation, ApplyDir, DirCW } from "./jlib";
import { TILE_SIZE } from "./constants";
import { TileMap } from "./map";
import { Actor } from "./actor";
import { BattleData, BattleSide } from "./battle_data";
import { Stats } from "./stats";
import { Inventory } from "./inventory";
import { Log } from "./log";
import { ActorCard } from "./actor_card";

export const PLAYER_NAME: string = "Player";

export class Player {
  public coor: Coor = new Coor(1, 1);
  public dir: Dir = Dir.S;
  public body: THREE.Object3D = new THREE.Object3D();
  public camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(
    100,
    1.2,
    0.1,
    1300
  );
  private light: THREE.PointLight = new THREE.PointLight("#ff9911", 1, 20, 0.5);
  
  public movement_locked: boolean = false;
  public battle_data: BattleData;
  public recruits: Actor[];
  public inventory: Inventory = new Inventory();
  public macca: number = 0;

  // HTML
  private player_info_div: HTMLElement;
  public actor_cards: ActorCard[];

  constructor() {
    this.body.add(this.camera);
    //this.body.add(this.light);
    this.light.position.x = 5;
    let stats = new Stats(275, 0);
    stats.ag = 25;
    stats.dx = 30;
    stats.lu = 35;
    stats.ma = 0;
    stats.st = 22;
    this.battle_data = new BattleData(
      PLAYER_NAME,
      BattleSide.Our,
      7,
      stats,
      Stats.new_mod(),
      [],
      null
    );
    this.recruits = [Actor.from_demon("Pixie", BattleSide.Our)];
    this.inventory.add_item("Life Stone", 5);
    this.player_info_div = document.getElementById("player_info_div")!;
    this.actor_cards = [new ActorCard(this.player_info_div, this.battle_data, true)];
    this.add_recruit(this.recruits[0]);
  }

  public update() {
    const target_x = this.coor.x * TILE_SIZE;
    const target_z = this.coor.z * TILE_SIZE;
    this.body.position.x += (target_x - this.body.position.x) * 0.2;
    this.body.position.z += (target_z - this.body.position.z) * 0.2;
    let target_rotation = DirRotation(this.dir);
    while (target_rotation < this.body.rotation.y - Math.PI) {
      target_rotation += Math.PI * 2;
    }
    while (target_rotation > this.body.rotation.y + Math.PI + 0.01) {
      target_rotation -= Math.PI * 2;
    }
    this.body.rotation.y += (target_rotation - this.body.rotation.y) * 0.2;
    this.actor_cards[0].update(this.battle_data);
    for (let i = 1; i < this.actor_cards.length; i++) {
      this.actor_cards[i].update(this.recruits[i - 1].battle_data);
    }
  }

  /// Returns true on a successful move.
  move(steps: number, map: TileMap, npcs: Actor[]): boolean {
    if (this.movement_locked) {
      return false;
    }
    let move_coor = ApplyDir(this.coor, this.dir, steps);
    if (map.walkable.get(move_coor.x, move_coor.z) == "/") {
      return false;
    }
    if (map.walkable.get(move_coor.x, move_coor.z) == "+") {
      this.battle_data.mod_stats.hp = 0;
      this.battle_data.mod_stats.mp = 0;
      for (let i = 0; i < this.recruits.length; i++) {
        this.recruits[i].battle_data.mod_stats.hp = 0;
        this.recruits[i].battle_data.mod_stats.mp = 0;
      }
    }
    // Reorient towards npcs if going backwards.
    if (steps < 0) {
      for (let n = 0; n < npcs.length; n++) {
        if (move_coor.equals(npcs[n].coor)) {
          this.dir = DirCW(DirCW(this.dir));
          break;
        }
      }
    }
    this.coor = move_coor;
    return true;
  }

  /// Returns true on a successful turn.
  turn(cw: boolean) {
    if (this.movement_locked) {
      return false;
    }
    if (cw) {
      this.dir = DirCW(this.dir);
    } else {
      this.dir = DirCW(DirCW(DirCW(this.dir)));
    }
    return true;
  }

  public party_gain_loot(from_actors: Actor[]) {
    let total_exp = 0;
    let total_macca = 0;
    for (let i = 0; i < from_actors.length; i++) {
      total_exp += from_actors[i].battle_data.get_level();
      total_macca += from_actors[i].battle_data.get_level();
      if (from_actors[i].battle_data.recruited) {
        this.add_recruit(from_actors[i]);
      }
    }
    const level_delta = this.battle_data.exp.add(total_exp);
    for (let i = 0; i < this.recruits.length; i++) {
      const level_delta = this.recruits[i].battle_data.exp.add(total_exp);
    }
    this.macca += total_macca;
    Log.push("Gained " + total_exp + " experience.");
    Log.push("Gained " + total_macca + " macca.");
  }

  public add_recruit(actor: Actor) {
    actor.battle_data.side = BattleSide.Our;
    this.recruits.push(actor);
    this.actor_cards.push(new ActorCard(this.player_info_div, actor.battle_data, true));
  }

  public get_last_battle_data_clicked(): BattleData | null {
    for (let i = 0; i < this.actor_cards.length; i++) {
      if (this.actor_cards[i].was_clicked()) {
        if (i == 0) {
          return this.battle_data;
        } else {
          return this.recruits[i - 1].battle_data;
        }
      }
    }
    return null;
  }

  public fully_heal(): void {
    if (this.battle_data.mod_stats.hp != 0) {
      this.battle_data.heal_for(this.battle_data.mod_stats.hp);
    }
    for (let i = 0; i < this.recruits.length; i++) {
      if (this.recruits[i].battle_data.mod_stats.hp != 0) {
        this.recruits[i].battle_data.heal_for(this.recruits[i].battle_data.mod_stats.hp);
      }
    }
  }
}
