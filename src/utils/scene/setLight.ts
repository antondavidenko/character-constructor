import * as THREE from 'three';

export function setLight(scene: THREE.Scene): void {
    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    setupShadow(light);
    scene.add(light);

    let ambientLight = new THREE.AmbientLight(0xffffff, .5);
    scene.add(ambientLight);
}

function setupShadow(light: THREE.PointLight) {
    light.castShadow = true;
    light.shadow.mapSize.width = 512;
    light.shadow.mapSize.height = 512;
    light.shadow.camera.near = 0.5;
    light.shadow.camera.far = 500;
}