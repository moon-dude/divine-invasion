import { Coor, Dir } from './jlib';

export class Actor {
  public coor: Coor;
  public dir: Dir;

  constructor(coor: Coor, dir: Dir) {
    this.coor = coor;
    this.dir = dir;
  }
}