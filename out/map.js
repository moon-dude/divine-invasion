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
var box_geometry = new THREE.BoxGeometry(constants_1.TILE_SIZE, constants_1.TILE_SIZE, constants_1.TILE_SIZE);
var wall_material = new THREE.MeshStandardMaterial({
    color: 0x090011,
    roughness: 0.9
});
var ground_material = new THREE.MeshStandardMaterial({
    color: 0x040008,
    roughness: 0.9
});
function buildMeshes(walkable) {
    var meshes = [];
    for (var x = 0; x < walkable.width; x++) {
        for (var z = 0; z < walkable.depth; z++) {
            // Wall.
            if (walkable.get(x, z) == area_data_1.WALL_CHAR) {
                var box = new THREE.Mesh(box_geometry, wall_material);
                box.position.x = x * constants_1.TILE_SIZE;
                box.position.z = z * constants_1.TILE_SIZE;
                meshes.push(box);
            }
            if (walkable.get(x, z) == area_data_1.STAIRS_DOWN_CHAR || walkable.get(x, z) == area_data_1.STAIRS_UP_CHAR) {
                // Stairs.
                var box = new THREE.Mesh(box_geometry, wall_material);
                box.scale.setScalar(1.4);
                box.position.x = x * constants_1.TILE_SIZE;
                box.position.y = constants_1.TILE_SIZE * 0.35 * (walkable.get(x, z) == area_data_1.STAIRS_DOWN_CHAR ? 1 : -1);
                box.position.z = z * constants_1.TILE_SIZE;
                if (walkable.get(x - 1, z) != area_data_1.WALL_CHAR || walkable.get(x + 1, z) != area_data_1.WALL_CHAR) {
                    box.rotation.z = Math.PI / 4;
                    box.scale.x = 1;
                }
                else {
                    box.rotation.x = Math.PI / 4;
                    box.scale.x = 1;
                }
                meshes.push(box);
            }
            else {
                // Ground.
                var box = new THREE.Mesh(box_geometry, ground_material);
                box.position.x = x * constants_1.TILE_SIZE;
                box.position.y = -constants_1.TILE_SIZE;
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
