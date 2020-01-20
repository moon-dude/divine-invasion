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
  switch (request) {
    case Request.Tribute:
      return Math.random() < (from.exp.count - to.exp.count) / 100;
    case Request.Join:
      return Math.random() < (from.exp.count - to.exp.count) / 100;
  }
}

export function request_result(target: BattleData, request: Request): void {
  switch (request) {
    case Request.Tribute:
      // TODO: Other items?
      if (target.name != PLAYER_NAME) {
        Game.Instance.player.inventory.add_item("Life Stone");
        Log.push("Player recieved a Life Stone.");
      } else {
        // TODO: All of the edge cases.
        Game.Instance.player.inventory.destroy_item("Life Stone");
        Log.push("Player gave away a Life Stone.");
      }
      break;
    case Request.Join:
      // TODO: Copy demon to other side.
      target.recruited = true;
      break;
  }
}