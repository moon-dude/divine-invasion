import { Coor, Dir } from './jlib';
import { Dialogue } from './dialogue';
import * as THREE from 'three';
import { Player } from './player';
import { TILE_SIZE } from './constants';


const ACTOR_OFFSET_FRONT = 0.3;
const ACTOR_OFFSET_SIDE = 0.3;

const geometry = new THREE.PlaneGeometry(2, 3);
const material = new THREE.MeshStandardMaterial({ color: 0xCC3300 });

export class Actor {
  public name: string;
  public coor: Coor | null;
  public mesh: THREE.Mesh;
  public dialogue: Dialogue[];
  public is_blocking: boolean = false;

  constructor(name: string, dialogue: Dialogue[]) {
    this.name = name;
    this.coor = null;
    this.mesh = new THREE.Mesh(geometry, material);
    this.dialogue = dialogue;
  }

  update(/* const */player: Player) {
    if (this.coor == null) {
      return;
    }
    // Always to the left of the camera.
    let offset_x = 0;
    let offset_z = 0;
    switch (player.dir) {
      case Dir.W:
        offset_x = -ACTOR_OFFSET_FRONT;
        offset_z = ACTOR_OFFSET_SIDE;
        break;
      case Dir.E:
        offset_x = ACTOR_OFFSET_FRONT;
        offset_z = -ACTOR_OFFSET_SIDE;
        break;
      case Dir.N:
        offset_x = -ACTOR_OFFSET_SIDE;
        offset_z = -ACTOR_OFFSET_FRONT;
        break;
      case Dir.S:
        offset_x = ACTOR_OFFSET_SIDE;
        offset_z = ACTOR_OFFSET_FRONT;
        break;
    }

    this.mesh.position.x = (this.coor.x + offset_x) * TILE_SIZE;
    this.mesh.position.z = (this.coor.z + offset_z) * TILE_SIZE;
    
    this.mesh.rotation.y = player.camera.rotation.y;
  }
}

