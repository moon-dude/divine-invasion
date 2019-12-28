import { Actor } from "./actor";

// class Skill { }

export class BattleStats {
  public max_hp: number;
  public hp: number;
  public max_mp: number;
  public mp: number;
  public attack_power: number;

  constructor(hp: number, mp: number, attack_power: number) {
    this.max_hp = hp;
    this.hp = hp;
    this.max_mp = mp;
    this.mp = mp;
    this.attack_power = attack_power;
  }
}

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