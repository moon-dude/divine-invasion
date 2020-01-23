"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var battle_data_1 = require("./battle_data");
var actions_1 = require("./actions");
var game_1 = require("./game");
var requests_1 = require("./requests");
var inventory_1 = require("./inventory");
function set_up_player_turn(fighter) {
    var menu_entries = [
        [
            "Attack",
            function () {
                // Show enemy targets & back button.
                game_1.Game.Instance.set_actor_cards_enabled(true, function (d) { return d.side == battle_data_1.BattleSide.Their; });
                game_1.Game.Instance.set_current_action(new actions_1.AttackAction());
                game_1.Game.Instance.menu.push("Attack (Choose Target)", [
                    [
                        "Back",
                        function () {
                            game_1.Game.Instance.menu.pop();
                        }
                    ]
                ]);
            }
        ],
        [
            "Inventory",
            inventory_1.inventory_btn_on_click
        ],
        [
            "Demand Tribute",
            function () {
                game_1.Game.Instance.set_current_action(new actions_1.RequestAction(requests_1.Request.Tribute));
                game_1.Game.Instance.set_actor_cards_enabled(true, function (d) { return d.side == battle_data_1.BattleSide.Their; });
                game_1.Game.Instance.menu.push("Demand Tribute (Choose Target)", [
                    [
                        "Back",
                        function () {
                            game_1.Game.Instance.menu.pop();
                        }
                    ]
                ]);
            }
        ],
        [
            "Demand Servitude",
            function () {
                game_1.Game.Instance.set_current_action(new actions_1.RequestAction(requests_1.Request.Join));
                game_1.Game.Instance.set_actor_cards_enabled(true, function (d) { return d.side == battle_data_1.BattleSide.Their; });
                game_1.Game.Instance.menu.push("Demand Servitude (Choose Target)", [
                    [
                        "Back",
                        function () {
                            game_1.Game.Instance.menu.pop();
                        }
                    ]
                ]);
            }
        ],
        [
            "Run",
            function () {
                game_1.Game.Instance.end_battle(null);
            }
        ]
    ];
    var _loop_1 = function (i) {
        menu_entries.push([
            fighter.skills[i].name,
            function () {
                game_1.Game.Instance.set_actor_cards_enabled(true);
                game_1.Game.Instance.set_current_action(new actions_1.SkillAction(fighter.skills[i].name));
                game_1.Game.Instance.menu.push("Use `" + fighter.skills[i].name + "` (Choose Target)", [
                    [
                        "Back",
                        function () {
                            game_1.Game.Instance.menu.pop();
                        }
                    ]
                ]);
            }
        ]);
    };
    for (var i = 0; i < fighter.skills.length; i++) {
        _loop_1(i);
    }
    game_1.Game.Instance.menu.push("Player turn", menu_entries);
}
exports.set_up_player_turn = set_up_player_turn;
