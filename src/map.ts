import * as THREE from "three";
import { Grid, Coor } from "./jlib";
import { TILE_SIZE } from "./constants";
import {
  WALL_CHAR,
  STAIRS_DOWN_CHAR,
  STAIRS_UP_CHAR,
  PLAYER_START_CHAR,
  ENCOUNTER_CHAR
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
  string_grid: Grid<string>;
  visited: Grid<boolean>;
  stairs_up: Grid<boolean>;
  stairs_down: Grid<boolean>;
  encounter: Grid<boolean>;
  player_start: Coor | null;

  meshes: THREE.Mesh[];

  constructor(string_grid: Grid<string>) {
    this.string_grid = string_grid;
    let visited = [];
    let walkable = [];
    let stairs_up = [];
    let stairs_down = [];
    let encounter = [];
    this.player_start = null;
    while (visited.length < this.string_grid.count) {
      const x = visited.length % this.string_grid.width;
      const z = Math.floor(visited.length / this.string_grid.width);
      visited.push(false);
      stairs_up.push(this.string_grid.get(x, z) == STAIRS_UP_CHAR);
      stairs_down.push(this.string_grid.get(x, z) == STAIRS_DOWN_CHAR);
      if (this.string_grid.get(x, z) == PLAYER_START_CHAR) {
        this.player_start = new Coor(x, z);
      }
      encounter.push(this.string_grid.get(x, z) == ENCOUNTER_CHAR);
    }
    this.visited = new Grid<boolean>(visited, this.string_grid.width);
    this.stairs_up = new Grid<boolean>(stairs_up, this.string_grid.width);
    this.stairs_down = new Grid<boolean>(stairs_down, this.string_grid.width);
    this.encounter = new Grid<boolean>(encounter, this.string_grid.width);
    this.meshes = buildMeshes(this.string_grid);
  }

  public is_walkable(x: number, z: number): boolean {
    return this.string_grid.get(x, z) != WALL_CHAR;
  }
}
