import { BattleData } from "./battle_data";
import { PLAYER_NAME } from "./player";
import { Log } from "./log";
import { Game } from "./game";

/// Requests 

export enum Request {
  Tribute, // Only to Player or enemy AI.
  Join, // Only AI.
}

// Try request to an AI fighter (from player or another AI).
export function try_ai_request(from: BattleData, to: BattleData, request: Request): boolean {
  const base_chance = (from.get_level() - to.get_level()) / 10;
  Log.push("base chance: " + base_chance);
  switch (request) {
    case Request.Tribute:
      return Math.random() < base_chance + .5;
    case Request.Join:
      return Math.random() < base_chance;
  }
}

export function request_result(target: BattleData, request: Request): void {
  switch (request) {
    case Request.Tribute:
      // TODO: Other items?
      if (target.name != PLAYER_NAME) {
        Game.Instance.player.inventory.add_item("Life Stone");
      } else {
        // TODO: All of the edge cases.
        Game.Instance.player.inventory.destroy_item("Life Stone");
      }
      break;
    case Request.Join:
      // TODO: Copy demon to other side.
      target.recruited = true;
      break;
  }
}