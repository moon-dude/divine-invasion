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
var jlib_1 = require("./jlib");
var actor_1 = require("./actor");
var battle_1 = require("./battle");
var battle_data_1 = require("./battle_data");
var Game = /** @class */ (function () {
    function Game() {
        var _a;
        // Meta.
        this.input = new input_1.Input();
        this.player = new player_1.Player();
        this.battle = null;
        this.battle_actors = [];
        // Rendering.
        this.scene = new THREE.Scene;
        this.renderer = new THREE.WebGLRenderer();
        this.scene.add(this.player.body);
        this.world = new world_1.World(this.scene, level2_1.level2_data);
        this.renderer.setSize(window.innerWidth, window.innerHeight - 150);
        (_a = document.getElementById("three_div")) === null || _a === void 0 ? void 0 : _a.appendChild(this.renderer.domElement);
        this.battle_div = document.getElementById("battle_div");
    }
    Game.prototype.render = function () {
        this.renderer.render(this.scene, this.player.camera);
        if (this.battle != null) {
            this.battle.render();
        }
    };
    Game.prototype.update = function () {
        this.player.update();
        this.world.update(this.player);
        this.render();
        if (this.battle != null) {
            var winner = this.battle.battle_winner();
            if (winner != null) {
                this.battle = null;
                if (winner == battle_data_1.BattleSide.Our) {
                    this.player.movement_locked = false;
                    for (var i = 0; i < this.battle_actors.length; i++) {
                        this.player.body.remove(this.battle_actors[i].mesh);
                    }
                    this.battle_actors = [];
                    this.battle_div.style.visibility = "hidden";
                }
                else {
                    this.battle_div.innerHTML = "YOU DIED";
                }
            }
        }
    };
    Game.prototype.key_down = function (event) {
        var result = this.input.check(event, this.player, this.world.map, this.world.actors);
        if (result.moved) {
            this.world.dialogue_idx = 0;
            // check for encounter.
            var encounter_idx = null;
            for (var i = 0; i < this.world.encounters.length; i++) {
                if (this.player.coor.equals(this.world.encounters[i])) {
                    encounter_idx = i;
                    break;
                }
            }
            if (encounter_idx != null) {
                // hit encounter.
                var coor_1 = this.world.encounters.splice(encounter_idx, 1)[0];
                var encounter_type = jlib_1.random_array_element(this.world.encounter_types);
                if (encounter_type != null) {
                    // spawn encounter enemies and start a battle.
                    // create enemy actors.
                    var enemies = encounter_type.enemies;
                    this.battle_actors = enemies.map(function (id) { return actor_1.Actor.from_demon(id, battle_data_1.BattleSide.Their, coor_1); });
                    var battle_fighters = this.battle_actors.map(function (actor) { return new battle_data_1.BattleFighter(actor.name, actor.battle_data); });
                    for (var i = 0; i < this.battle_actors.length; i++) {
                        this.player.body.add(this.battle_actors[i].mesh);
                        this.battle_actors[i].mesh.position.z = -2 + i * .0001;
                        this.battle_actors[i].mesh.position.x = 1 * (i - this.battle_actors.length / 2);
                    }
                    battle_fighters.push(new battle_data_1.BattleFighter("Player", this.player.battle_data));
                    for (var i = 0; i < this.player.supports.length; i++) {
                        battle_fighters.push(new battle_data_1.BattleFighter(this.player.supports[i].name, this.player.supports[i].battle_data));
                    }
                    this.battle = new battle_1.Battle(battle_fighters);
                    this.player.movement_locked = true;
                    this.battle_div.style.visibility = "";
                }
            }
        }
        if (result.actioned) {
            this.world.dialogue_idx += 1;
            if (this.battle != null) {
                this.battle.next_turn();
            }
        }
    };
    return Game;
}());
exports.Game = Game;
