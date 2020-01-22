import * as THREE from "three";
import { Grid, Coor } from "./jlib";
import { TILE_SIZE } from "./constants";
import {
  WALL_CHAR,
  STAIRS_DOWN_CHAR,
  STAIRS_UP_CHAR,
  PLAYER_START_CHAR
} from "./data/areas/area_data";

const box_geometry = new THREE.BoxGeometry(TILE_SIZE, TILE_SIZE, TILE_SIZE);
const wall_material = new THREE.MeshStandardMaterial({
  color: 0x330022,
  roughness: 0.8
});
const ground_material = new THREE.MeshStandardMaterial({
  color: 0x110011,
  roughness: 0.7
});

function buildMeshes(walkable: Grid<string>): THREE.Mesh[] {
  var meshes: THREE.Mesh[] = [];
  for (let x = 0; x < walkable.width; x++) {
    for (let z = 0; z < walkable.depth; z++) {
      // Wall.
      if (walkable.get(x, z) == WALL_CHAR) {
        var box = new THREE.Mesh(box_geometry, wall_material);
        box.position.x = x * TILE_SIZE;
        box.position.z = z * TILE_SIZE;
        meshes.push(box);
      }
      if (walkable.get(x, z) == STAIRS_DOWN_CHAR || walkable.get(x, z) == STAIRS_UP_CHAR) {
        // Stairs.
        var box = new THREE.Mesh(box_geometry, wall_material);
        box.scale.setScalar(1.4);
        box.position.x = x * TILE_SIZE;
        box.position.y = TILE_SIZE * 0.35 * (walkable.get(x, z) == STAIRS_DOWN_CHAR ? 1 : -1);
        box.position.z = z * TILE_SIZE;
        if (walkable.get(x - 1, z) != WALL_CHAR || walkable.get(x + 1, z) != WALL_CHAR) {
          box.rotation.z = Math.PI / 4;
          box.scale.x = 1;
        } else {
          box.rotation.x = Math.PI / 4;
          box.scale.x = 1;
        }
        meshes.push(box);
      } else {
        // Ground.
        var box = new THREE.Mesh(box_geometry, ground_material);
        box.position.x = x * TILE_SIZE;
        box.position.y = -TILE_SIZE;
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
