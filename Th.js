// Importando a biblioteca Three.js
import * as THREE from "three";

// Carregando o modelo 3D
const model = new THREE.Object3D();
model.add(new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshPhongMaterial()));

// Renderizando o modelo 3D
const scene = new THREE.Scene();
scene.add(model);
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.querySelector("#canvas").appendChild(renderer.domElement);

// Atualizando a cena
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

// Iniciando a animação
animate();
