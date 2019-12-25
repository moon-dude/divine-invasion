import * as THREE from 'three';

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();

var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var cube = new THREE.Mesh(geometry, material);


function render() {
	renderer.render(scene, camera);
}

function update() {
	requestAnimationFrame(update);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  render();
}

function main() {
  console.log("hey");
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  
  scene.add(cube);
  camera.position.z = 5;
  
  // Kick off update loop.
  update();
}

main();