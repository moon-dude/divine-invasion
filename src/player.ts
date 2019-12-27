import * as THREE from 'three';
import { Coor, Dir, DirRotation } from './jlib';
import { TILE_SIZE } from './constants';

export class Player {
  coor: Coor = new Coor(1, 1);
  dir: Dir = Dir.S;
  camera: THREE.PerspectiveCamera = 
    new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
  movement_locked: boolean = false;

  public update() {
    this.camera.position.x += (this.coor.x * TILE_SIZE - this.camera.position.x) * 0.2;
    this.camera.position.z += (this.coor.z * TILE_SIZE - this.camera.position.z) * 0.2;
    let target_rotation = DirRotation(this.dir);
    while (target_rotation < this.camera.rotation.y - Math.PI) {
      target_rotation += Math.PI * 2;
    }
    while (target_rotation > this.camera.rotation.y + Math.PI + 0.01) {
      target_rotation -= Math.PI * 2;
    }
    this.camera.rotation.y += (target_rotation - this.camera.rotation.y) * 0.2;
  }
}