"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var player_1 = require("./player");
var log_1 = require("./log");
var game_1 = require("./game");
/// Requests 
var Request;
(function (Request) {
    Request[Request["Tribute"] = 0] = "Tribute";
    Request[Request["Join"] = 1] = "Join";
})(Request = exports.Request || (exports.Request = {}));
// Try request to an AI fighter (from player or another AI).
function try_ai_request(from, to, request) {
    switch (request) {
        case Request.Tribute:
            return Math.random() < (from.exp.count - to.exp.count) / 100;
        case Request.Join:
            return Math.random() < (from.exp.count - to.exp.count) / 100;
    }
}
exports.try_ai_request = try_ai_request;
function request_result(target, request) {
    switch (request) {
        case Request.Tribute:
            // TODO: Other items?
            if (target.name != player_1.PLAYER_NAME) {
                game_1.Game.Instance.player.inventory.add_item("Life Stone");
                log_1.Log.push("Player recieved a Life Stone.");
            }
            else {
                // TODO: All of the edge cases.
                game_1.Game.Instance.player.inventory.destroy_item("Life Stone");
                log_1.Log.push("Player gave away a Life Stone.");
            }
            break;
        case Request.Join:
            // TODO: Copy demon to other side.
            target.recruited = true;
            break;
    }
}
exports.request_result = request_result;
