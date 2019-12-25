import * as THREE from 'three';
import { Map, TILE_SIZE } from './map';
import { Grid, Coor, Dir, ApplyDir, DirRotation, DirCC } from './jlib';
import { Actor } from './actor';

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();

var light = new THREE.AmbientLight( 0x008888 );
var light2 = new THREE.PointLight( 0xf00f00, 6, 100 );
var geometry = new THREE.PlaneGeometry(1, 1, 1);
var material = new THREE.MeshStandardMaterial({ color: 0x0ffff0 });
var cube = new THREE.Mesh(geometry, material);

var player: Actor = new Actor(new Coor(2, 2), Dir.E);

function render() {
	renderer.render(scene, camera);
}

function update() {
	requestAnimationFrame(update);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  camera.position.x = player.coor.x * TILE_SIZE;
  camera.position.z = player.coor.z * TILE_SIZE;
  camera.rotation.y = DirRotation(player.dir);

  render();
}

function main() {
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  
  scene.add(light);
  light2.position.set( 0, 1, 0 );
  scene.add(light2);
  scene.add(cube);

  var map_walkable = [
    false, false, false, false, false, false,
    false, true, true, true, true, false,
    false, true, true, true, true, false,
    false, true, true, true, true, false,
    false, true, true, true, true, false,
    false, true, true, true, true, false,
    false, true, false, false, true, false,
    false, false, false, false, false,
  ];
  var map = new Map(new Grid(map_walkable, 5));
  for (let i = 0; i < map.meshes.length; i++) {
    console.log("mesh " + i);
    scene.add(map.meshes[i]);
  }

  // Kick off update loop.
  update();
}

document.addEventListener("keydown", onDocumentKeyDown, false);
function onDocumentKeyDown(event: any) {
    var keyCode = event.which;
    if (keyCode == 87) {  // W.
      player.coor = ApplyDir(player.coor, player.dir, 1);
    } else if (keyCode == 65) {  // A.
      player.dir = DirCC(DirCC(DirCC(player.dir)));
    } else if (keyCode == 68) {  // D.
      player.dir = DirCC(player.dir);
    } else if (keyCode == 83) {  // S.
      player.coor = ApplyDir(player.coor, player.dir, -1);
    }
};

main();