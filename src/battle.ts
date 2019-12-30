import { Actor } from "./actor";
import { Stats, STATS_BASE_IDENTITY, STATS_MOD_IDENTITY } from "./stats";

export enum BattleSide {
  Our,
  Their,
}

export class BattleData {
  side: BattleSide;
  base_stats: Stats;
  mod_stats: Stats;

  constructor(side: BattleSide, base_stats: Stats, mod_stats: Stats) {
    this.side = side;
    this.base_stats = base_stats;
    this.mod_stats = mod_stats;
  }
}

export const BATTLE_DATA_IDENTITY: BattleData = 
  new BattleData(BattleSide.Their, STATS_BASE_IDENTITY, STATS_MOD_IDENTITY);

// This class should be instantiated and destroyed without any move happening or Actors being destroyed.
export class Battle {
  player_supports: Actor[];
  enemies: Actor[];

  constructor(player_supports: Actor[], enemies: Actor[]) {
    this.player_supports = player_supports;
    this.enemies = enemies;
  }

  public update() {
    
  }
}