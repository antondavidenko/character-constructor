import * as THREE from 'three';

export function getCamera() {
    let camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    let zoom = 2.5;
    camera.position.set(0.8*zoom, 1.4*zoom, 1.0*zoom);
    return camera;
}