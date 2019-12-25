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
}