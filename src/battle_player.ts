import { BattleData, BattleSide } from "./battle_data";
import { MenuEntry } from "./menu";
import {
  AttackAction,
  SkillAction,
  RequestAction
} from "./actions";
import { Game } from "./game";
import { Request } from "./requests";
import { inventory_btn_on_click } from "./inventory";

export function set_up_player_turn(fighter: BattleData) {
  let menu_entries: MenuEntry[] = [
    [
      "Attack",
      () => {
        // Show enemy targets & back button.
        Game.Instance.set_actor_cards_enabled(
          true,
          d => d.side == BattleSide.Their
        );
        Game.Instance.set_current_action(new AttackAction());
        Game.Instance.menu.push("Attack (Choose Target)", [
          [
            "Back",
            () => {
              Game.Instance.menu.pop();
            }
          ]
        ]);
      }
    ],
    [
      "Inventory",
      inventory_btn_on_click
    ],
    [
      "Demand Tribute",
      () => {
        Game.Instance.set_current_action(new RequestAction(
          Request.Tribute
        ));
        Game.Instance.set_actor_cards_enabled(true, d => d.side == BattleSide.Their);
        Game.Instance.menu.push("Demand Tribute (Choose Target)", [
          [
            "Back",
            () => {
              Game.Instance.menu.pop();
            }
          ]
        ]);
      }
    ],
    [
      "Demand Servitude",
      () => {
        Game.Instance.set_current_action(new RequestAction(
          Request.Join
        ));
        Game.Instance.set_actor_cards_enabled(true, d => d.side == BattleSide.Their);
        Game.Instance.menu.push("Demand Servitude (Choose Target)", [
          [
            "Back",
            () => {
              Game.Instance.menu.pop();
            }
          ]
        ]);
      }
    ]
  ];
  for (let i = 0; i < fighter.skills.length; i++) {
    menu_entries.push([
      fighter.skills[i].name,
      () => {
        Game.Instance.set_actor_cards_enabled(true);
        Game.Instance.set_current_action(new SkillAction(
          fighter.skills[i].name
        ));
        Game.Instance.menu.push(
          "Use `" + fighter.skills[i].name + "` (Choose Target)",
          [
            [
              "Back",
              () => {
                Game.Instance.menu.pop();
              }
            ]
          ]
        );
      }
    ]);
  }
  Game.Instance.menu.push("Player turn", menu_entries);
}
