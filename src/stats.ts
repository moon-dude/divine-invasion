export class Stats {
  ag: number = 1;
  dx: number = 1;
  hp: number;
  lu: number = 1;
  ma: number = 1;
  mp: number;
  st: number = 1;

  constructor(hp: number, mp: number) {
    this.hp = hp;
    this.mp = mp;
  }

  public mod(stats: Stats): Stats {
    // hp and mp are added/subtracted.
    let result = new Stats(this.hp + stats.hp, this.mp + stats.mp);

    // The rest are multiplied.
    result.ag = this.ag * stats.ag;
    result.dx = this.dx * stats.dx;
    result.lu = this.lu * stats.lu;
    result.ma = this.ma * stats.ma;
    result.st = this.st * stats.st;

    return result;
  }
}

export const STATS_BASE_IDENTITY = new Stats(1, 1);

export const STATS_MOD_IDENTITY = new Stats(0, 0);