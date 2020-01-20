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
        Game.Instance.get_battle().battle_table.set_their_btns_enabled(true);
        Game.Instance.get_battle().current_action = new AttackAction();
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
      () => {
        Game.Instance.get_battle().current_action = new InventoryAction(null);
        let menu_entries: MenuEntry[] = [[
          "Back",
          () => {
            Game.Instance.menu.pop();
          }
        ]];
        for (const entry of Game.Instance.player.inventory.entries()) {
          menu_entries.push([entry[0] + "(x" + entry[1] + ")", () => {
            Game.Instance.get_battle().current_action = new InventoryAction(entry[0]);
            Game.Instance.get_battle().battle_table.set_all_btns_enabled(true);
            Game.Instance.menu.push("Use item `" + entry[0] + "` (Select target)", [
              ["Back", () => { Game.Instance.menu.pop(); }] 
            ]);
          }]);
        }
        Game.Instance.menu.push("Inventory (Choose Item)", menu_entries);
      }
    ],
    [
      "Demand Tribute",
      () => {
        Game.Instance.get_battle().current_action = new RequestAction(Request.Tribute);
        Game.Instance.get_battle().battle_table.set_their_btns_enabled(true);
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
        Game.Instance.get_battle().current_action = new RequestAction(Request.Join);
        Game.Instance.get_battle().battle_table.set_their_btns_enabled(true);
        Game.Instance.menu.push("Demand Servitude (Choose Target)", [
          [
            "Back",
            () => {
              Game.Instance.menu.pop();
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
        Game.Instance.get_battle().battle_table.set_all_btns_enabled(true);
        Game.Instance.get_battle().current_action = new SkillAction(fighter.skills[i].name);
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
  Game.Instance.menu.push("Player turn", battle_action_entries);
}
