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
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
var light = new THREE.AmbientLight(0x008888);
var light2 = new THREE.PointLight(0xf00f00, 6, 100);
var geometry = new THREE.PlaneGeometry(1, 1, 1);
var material = new THREE.MeshStandardMaterial({ color: 0x0ffff0 });
var cube = new THREE.Mesh(geometry, material);
var player_pos = [1, 1];
var player_rotation = 0;
function render() {
    renderer.render(scene, camera);
}
function update() {
    requestAnimationFrame(update);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    camera.position.x = player_pos[0] * map_1.TILE_SIZE;
    camera.position.z = player_pos[0] * map_1.TILE_SIZE;
    camera.rotation.y = player_rotation;
    render();
}
function main() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    scene.add(light);
    light2.position.set(0, 1, 0);
    scene.add(light2);
    scene.add(cube);
    var map_walkable = [
        false, false, false, false, false,
        false, true, true, true, false,
        false, true, false, false, false,
        false, false, false, false, false,
    ];
    var map = new map_1.Map(new jlib_1.Grid(map_walkable, 5));
    for (var i = 0; i < map.meshes.length; i++) {
        console.log("mesh " + i);
        scene.add(map.meshes[i]);
    }
    var turn_btn = document.getElementById("turn");
    if (turn_btn != null) {
        turn_btn.onclick = function () {
            player_rotation += Math.PI / 4;
        };
    }
    // Kick off update loop.
    update();
}
main();
