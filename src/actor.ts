import { Coor, Dir, num_eq, num_lt, num_gt } from './jlib';
import { Dialogue } from './dialogue';
import * as THREE from 'three';
import { Player } from './player';
import { TILE_SIZE } from './constants';
import { DEMON_MAP } from './data/structured/demons';
import { Stats } from './stats';
import { BattleData, BattleSide } from './battle_data';

const ACTOR_OFFSET_FRONT = 0.4;
const ACTOR_OFFSET_SIDE = 0.3;

const cultist_texture = new THREE.TextureLoader().load('assets/cultist.png');
export const CULTIST_MAT = new THREE.MeshStandardMaterial({ map: cultist_texture, transparent: true, roughness: .3 });

const demon_texture = new THREE.TextureLoader().load('assets/demon.png');
export const DEMON_MAT = new THREE.MeshStandardMaterial({ map: demon_texture, transparent: true, roughness: .3 });

const geometry = new THREE.PlaneGeometry(2.5, 3.5);

export class Actor {
  public name: string;
  public coor: Coor | null;
  public mesh: THREE.Mesh;
  public dialogue: Dialogue[];
  public is_blocking: boolean = false;
  public battle_data: BattleData;

  private placed: boolean = false;

  constructor(name: string, dialogue: Dialogue[], 
              material: THREE.MeshStandardMaterial = CULTIST_MAT, 
              battle_data: BattleData = BattleData.IDENTITY) {
    this.name = name;
    this.coor = null;
    this.mesh = new THREE.Mesh(geometry, material);
    this.dialogue = dialogue;
    this.battle_data = battle_data;
  }

  public static from_demon(name: string, coor: Coor | null = null) {
    return new Actor(name, [], DEMON_MAT, 
      new BattleData(
        BattleSide.Their, 
        (DEMON_MAP.get(name)?.stats || Stats.BASE_IDENTITY), 
        Stats.MOD_IDENTITY)
    );
  }

  private need_to_be_placed(player: Player) {
    if (this.coor == null) {
      return false;
    }
    if (!this.placed) {
      return true;
    }
    // player is on the same line (x or z) and facing towards me.
    if (!num_eq(player.coor.x, this.coor.x) && !num_eq(player.coor.z, this.coor.z)) {
      return false;
    }
    if (num_lt(player.coor.x, this.coor.x)) {
      return player.dir == Dir.E;
    }
    if (num_gt(player.coor.x, this.coor.x)) {
      return player.dir == Dir.W;
    }
    if (num_lt(player.coor.z, this.coor.z)) {
      return player.dir == Dir.S;
    }
    if (num_gt(player.coor.z, this.coor.z)) {
      return player.dir == Dir.N;
    }
    return false;
  }

  public update(/* const */player: Player) {
    this.mesh.rotation.y = player.body.rotation.y;

    if (this.coor == null) {
      return;
    }

    if (this.need_to_be_placed(player)) {
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
      this.mesh.position.y = -0.7;  
      this.placed = true;
    }
  }
}

