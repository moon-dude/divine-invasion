"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var player_1 = require("./player");
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
                player_1.Player.Instance.inventory.add_item("Life Stone");
            }
            else {
                // TODO: All of the edge cases.
                player_1.Player.Instance.inventory.destroy_item("Life Stone");
            }
            break;
        case Request.Join:
            // TODO: Copy demon to other side.
            break;
    }
}
exports.request_result = request_result;