import { Coor, Dir } from './jlib';
import * as THREE from 'three';

const geometry = new THREE.PlaneGeometry(2, 3);
const material = new THREE.MeshStandardMaterial({ color: 0xCC3300 });

export class Actor {
  public coor: Coor;
  public mesh: THREE.Mesh;

  constructor(coor: Coor) {
    this.coor = coor;
    this.mesh = new THREE.Mesh(geometry, material);
  }
}