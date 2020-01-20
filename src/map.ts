import * as THREE from "three";
import { Grid, Coor } from "./jlib";
import { TILE_SIZE } from "./constants";
import {
  WALL_CHAR,
  STAIRS_DOWN_CHAR,
  STAIRS_UP_CHAR,
  PLAYER_START_CHAR
} from "./data/areas/area_data";

const geometry = new THREE.BoxGeometry(TILE_SIZE, TILE_SIZE, TILE_SIZE);
const material = new THREE.MeshStandardMaterial({
  color: 0x221111,
  roughness: 0.8
});

function buildMeshes(walkable: Grid<string>): THREE.Mesh[] {
  var meshes: THREE.Mesh[] = [];
  for (let x = 0; x < walkable.width; x++) {
    for (let z = 0; z < walkable.depth; z++) {
      if (walkable.get(x, z) == WALL_CHAR) {
        var box = new THREE.Mesh(geometry, material);
        box.position.x = x * TILE_SIZE;
        box.position.z = z * TILE_SIZE;
        meshes.push(box);
      }
    }
  }
  return meshes;
}

export class TileMap {
  walkable: Grid<string>;
  visited: Grid<boolean>;
  stairs_up: Grid<boolean>;
  stairs_down: Grid<boolean>;
  player_start: Coor | null;

  meshes: THREE.Mesh[];

  constructor(walkable: Grid<string>) {
    this.walkable = walkable;
    let visited = [];
    let stairs_up = [];
    let stairs_down = [];
    this.player_start = null;
    while (visited.length < this.walkable.count) {
      const x = visited.length % this.walkable.width;
      const z = Math.floor(visited.length / this.walkable.width);
      visited.push(false);
      stairs_up.push(this.walkable.get(x, z) == STAIRS_UP_CHAR);
      stairs_down.push(this.walkable.get(x, z) == STAIRS_DOWN_CHAR);
      if (this.walkable.get(x, z) == PLAYER_START_CHAR) {
        this.player_start = new Coor(x, z);
      }
    }
    this.visited = new Grid<boolean>(visited, this.walkable.width);
    this.stairs_up = new Grid<boolean>(stairs_up, this.walkable.width);
    this.stairs_down = new Grid<boolean>(stairs_down, this.walkable.width);
    this.meshes = buildMeshes(this.walkable);
  }
}
