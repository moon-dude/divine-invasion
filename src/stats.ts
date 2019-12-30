export class Stats {  
  public static BASE_IDENTITY: Stats = new Stats(1, 1);
  public static MOD_IDENTITY: Stats = new Stats(0, 0);

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
}

export function apply_stats_mod(base: Stats, mod: Stats): Stats {
  // hp and mp are added/subtracted.
  let result = new Stats(base.hp + mod.hp, base.mp + mod.mp);

  // The rest are multiplied.
  result.ag = base.ag * mod.ag;
  result.dx = base.dx * mod.dx;
  result.lu = base.lu * mod.lu;
  result.ma = base.ma * mod.ma;
  result.st = base.st * mod.st;

  return result;
}
