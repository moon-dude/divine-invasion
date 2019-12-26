import * as THREE from 'three';
import { Map } from './map';
import { TILE_SIZE } from './constants';
import { Grid, Coor, Dir, ApplyDir, DirRotation, DirCC } from './jlib';
import { Actor } from './actor';

const ACTOR_OFFSET_FRONT = .6;
const ACTOR_OFFSET_SIDE = .4;

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 105, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();

var light = new THREE.AmbientLight( 0x888888 );
var light2 = new THREE.PointLight( 0xf00f00, 6, 100 );
var geometry = new THREE.PlaneGeometry(1, 1, 1);
var material = new THREE.MeshStandardMaterial({ color: 0x0ffff0 });
var cube = new THREE.Mesh(geometry, material);

var player_coor: Coor = new Coor(2, -2);
var player_dir: Dir = Dir.S;

var npcs: Actor[] = [
  new Actor("John", new Coor(2, 2), "\"Hey have you seen my Ukobach?\"<br /><button>Yes</button><button>No</button>") 
];

var dialogue_div = document.getElementById("dialogue_div");

function render() {
	renderer.render(scene, camera);
}

function update() {
  if (!dialogue_div) {
    return;
  }
	requestAnimationFrame(update);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  camera.position.x += (player_coor.x * TILE_SIZE - camera.position.x) * 0.2;
  camera.position.z += (player_coor.z * TILE_SIZE - camera.position.z) * 0.2;
  let target_rotation = DirRotation(player_dir);
  while (target_rotation < camera.rotation.y - Math.PI) {
    target_rotation += Math.PI * 2;
  }
  while (target_rotation > camera.rotation.y + Math.PI + 0.01) {
    target_rotation -= Math.PI * 2;
  }
  camera.rotation.y += (target_rotation - camera.rotation.y) * 0.2;

  dialogue_div.innerText = "";
  for (let n = 0; n < npcs.length; n++) {
    let npc: Actor = npcs[n];
    let diff_x = player_coor.x - npc.coor.x;
    let diff_z = player_coor.z - npc.coor.z;
    console.log("diff x: " + diff_x + ", z: " + diff_z);
    let delta_x = Math.abs(diff_x) < .1 ? 
      (player_dir == Dir.E ? ACTOR_OFFSET_FRONT : -ACTOR_OFFSET_FRONT) : 
      (diff_x < 0 ? ACTOR_OFFSET_SIDE : -ACTOR_OFFSET_SIDE);
    let delta_z = Math.abs(diff_z) < .1 ? 
      (player_dir == Dir.S ? ACTOR_OFFSET_FRONT : -ACTOR_OFFSET_FRONT) : 
      (diff_z < 0 ? ACTOR_OFFSET_SIDE : -ACTOR_OFFSET_SIDE);
    npc.mesh.position.x = (npc.coor.x + delta_x) * TILE_SIZE;
    npc.mesh.position.z = (npc.coor.z + delta_z) * TILE_SIZE;
    
    npc.mesh.rotation.y = camera.rotation.y;

    if (player_coor.x == npc.coor.x && player_coor.z == npc.coor.z) {
      dialogue_div.innerHTML = npc.dialogue();
    }
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
    scene.add(map.meshes[i]);
  }

  // Kick off update loop.
  update();
}

document.addEventListener("keydown", onDocumentKeyDown, false);


main();