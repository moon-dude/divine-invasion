import { Coor, Dir } from './jlib';
import { Dialogue } from './dialogue';
import * as THREE from 'three';
import { Player } from './player';
import { TILE_SIZE } from './constants';


const ACTOR_OFFSET_FRONT = .2;
const ACTOR_OFFSET_SIDE = .6;

const geometry = new THREE.PlaneGeometry(2, 3);
const material = new THREE.MeshStandardMaterial({ color: 0xCC3300 });

export class Actor {
  public name: string;
  public coor: Coor;
  public mesh: THREE.Mesh;
  public dialogue: Dialogue[];

  constructor(name: string, coor: Coor, dialogue: Dialogue[]) {
    this.name = name;
    this.coor = coor;
    this.mesh = new THREE.Mesh(geometry, material);
    this.dialogue = dialogue;
  }

  update(/* const */player: Player) {
    let diff_x = player.coor.x - this.coor.x;
    let diff_z = player.coor.z - this.coor.z;
    let delta_x = Math.abs(diff_x) < .1 ? 
      (player.dir == Dir.E ? ACTOR_OFFSET_FRONT : -ACTOR_OFFSET_FRONT) : 
      (diff_x < 0 ? ACTOR_OFFSET_SIDE : -ACTOR_OFFSET_SIDE);
    let delta_z = Math.abs(diff_z) < .1 ? 
      (player.dir == Dir.S ? ACTOR_OFFSET_FRONT : -ACTOR_OFFSET_FRONT) : 
      (diff_z < 0 ? ACTOR_OFFSET_SIDE : -ACTOR_OFFSET_SIDE);

    this.mesh.position.x = (this.coor.x + delta_x) * TILE_SIZE;
    this.mesh.position.z = (this.coor.z + delta_z) * TILE_SIZE;
    
    this.mesh.rotation.y = player.camera.rotation.y;
  }
}