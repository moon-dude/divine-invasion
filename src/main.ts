import * as THREE from 'three';
import { Map } from './map';
import { TILE_SIZE } from './constants';
import { Grid, Coor, Dir, ApplyDir, DirRotation, DirCC } from './jlib';
import { Actor } from './actor';

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();

var light = new THREE.AmbientLight( 0x888888 );
var light2 = new THREE.PointLight( 0xf00f00, 6, 100 );
var geometry = new THREE.PlaneGeometry(1, 1, 1);
var material = new THREE.MeshStandardMaterial({ color: 0x0ffff0 });
var cube = new THREE.Mesh(geometry, material);

var player_coor: Coor = new Coor(2, -2);
var player_dir: Dir = Dir.S;

var npcs: Actor[] = [
  new Actor(new Coor(2, 2)) 
];

function render() {
	renderer.render(scene, camera);
}

function update() {
	requestAnimationFrame(update);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  camera.position.x = player_coor.x * TILE_SIZE;
  camera.position.z = player_coor.z * TILE_SIZE;
  camera.rotation.y = DirRotation(player_dir);

  for (let n = 0; n < npcs.length; n++) {
    let npc: Actor = npcs[n];
    npc.mesh.position.x = (npc.coor.x + .2) * TILE_SIZE;
    npc.mesh.position.z = (npc.coor.z + .2) * TILE_SIZE;

    let diff_x = player_coor.x - npc.coor.x;
    let diff_z = player_coor.z - npc.coor.z;
    let angle = Math.atan2(diff_x, diff_z);
    console.log(angle);
    npc.mesh.rotation.y = angle;
  }

  render();
}

function onDocumentKeyDown(event: any) {
  var keyCode = event.which;
  if (keyCode == 87) {  // W.
    player_coor = ApplyDir(player_coor, player_dir, 1);
  } else if (keyCode == 65) {  // A.
    player_dir = DirCC(DirCC(DirCC(player_dir)));
  } else if (keyCode == 68) {  // D.
    player_dir = DirCC(player_dir);
  } else if (keyCode == 83) {  // S.
    player_coor = ApplyDir(player_coor, player_dir, -1);
  }
};

function main() {
  renderer.setSize(window.innerWidth, window.innerHeight - 100);
  document.body.appendChild(renderer.domElement);
  
  scene.add(light);
  light2.position.set( 0, 1, 0 );
  scene.add(light2);
  scene.add(cube);
  let id: string = "";
  for (id in npcs) {
    scene.add(npcs[id].mesh);
  }

  // var map_walkable = [
  //   false, false, true, false, false, false,
  //   false, true, true, true, true, false,
  //   false, false, true, false, true, false,
  //   false, true, true, false, true, false,
  //   false, false, false, false, true, false,
  //   false, true, true, true, true, false,
  //   false, true, false, false, true, false,
  //   false, true, true, true, true, false,
  //   false, false, false, false, false, false,
  // ];
  var map_walkable = [
    false, false, true, false, false, false,
    false, true, true, true, true, false,
    false, true, true, true, true, false,
    false, true, true, true, true, false,
    false, true, true, true, true, false,
    false, true, true, true, true, false,
    false, false, false, false, false, false,
  ];
  var map = new Map(new Grid(map_walkable, 6));
  for (let i = 0; i < map.meshes.length; i++) {
    console.log("mesh " + i);
    scene.add(map.meshes[i]);
  }

  // Kick off update loop.
  update();
}

document.addEventListener("keydown", onDocumentKeyDown, false);


main();