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
var jlib_1 = require("./jlib");
var constants_1 = require("./constants");
var actor_1 = require("./actor");
var battle_data_1 = require("./battle_data");
var stats_1 = require("./stats");
var inventory_1 = require("./inventory");
var log_1 = require("./log");
var actor_card_1 = require("./actor_card");
exports.PLAYER_NAME = "Player";
var Player = /** @class */ (function () {
    function Player() {
        this.coor = new jlib_1.Coor(1, 1);
        this.dir = jlib_1.Dir.S;
        this.body = new THREE.Object3D();
        this.camera = new THREE.PerspectiveCamera(120, 1.2, 0.1, 1300);
        this.light = new THREE.PointLight("#ff9911", 1, 20, 0.5);
        this.movement_locked = false;
        this.inventory = new inventory_1.Inventory();
        this.macca = 0;
        this.body.add(this.camera);
        this.body.add(this.light);
        this.light.position.x = 5;
        var stats = new stats_1.Stats(275, 0);
        stats.ag = 25;
        stats.dx = 30;
        stats.lu = 35;
        stats.ma = 0;
        stats.st = 22;
        this.battle_data = new battle_data_1.BattleData(exports.PLAYER_NAME, battle_data_1.BattleSide.Our, 7, stats, stats_1.Stats.new_mod(), [], null);
        this.recruits = [actor_1.Actor.from_demon("Pixie", battle_data_1.BattleSide.Our)];
        this.inventory.add_item("Life Stone", 5);
        this.player_info_div = document.getElementById("player_info_div");
        this.actor_cards = [new actor_card_1.ActorCard(this.player_info_div, this.battle_data, true)];
        this.add_recruit(this.recruits[0]);
    }
    Player.prototype.update = function () {
        var target_x = this.coor.x * constants_1.TILE_SIZE;
        var target_z = this.coor.z * constants_1.TILE_SIZE;
        this.body.position.x += (target_x - this.body.position.x) * 0.2;
        this.body.position.z += (target_z - this.body.position.z) * 0.2;
        var target_rotation = jlib_1.DirRotation(this.dir);
        while (target_rotation < this.body.rotation.y - Math.PI) {
            target_rotation += Math.PI * 2;
        }
        while (target_rotation > this.body.rotation.y + Math.PI + 0.01) {
            target_rotation -= Math.PI * 2;
        }
        this.body.rotation.y += (target_rotation - this.body.rotation.y) * 0.2;
        this.actor_cards[0].update(this.battle_data);
        for (var i = 1; i < this.actor_cards.length; i++) {
            this.actor_cards[i].update(this.recruits[i - 1].battle_data);
        }
    };
    /// Returns true on a successful move.
    Player.prototype.move = function (steps, map, npcs) {
        if (this.movement_locked) {
            return false;
        }
        var move_coor = jlib_1.ApplyDir(this.coor, this.dir, steps);
        if (map.walkable.get(move_coor.x, move_coor.z) == "/") {
            return false;
        }
        if (map.walkable.get(move_coor.x, move_coor.z) == "+") {
            this.battle_data.mod_stats.hp = 0;
            this.battle_data.mod_stats.mp = 0;
            for (var i = 0; i < this.recruits.length; i++) {
                this.recruits[i].battle_data.mod_stats.hp = 0;
                this.recruits[i].battle_data.mod_stats.mp = 0;
            }
        }
        // Reorient towards npcs if going backwards.
        if (steps < 0) {
            for (var n = 0; n < npcs.length; n++) {
                if (move_coor.equals(npcs[n].coor)) {
                    this.dir = jlib_1.DirCW(jlib_1.DirCW(this.dir));
                    break;
                }
            }
        }
        this.coor = move_coor;
        return true;
    };
    /// Returns true on a successful turn.
    Player.prototype.turn = function (cw) {
        if (this.movement_locked) {
            return false;
        }
        if (cw) {
            this.dir = jlib_1.DirCW(this.dir);
        }
        else {
            this.dir = jlib_1.DirCW(jlib_1.DirCW(jlib_1.DirCW(this.dir)));
        }
        return true;
    };
    Player.prototype.party_gain_loot = function (from_actors) {
        var total_exp = 0;
        var total_macca = 0;
        for (var i = 0; i < from_actors.length; i++) {
            total_exp += from_actors[i].battle_data.get_level();
            total_macca += from_actors[i].battle_data.get_level();
            if (from_actors[i].battle_data.recruited) {
                this.add_recruit(from_actors[i]);
            }
        }
        var level_delta = this.battle_data.exp.add(total_exp);
        for (var i = 0; i < this.recruits.length; i++) {
            var level_delta_1 = this.recruits[i].battle_data.exp.add(total_exp);
        }
        this.macca += total_macca;
        log_1.Log.push("Gained " + total_exp + " experience.");
        log_1.Log.push("Gained " + total_macca + " macca.");
    };
    Player.prototype.add_recruit = function (actor) {
        actor.battle_data.side = battle_data_1.BattleSide.Our;
        this.recruits.push(actor);
        this.actor_cards.push(new actor_card_1.ActorCard(this.player_info_div, actor.battle_data, true));
    };
    Player.prototype.get_last_battle_data_clicked = function () {
        for (var i = 0; i < this.actor_cards.length; i++) {
            if (this.actor_cards[i].was_clicked()) {
                if (i == 0) {
                    return this.battle_data;
                }
                else {
                    return this.recruits[i - 1].battle_data;
                }
            }
        }
        return null;
    };
    return Player;
}());
exports.Player = Player;
