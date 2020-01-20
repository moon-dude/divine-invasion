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

  public get(x: number, z: number) {
    return this.values[z * this.width + x];
  }

  public filter_eq(value_match: T): Coor[] {
    let result = [];
    for (let x = 0; x < this.width; x++) {
      for (let z = 0; z < this.depth; z++) {
        if (this.get(x, z) == value_match) {
          result.push(new Coor(x, z));
        }
      }
    }
    return result;
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

  offset_by(other: Coor): Coor {
    return new Coor(this.x + other.x, this.z + other.z);
  }

  inverse(): Coor {
    return new Coor(-this.x, -this.z);
  }
}

export enum Dir {
  E,
  W,
  N,
  S
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
      return -Math.PI / 2;
    case Dir.N:
      return 0;
    case Dir.S:
      return Math.PI;
  }
}

export function DirCW(dir: Dir): Dir {
  switch (dir) {
    case Dir.W:
      return Dir.N;
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

export function shuffle_array(array: any[]) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

export function random_array_element<T>(array: T[]): T | null {
  if (array.length == 0) {
    return null;
  }
  return array[Math.floor(array.length * Math.random())];
}

export class Unsigned {
  private val: number;

  constructor(val: number) {
    this.val = val > 0 ? val : 0;
  }

  plus(delta: number): void {
    this.val += delta;
    if (this.val < 0) {
      this.val = 0;
    }
  }

  value(): number {
    return this.val;
  }
}
