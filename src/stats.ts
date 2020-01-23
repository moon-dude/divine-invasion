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

  public static new_base(): Stats {
    return new Stats(1, 1);
  }
  public static new_mod(): Stats {
    return new Stats(0, 0);
  }
  public static new_exp(): Stats {
    let exp_stats = new Stats(0, 0);
    exp_stats.ag = 0;
    exp_stats.dx = 0;
    exp_stats.lu = 0;
    exp_stats.ma = 0;
    exp_stats.st = 0;
    return exp_stats;
  }
}

export function apply_stats_mod(base: Stats, exp_mod: Stats, mult_mod: Stats): Stats {
  // hp and mp are added/subtracted.
  let result = new Stats(
    Math.max(0, base.hp + exp_mod.hp + mult_mod.hp),
    Math.max(0, base.mp + exp_mod.mp + mult_mod.mp)
  );

  // The rest are multiplied.
  result.ag = (base.ag + exp_mod.ag) * mult_mod.ag;
  result.dx = (base.dx + exp_mod.dx) * mult_mod.dx;
  result.lu = (base.lu + exp_mod.lu) * mult_mod.lu;
  result.ma = (base.ma + exp_mod.ma) * mult_mod.ma;
  result.st = (base.st + exp_mod.st) * mult_mod.st;

  return result;
}
