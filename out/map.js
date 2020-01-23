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
    color: 0x330022,
    roughness: 0.8
});
var ground_material = new THREE.MeshStandardMaterial({
    color: 0x110011,
    roughness: 0.7
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
    function TileMap(string_grid) {
        this.string_grid = string_grid;
        var visited = [];
        var walkable = [];
        var stairs_up = [];
        var stairs_down = [];
        var encounter = [];
        this.player_start = null;
        while (visited.length < this.string_grid.count) {
            var x = visited.length % this.string_grid.width;
            var z = Math.floor(visited.length / this.string_grid.width);
            visited.push(false);
            stairs_up.push(this.string_grid.get(x, z) == area_data_1.STAIRS_UP_CHAR);
            stairs_down.push(this.string_grid.get(x, z) == area_data_1.STAIRS_DOWN_CHAR);
            if (this.string_grid.get(x, z) == area_data_1.PLAYER_START_CHAR) {
                this.player_start = new jlib_1.Coor(x, z);
            }
            encounter.push(this.string_grid.get(x, z) == area_data_1.ENCOUNTER_CHAR);
        }
        this.visited = new jlib_1.Grid(visited, this.string_grid.width);
        this.stairs_up = new jlib_1.Grid(stairs_up, this.string_grid.width);
        this.stairs_down = new jlib_1.Grid(stairs_down, this.string_grid.width);
        this.encounter = new jlib_1.Grid(encounter, this.string_grid.width);
        this.meshes = buildMeshes(this.string_grid);
    }
    TileMap.prototype.is_walkable = function (x, z) {
        return this.string_grid.get(x, z) != area_data_1.WALL_CHAR;
    };
    return TileMap;
}());
exports.TileMap = TileMap;
