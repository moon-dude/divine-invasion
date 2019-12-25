import * as THREE from 'three';
import { Grid } from './jlib';

export const TILE_SIZE = 4;

const geometry = new THREE.BoxGeometry(TILE_SIZE, TILE_SIZE,  TILE_SIZE);
const material = new THREE.MeshStandardMaterial({ color: 0x0ffff0 });

function buildMeshes(walkable: Grid<boolean>): THREE.Mesh[] {
  var meshes: THREE.Mesh[] = [];
  for (let x = 0; x < walkable.width; x++) {
    for (let z = 0; z < walkable.depth; z++) {
      if (!walkable.get(x, z)) {
        var box = new THREE.Mesh(geometry, material);
        box.position.x = x * TILE_SIZE;
        box.position.z = z * TILE_SIZE;
        meshes.push(box);
      }
    }
  }
  return meshes;
}

export class Map {
  walkable: Grid<boolean>;
  visited: Grid<boolean>;

  meshes: THREE.Mesh[];

  constructor(walkable: Grid<boolean>) {
    this.walkable = walkable;
    let visited = [];
    while (visited.length < this.walkable.count) {
      visited.push(false);
    }
    this.visited = new Grid<boolean>(visited, this.walkable.width);
    this.meshes = buildMeshes(this.walkable);
  }

}