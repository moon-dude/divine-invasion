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
var area_data_1 = require("./data/areas/area_data");
var geometry = new THREE.BoxGeometry(constants_1.TILE_SIZE, constants_1.TILE_SIZE, constants_1.TILE_SIZE);
var material = new THREE.MeshStandardMaterial({
    color: 0x221111,
    roughness: 0.8
});
function buildMeshes(walkable) {
    var meshes = [];
    for (var x = 0; x < walkable.width; x++) {
        for (var z = 0; z < walkable.depth; z++) {
            if (walkable.get(x, z) == area_data_1.WALL_CHAR) {
                var box = new THREE.Mesh(geometry, material);
                box.position.x = x * constants_1.TILE_SIZE;
                box.position.z = z * constants_1.TILE_SIZE;
                meshes.push(box);
            }
        }
    }
    return meshes;
}
var TileMap = /** @class */ (function () {
    function TileMap(walkable) {
        this.walkable = walkable;
        var visited = [];
        var stairs_up = [];
        var stairs_down = [];
        this.player_start = null;
        while (visited.length < this.walkable.count) {
            var x = visited.length % this.walkable.width;
            var z = Math.floor(visited.length / this.walkable.width);
            visited.push(false);
            stairs_up.push(this.walkable.get(x, z) == area_data_1.STAIRS_UP_CHAR);
            stairs_down.push(this.walkable.get(x, z) == area_data_1.STAIRS_DOWN_CHAR);
            if (this.walkable.get(x, z) == area_data_1.PLAYER_START_CHAR) {
                this.player_start = new jlib_1.Coor(x, z);
            }
        }
        this.visited = new jlib_1.Grid(visited, this.walkable.width);
        this.stairs_up = new jlib_1.Grid(stairs_up, this.walkable.width);
        this.stairs_down = new jlib_1.Grid(stairs_down, this.walkable.width);
        this.meshes = buildMeshes(this.walkable);
    }
    return TileMap;
}());
exports.TileMap = TileMap;
