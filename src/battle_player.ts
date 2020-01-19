import { BattleData } from "./battle_data";
import { MenuEntry } from "./menu";
import { Battle, AttackAction, InventoryAction, SkillAction, RequestAction } from "./battle";
import { Game } from "./game";
import { Request } from "./requests";
import { Player } from "./player";

export function set_up_player_turn(fighter: BattleData) {
  let battle_action_entries: MenuEntry[] = [
    [
      "Attack",
      () => {
        // Show enemy targets & back button.
        Battle.Instance!.battle_table.set_their_btns_enabled(true);
        Battle.Instance!.current_action = new AttackAction();
        Game.Menu.push("Attack (Choose Target)", [
          [
            "Back",
            () => {
              Game.Menu.pop();
            }
          ]
        ]);
      }
    ],
    [
      "Inventory",
      () => {
        Battle.Instance!.current_action = new InventoryAction(null);
        let menu_entries: MenuEntry[] = [[
          "Back",
          () => {
            Game.Menu.pop();
          }
        ]];
        for (const entry of Player.Instance.inventory.entries()) {
          menu_entries.push([entry[0] + "(x" + entry[1] + ")", () => {
            Battle.Instance!.current_action = new InventoryAction(entry[0]);
            Battle.Instance!.battle_table.set_all_btns_enabled(true);
            Game.Menu.push("Use item `" + entry[0] + "` (Select target)", [
              ["Back", () => { Game.Menu.pop(); }] 
            ]);
          }]);
        }
        Game.Menu.push("Inventory (Choose Item)", menu_entries);
      }
    ],
    [
      "Demand Tribute",
      () => {
        Battle.Instance!.current_action = new RequestAction(Request.Tribute);
        Battle.Instance!.battle_table.set_their_btns_enabled(true);
        Game.Menu.push("Demand Tribute (Choose Target)", [
          [
            "Back",
            () => {
              Game.Menu.pop();
            }
          ]
        ]);
      }
    ],
    [
      "Demand Servitude",
      () => {
        Battle.Instance!.current_action = new RequestAction(Request.Tribute);
        Battle.Instance!.battle_table.set_their_btns_enabled(true);
        Game.Menu.push("Demand Servitude (Choose Target)", [
          [
            "Back",
            () => {
              Game.Menu.pop();
            }
          ]
        ]);
      }
    ],
  ];
  for (let i = 0; i < fighter.skills.length; i++) {
    battle_action_entries.push([
      fighter.skills[i].name,
      () => {
        Battle.Instance!.battle_table.set_all_btns_enabled(true);
        Battle.Instance!.current_action = new SkillAction(fighter.skills[i].name);
        Game.Menu.push(
          "Use `" + fighter.skills[i].name + "` (Choose Target)",
          [
            [
              "Back",
              () => {
                Game.Menu.pop();
              }
            ]
          ]
        );
      }
    ]);
  }
  Game.Menu.push("Player turn", battle_action_entries);
}
