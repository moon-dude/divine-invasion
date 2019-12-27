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
var level1_1 = require("./data/levels/level1");
var Game = /** @class */ (function () {
    function Game(three_div, dialogue_div) {
        // meta.
        this.input = new input_1.Input();
        this.player = new player_1.Player();
        // rendering.
        this.scene = new THREE.Scene;
        this.renderer = new THREE.WebGLRenderer();
        this.three_div = three_div;
        this.dialogue_div = dialogue_div;
        this.world = new world_1.World(this.scene, level1_1.level1_map, level1_1.level1_actors);
        this.renderer.setSize(window.innerWidth, window.innerHeight - 100);
        three_div.appendChild(this.renderer.domElement);
    }
    Game.prototype.render = function () {
        this.renderer.render(this.scene, this.player.camera);
    };
    Game.prototype.update = function () {
        this.player.update();
        this.dialogue_div.innerText = "";
        this.world.update(this.player, this.dialogue_div);
        this.render();
    };
    Game.prototype.key_down = function (event) {
        var result = this.input.check(event, this.player, this.world.map, this.world.actors);
        if (result.moved) {
            this.world.dialogue_idx = 0;
        }
        if (result.actioned) {
            this.world.dialogue_idx += 1;
        }
    };
    return Game;
}());
exports.Game = Game;
