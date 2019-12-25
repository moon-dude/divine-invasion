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
var map_1 = require("./map");
var jlib_1 = require("./jlib");
var actor_1 = require("./actor");
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
var light = new THREE.AmbientLight(0x008888);
var light2 = new THREE.PointLight(0xf00f00, 6, 100);
var geometry = new THREE.PlaneGeometry(1, 1, 1);
var material = new THREE.MeshStandardMaterial({ color: 0x0ffff0 });
var cube = new THREE.Mesh(geometry, material);
var player = new actor_1.Actor(new jlib_1.Coor(2, 2), jlib_1.Dir.E);
function render() {
    renderer.render(scene, camera);
}
function update() {
    requestAnimationFrame(update);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    camera.position.x = player.coor.x * map_1.TILE_SIZE;
    camera.position.z = player.coor.z * map_1.TILE_SIZE;
    camera.rotation.y = jlib_1.DirRotation(player.dir);
    render();
}
function onDocumentKeyDown(event) {
    var keyCode = event.which;
    if (keyCode == 87) { // W.
        player.coor = jlib_1.ApplyDir(player.coor, player.dir, 1);
    }
    else if (keyCode == 65) { // A.
        player.dir = jlib_1.DirCC(jlib_1.DirCC(jlib_1.DirCC(player.dir)));
    }
    else if (keyCode == 68) { // D.
        player.dir = jlib_1.DirCC(player.dir);
    }
    else if (keyCode == 83) { // S.
        player.coor = jlib_1.ApplyDir(player.coor, player.dir, -1);
    }
}
;
function main() {
    renderer.setSize(window.innerWidth, window.innerHeight - 100);
    document.body.appendChild(renderer.domElement);
    scene.add(light);
    light2.position.set(0, 1, 0);
    scene.add(light2);
    scene.add(cube);
    var map_walkable = [
        false, false, true, false, false, false,
        false, true, true, true, true, false,
        false, false, true, false, true, false,
        false, true, true, false, true, false,
        false, false, false, false, true, false,
        false, true, true, true, true, false,
        false, true, false, false, true, false,
        false, true, true, true, true, false,
        false, false, false, false, false, false,
    ];
    var map = new map_1.Map(new jlib_1.Grid(map_walkable, 6));
    for (var i = 0; i < map.meshes.length; i++) {
        console.log("mesh " + i);
        scene.add(map.meshes[i]);
    }
    // Kick off update loop.
    update();
}
document.addEventListener("keydown", onDocumentKeyDown, false);
main();
