export class Grid<T> {
  private values: T[];
  width: number;
  depth: number;
  count: number;

  constructor(values: T[], width: number) {
    this.values = values;
    this.width = width;
    this.depth = Math.ceil(values.length / width);
    this.count = values.length;
  }

  get(x: number, z: number) {
    return this.values[z * this.width + x];
  }

  static from_string(s: string, width: number): Grid<string> {
    let result = [];
    for (let c = 0; c < s.length; c++) {
      result.push(s[c]);
    }
    return new Grid<string>(result, width);
  }
}

export class Coor {
  public x: number;
  public z: number;

  constructor(x: number, z: number) {
    this.x = x;
    this.z = z;
  }

  equals(other: Coor | null): boolean {
    return other != null && this.x == other.x && this.z == other.z;
  }
}

export enum Dir {
  E, W, N, S,
}

export function ApplyDir(coor: Coor, dir: Dir, mult: number): Coor {
  switch (dir) {
    case Dir.W:
      return new Coor(coor.x - 1 * mult, coor.z);
    case Dir.E:
      return new Coor(coor.x + 1 * mult, coor.z);
    case Dir.N:
      return new Coor(coor.x, coor.z - 1 * mult);
    case Dir.S:
      return new Coor(coor.x, coor.z + 1 * mult);
  }
}

export function DirRotation(dir: Dir): number {
  switch (dir) {
    case Dir.W:
      return Math.PI / 2;
    case Dir.E:
      return -Math.PI / 2
    case Dir.N:
      return 0;
    case Dir.S:
      return Math.PI;
  }
}

export function DirCW(dir: Dir): Dir {
  switch (dir) {
    case Dir.W:
      return Dir.N
    case Dir.E:
      return Dir.S;
    case Dir.N:
      return Dir.E;
    case Dir.S:
      return Dir.W;
  }
}

export function num_eq(a: number, b: number, delta: number = 0.01): boolean {
  return Math.abs(a - b) < delta;
}

export function num_gt(a: number, b: number, delta: number = 0.01): boolean {
  return a > b + delta;
}

export function num_lt(a: number, b: number, delta: number = 0.01): boolean {
  return a < b - delta;
}