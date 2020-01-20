"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var battle_data_1 = require("./battle_data");
var battle_actions_1 = require("./battle_actions");
var game_1 = require("./game");
var requests_1 = require("./requests");
function set_up_player_turn(fighter) {
    var battle_action_entries = [
        [
            "Attack",
            function () {
                // Show enemy targets & back button.
                game_1.Game.Instance.set_actor_cards_enabled(true, function (d) { return d.side == battle_data_1.BattleSide.Their; });
                game_1.Game.Instance.get_battle().current_action = new battle_actions_1.AttackAction();
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
            function () {
                var e_1, _a;
                game_1.Game.Instance.get_battle().current_action = new battle_actions_1.InventoryAction(null);
                var menu_entries = [
                    [
                        "Back",
                        function () {
                            game_1.Game.Instance.menu.pop();
                        }
                    ]
                ];
                var _loop_2 = function (entry) {
                    menu_entries.push([
                        entry[0] + "(x" + entry[1] + ")",
                        function () {
                            game_1.Game.Instance.get_battle().current_action = new battle_actions_1.InventoryAction(entry[0]);
                            game_1.Game.Instance.set_actor_cards_enabled(true);
                            game_1.Game.Instance.menu.push("Use item `" + entry[0] + "` (Select target)", [
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
                try {
                    for (var _b = __values(game_1.Game.Instance.player.inventory.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var entry = _c.value;
                        _loop_2(entry);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                game_1.Game.Instance.menu.push("Inventory (Choose Item)", menu_entries);
            }
        ],
        [
            "Demand Tribute",
            function () {
                game_1.Game.Instance.get_battle().current_action = new battle_actions_1.RequestAction(requests_1.Request.Tribute);
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
                game_1.Game.Instance.get_battle().current_action = new battle_actions_1.RequestAction(requests_1.Request.Join);
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
        ]
    ];
    var _loop_1 = function (i) {
        battle_action_entries.push([
            fighter.skills[i].name,
            function () {
                game_1.Game.Instance.set_actor_cards_enabled(true);
                game_1.Game.Instance.get_battle().current_action = new battle_actions_1.SkillAction(fighter.skills[i].name);
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
    game_1.Game.Instance.menu.push("Player turn", battle_action_entries);
}
exports.set_up_player_turn = set_up_player_turn;
