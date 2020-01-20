"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var THREE = __importStar(require("three"));
var input_1 = require("./input");
var player_1 = require("./player");
var world_1 = require("./world");
var level2_1 = require("./data/levels/level2");
var battle_1 = require("./battle");
var battle_data_1 = require("./battle_data");
var log_1 = require("./log");
var menu_1 = require("./menu");
var Game = /** @class */ (function () {
    function Game() {
        var _a;
        this.menu = new menu_1.Menu("menu_div");
        this.player = new player_1.Player();
        this.battle = null;
        this.input = new input_1.Input();
        // Rendering.
        this.scene = new THREE.Scene();
        this.renderer = new THREE.WebGLRenderer();
        Game.Instance = this;
        this.scene.add(this.player.body);
        this.world = new world_1.World(this.scene, level2_1.level2_data);
        (_a = document.getElementById("three_div")) === null || _a === void 0 ? void 0 : _a.appendChild(this.renderer.domElement);
        this.battle_div = document.getElementById("battle_div");
        this.log_div = document.getElementById("log_div");
        this.overlay_div = document.getElementById("overlay_div");
    }
    Game.prototype.get_battle = function () {
        return this.battle;
    };
    Game.prototype.render = function () {
        this.renderer.setSize(window.innerWidth, window.innerHeight * 0.5);
        this.player.camera.scale.setX(window.innerWidth / window.innerHeight);
        this.renderer.render(this.scene, this.player.camera);
        this.log_div.innerHTML = "_____LOG<br/>" + log_1.Log.as_string();
        this.overlay_div.innerHTML = "♄" + this.player.macca;
    };
    Game.prototype.update = function () {
        var _a, _b;
        this.player.update();
        this.world.update();
        (_a = this.battle) === null || _a === void 0 ? void 0 : _a.update();
        var winner = (_b = this.battle) === null || _b === void 0 ? void 0 : _b.battle_winner();
        if (winner != null && winner != undefined) {
            this.end_battle(winner);
        }
        this.render();
    };
    Game.prototype.key_down = function (event) {
        var _a;
        var result = this.input.check(event, this.player, this.world.map, this.world.actors);
        if (result.moved) {
            this.world.dialogue_idx = 0;
            // check for encounter.
            var start_battle = false;
            var actors_at_player_coor = this.world.actors_at(this.player.coor);
            for (var i = 0; i < actors_at_player_coor.length; i++) {
                if (actors_at_player_coor[i].battle_data.side == battle_data_1.BattleSide.Their &&
                    actors_at_player_coor[i].battle_data.modded_base_stats().hp > 0) {
                    start_battle = true;
                }
            }
            if (start_battle) {
                var battle_fighters = actors_at_player_coor.map(function (actor) { return actor.battle_data; });
                battle_fighters.push(this.player.battle_data);
                for (var i = 0; i < this.player.supports.length; i++) {
                    battle_fighters.push(this.player.supports[i].battle_data);
                }
                this.battle = new battle_1.Battle(battle_fighters);
                this.player.movement_locked = true;
                this.battle_div.style.visibility = "";
            }
        }
        if (result.actioned) {
            this.world.dialogue_idx += 1;
            (_a = this.battle) === null || _a === void 0 ? void 0 : _a.next_turn();
        }
    };
    Game.prototype.end_battle = function (winner) {
        this.battle.end();
        this.battle = null;
        if (winner == battle_data_1.BattleSide.Our) {
            var actors_at_player_coor = this.world.actors_at(this.player.coor);
            this.player.movement_locked = false;
            this.player.party_gain_loot(actors_at_player_coor);
            this.battle_div.style.visibility = "hidden";
        }
        else {
            this.battle_div.innerHTML = "YOU DIED";
        }
    };
    return Game;
}());
exports.Game = Game;
