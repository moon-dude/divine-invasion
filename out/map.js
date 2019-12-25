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
exports.TILE_SIZE = 4;
var geometry = new THREE.BoxGeometry(exports.TILE_SIZE, exports.TILE_SIZE, exports.TILE_SIZE);
var material = new THREE.MeshStandardMaterial({ color: 0x0ffff0 });
function buildMeshes(walkable) {
    var meshes = [];
    for (var x = 0; x < walkable.width; x++) {
        for (var z = 0; z < walkable.depth; z++) {
            if (!walkable.get(x - 1, z)) {
                var box = new THREE.Mesh(geometry, material);
                box.position.x = x * exports.TILE_SIZE;
                box.position.z = z * exports.TILE_SIZE;
                meshes.push(box);
            }
        }
    }
    return meshes;
}
var Map = /** @class */ (function () {
    function Map(walkable) {
        this.walkable = walkable;
        var visited = [];
        while (visited.length < this.walkable.count) {
            visited.push(false);
        }
        this.visited = new jlib_1.Grid(visited, this.walkable.width);
        this.meshes = buildMeshes(this.walkable);
    }
    return Map;
}());
exports.Map = Map;
