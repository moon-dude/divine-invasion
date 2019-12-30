import { Stats, apply_stats_mod } from "./stats";

export enum BattleSide {
  Our,
  Their,
}

export function other_side(side: BattleSide): BattleSide {
  return (side == BattleSide.Our ? BattleSide.Their : BattleSide.Our);
}

export class BattleData {
  public static IDENTITY: BattleData = 
    new BattleData(BattleSide.Their, Stats.BASE_IDENTITY, Stats.MOD_IDENTITY);

  side: BattleSide;
  base_stats: Stats;
  mod_stats: Stats;

  constructor(side: BattleSide, base_stats: Stats, mod_stats: Stats) {
    this.side = side;
    this.base_stats = base_stats;
    this.mod_stats = mod_stats;
  }

  public modded_base_stats(): Stats {
    return apply_stats_mod(this.base_stats, this.mod_stats);
  }
}


export class BattleIndex {
  side: BattleSide;
  index: number;

  constructor(side: BattleSide, index: number) {
    this.side = side;
    this.index = index;
  }
}

export class BattleFighter {
  name: string;
  data: BattleData;

  constructor(name: string, data: BattleData) {
    this.name = name;
    this.data = data;
  }
}