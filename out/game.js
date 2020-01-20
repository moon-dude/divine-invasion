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
var battle_1 = require("./battle");
var battle_data_1 = require("./battle_data");
var log_1 = require("./log");
var menu_1 = require("./menu");
var cave_area_1 = require("./data/areas/1_cave/cave_area");
var Game = /** @class */ (function () {
    function Game() {
        var _a;
        this.menu = new menu_1.Menu("menu_div");
        this.player = new player_1.Player();
        this.area = cave_area_1.cave_data;
        this.battle = null;
        this.input = new input_1.Input();
        // Rendering.
        this.scene = new THREE.Scene();
        this.renderer = new THREE.WebGLRenderer();
        Game.Instance = this;
        this.scene.add(this.player.body);
        this.world = new world_1.World(this.scene, this.area.levels[0]);
        (_a = document.getElementById("three_div")) === null || _a === void 0 ? void 0 : _a.appendChild(this.renderer.domElement);
        this.log_div = document.getElementById("log_div");
        this.header_div = document.getElementById("header_div");
    }
    Game.prototype.get_battle = function () {
        return this.battle;
    };
    Game.prototype.render = function () {
        this.renderer.setSize(window.innerWidth, window.innerHeight * 0.7);
        this.player.camera.scale.setX(window.innerWidth / window.innerHeight);
        this.renderer.render(this.scene, this.player.camera);
        this.log_div.innerHTML = "_____LOG<br/>" + log_1.Log.as_string();
        this.header_div.innerHTML = "♄" + this.player.macca;
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
                for (var i = 0; i < this.player.recruits.length; i++) {
                    battle_fighters.push(this.player.recruits[i].battle_data);
                }
                this.battle = new battle_1.Battle(battle_fighters);
                this.player.movement_locked = true;
            }
        }
        if (result.actioned) {
            this.world.dialogue_idx += 1;
            // this.battle?.next_turn();
        }
    };
    Game.prototype.end_battle = function (winner) {
        this.battle.end();
        this.battle = null;
        if (winner == battle_data_1.BattleSide.Our) {
            var actors_at_player_coor = this.world.actors_at(this.player.coor);
            this.player.movement_locked = false;
            this.player.party_gain_loot(actors_at_player_coor);
        }
        else {
            log_1.Log.push("YOU DIED");
        }
    };
    Game.prototype.set_actor_cards_enabled = function (enabled, filter) {
        if (filter === void 0) { filter = function () { return true; }; }
        var _a;
        if (filter(this.player.battle_data)) {
            this.player.actor_cards[0].set_name_btn_enabled(enabled);
        }
        for (var i = 1; i < this.player.actor_cards.length; i++) {
            if (filter(this.player.recruits[i - 1].battle_data)) {
                this.player.actor_cards[i].set_name_btn_enabled(enabled);
            }
        }
        (_a = this.battle) === null || _a === void 0 ? void 0 : _a.set_actor_cards_enabled(enabled, filter);
    };
    return Game;
}());
exports.Game = Game;
