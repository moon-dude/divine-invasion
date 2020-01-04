import * as THREE from 'three';
import { Coor, Dir, DirRotation, ApplyDir, DirCW } from './jlib';
import { TILE_SIZE } from './constants';
import { TileMap } from './map';
import { Actor } from './actor';
import { BattleData, BattleSide, BattleFighter } from './battle_data';
import { Stats } from './stats';

export class Player {
  coor: Coor = new Coor(1, 1);
  dir: Dir = Dir.S;
  body: THREE.Object3D = new THREE.Object3D();
  camera: THREE.PerspectiveCamera = 
    new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
  private light: THREE.PointLight = new THREE.PointLight("#ff9911", 1, 20, .5);
  movement_locked: boolean = false;
  battle_data: BattleData;
  supports: Actor[];

  constructor() {
    this.body.add(this.camera);
    this.body.add(this.light);
    this.light.position.x = 5;
    let stats = new Stats(275, 0);
    stats.ag = 25;
    stats.dx = 30;
    stats.lu = 35;
    stats.ma = 0;
    stats.st = 20;
    this.battle_data = new BattleData(BattleSide.Our, stats, Stats.new_mod(), []);
    this.supports = [Actor.from_demon("Pixie", BattleSide.Our)];
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
      for (let i = 0; i < this.supports.length; i++) {
        this.supports[i].battle_data.mod_stats.hp = 0;
        this.supports[i].battle_data.mod_stats.mp = 0;
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
}