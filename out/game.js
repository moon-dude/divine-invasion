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
var Game = /** @class */ (function () {
    function Game() {
        var _a;
        // Meta.
        this.input = new input_1.Input();
        this.player = new player_1.Player();
        // Rendering.
        this.scene = new THREE.Scene;
        this.renderer = new THREE.WebGLRenderer();
        this.world = new world_1.World(this.scene, level2_1.level2_data);
        this.renderer.setSize(window.innerWidth, window.innerHeight - 100);
        (_a = document.getElementById("three_div")) === null || _a === void 0 ? void 0 : _a.appendChild(this.renderer.domElement);
    }
    Game.prototype.render = function () {
        this.renderer.render(this.scene, this.player.camera);
    };
    Game.prototype.update = function () {
        this.player.update();
        this.world.update(this.player);
        this.render();
    };
    Game.prototype.key_down = function (event) {
        var result = this.input.check(event, this.player, this.world.map, this.world.actors);
        if (result.moved) {
            console.log("well well a");
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
                console.log("well well 50");
                // hit encounter.
                var coor_1 = this.world.encounters.splice(encounter_idx, 1)[0];
                var encounter_type = jlib_1.random_array_element(this.world.encounter_types);
                if (encounter_type != null) {
                    // spawn encounter enemies and start a battle.
                    // create enemy actors.
                    var enemy_actors = encounter_type.enemies().map(function (id) { return actor_1.Actor.from_demon(id, coor_1); });
                    console.log("well well 100");
                }
            }
        }
        if (result.actioned) {
            this.world.dialogue_idx += 1;
        }
    };
    return Game;
}());
exports.Game = Game;
