import * as THREE from 'three';
import { Coor, Dir, DirRotation, ApplyDir, DirCW } from './jlib';
import { TILE_SIZE } from './constants';
import { TileMap } from './map';
import { Actor } from './actor';

export class Player {
  coor: Coor = new Coor(1, 1);
  dir: Dir = Dir.S;
  camera: THREE.PerspectiveCamera = 
    new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
  movement_locked: boolean = false;

  public update() {
    const target_x = this.coor.x * TILE_SIZE;
    const target_z = this.coor.z * TILE_SIZE;
    this.camera.position.x += (target_x - this.camera.position.x) * 0.2;
    this.camera.position.z += (target_z - this.camera.position.z) * 0.2;
    let target_rotation = DirRotation(this.dir);
    while (target_rotation < this.camera.rotation.y - Math.PI) {
      target_rotation += Math.PI * 2;
    }
    while (target_rotation > this.camera.rotation.y + Math.PI + 0.01) {
      target_rotation -= Math.PI * 2;
    }
    this.camera.rotation.y += (target_rotation - this.camera.rotation.y) * 0.2;
  }

  /// Returns true on a successful move.
  move(steps: number, map: TileMap, npcs: Actor[]): boolean {
    if (this.movement_locked) {
      return false;
    }
    let move_coor = ApplyDir(this.coor, this.dir, steps);
    if (map.walkable.get(move_coor.x, move_coor.z) == "1") {
      return false;
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