import { Request } from "./requests";
import { BattleData } from "./battle_data";
import { random_array_element } from "./jlib";
import { Game } from "./game";
import { MenuEntry } from "./menu";

enum CounterRequest {
  Macca,
  LifeStone,
  ChakraDrop,
  Health,
  Mana,
  // TODO: Question
}

const request_options: Map<Request, CounterRequest[]> = new Map([
  [Request.Tribute, [CounterRequest.Macca, CounterRequest.Mana]],
  [Request.Join, [CounterRequest.Macca, CounterRequest.LifeStone, CounterRequest.ChakraDrop, CounterRequest.Health, CounterRequest.Mana]],
])

const request_entries: MenuEntry[] = [
  ["Accept", () => {
    Game.Instance.get_battle()!.accept_negotiation_request();
  }],
  ["Refuse", () => {
    Game.Instance.get_battle()!.refuse_negotiation_request();
  }],
];

export class Negotiation {
  request: Request;
  target: BattleData;
  score: number = 0;
  fail_threshold: number;
  success_threshold: number;
  current_counter_request: CounterRequest;

  constructor(request: Request, target: BattleData) {
    this.request = request;
    this.target = target;
    // TODO: Determine these based off level, species, request.
    this.fail_threshold = -2;
    this.success_threshold = 2;
    this.current_counter_request = this.make_counter_request();
  }

  private make_counter_request(): CounterRequest {
    let counter = random_array_element(request_options.get(this.request)!)!;
    switch (this.current_counter_request) {
      case CounterRequest.Health:
        Game.Instance.menu.push(this.target.name + " requests some of your health.", request_entries);
        break;
      case CounterRequest.Mana:
        Game.Instance.menu.push(this.target.name + " requests some of your energy.", request_entries);
        break;
      case CounterRequest.Macca:
        Game.Instance.menu.push(this.target.name + " requests some of your macca.", request_entries);
        break;
      case CounterRequest.LifeStone:
        Game.Instance.menu.push(this.target.name + " requests a Life Stone.", request_entries);
        break;
      case CounterRequest.ChakraDrop:
        Game.Instance.menu.push(this.target.name + " requests a Chakra Drop.", request_entries);
        break;
    }
    return counter;
  }

  public accept_request() {
    switch (this.current_counter_request) {
      case CounterRequest.Health:
        Game.Instance.player.battle_data.take_damage(20);
        break;
      case CounterRequest.Mana:
        Game.Instance.player.battle_data.reduce_mp_by(10);
        break;
      case CounterRequest.LifeStone:
        if (!Game.Instance.player.inventory.destroy_item("Life Stone")) {
          this.fail_request();
          return;
        }
        break;
      case CounterRequest.ChakraDrop:
        if (!Game.Instance.player.inventory.destroy_item("Chakra Drop")) {
          this.fail_request();
          return;
        }
        break;
      case CounterRequest.Macca:
        case CounterRequest.Mana:
          Game.Instance.player.add_macca(-10);
          break;
    }
    this.score += 1;
  }

  public refuse_request() {
    this.score -= 1;
  }

  public fail_request() {
    this.score -= 1;
  }
}