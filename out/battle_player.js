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
var battle_1 = require("./battle");
var game_1 = require("./game");
var requests_1 = require("./requests");
var player_1 = require("./player");
function set_up_player_turn(fighter) {
    var battle_action_entries = [
        [
            "Attack",
            function () {
                // Show enemy targets & back button.
                battle_1.Battle.Instance.battle_table.set_their_btns_enabled(true);
                battle_1.Battle.Instance.current_action = new battle_1.AttackAction();
                game_1.Game.Menu.push("Attack (Choose Target)", [
                    [
                        "Back",
                        function () {
                            game_1.Game.Menu.pop();
                        }
                    ]
                ]);
            }
        ],
        [
            "Inventory",
            function () {
                var e_1, _a;
                battle_1.Battle.Instance.current_action = new battle_1.InventoryAction(null);
                var menu_entries = [[
                        "Back",
                        function () {
                            game_1.Game.Menu.pop();
                        }
                    ]];
                var _loop_2 = function (entry) {
                    menu_entries.push([entry[0] + "(x" + entry[1] + ")", function () {
                            battle_1.Battle.Instance.current_action = new battle_1.InventoryAction(entry[0]);
                            battle_1.Battle.Instance.battle_table.set_all_btns_enabled(true);
                            game_1.Game.Menu.push("Use item `" + entry[0] + "` (Select target)", [
                                ["Back", function () { game_1.Game.Menu.pop(); }]
                            ]);
                        }]);
                };
                try {
                    for (var _b = __values(player_1.Player.Instance.inventory.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
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
                game_1.Game.Menu.push("Inventory (Choose Item)", menu_entries);
            }
        ],
        [
            "Demand Tribute",
            function () {
                battle_1.Battle.Instance.current_action = new battle_1.RequestAction(requests_1.Request.Tribute);
                battle_1.Battle.Instance.battle_table.set_their_btns_enabled(true);
                game_1.Game.Menu.push("Demand Tribute (Choose Target)", [
                    [
                        "Back",
                        function () {
                            game_1.Game.Menu.pop();
                        }
                    ]
                ]);
            }
        ],
        [
            "Demand Servitude",
            function () {
                battle_1.Battle.Instance.current_action = new battle_1.RequestAction(requests_1.Request.Tribute);
                battle_1.Battle.Instance.battle_table.set_their_btns_enabled(true);
                game_1.Game.Menu.push("Demand Servitude (Choose Target)", [
                    [
                        "Back",
                        function () {
                            game_1.Game.Menu.pop();
                        }
                    ]
                ]);
            }
        ],
    ];
    var _loop_1 = function (i) {
        battle_action_entries.push([
            fighter.skills[i].name,
            function () {
                battle_1.Battle.Instance.battle_table.set_all_btns_enabled(true);
                battle_1.Battle.Instance.current_action = new battle_1.SkillAction(fighter.skills[i].name);
                game_1.Game.Menu.push("Use `" + fighter.skills[i].name + "` (Choose Target)", [
                    [
                        "Back",
                        function () {
                            game_1.Game.Menu.pop();
                        }
                    ]
                ]);
            }
        ]);
    };
    for (var i = 0; i < fighter.skills.length; i++) {
        _loop_1(i);
    }
    game_1.Game.Menu.push("Player turn", battle_action_entries);
}
exports.set_up_player_turn = set_up_player_turn;
