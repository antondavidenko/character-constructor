import * as THREE from 'three';

export class Illumination {

    constructor(scene:THREE.Scene) {
        const light = new THREE.PointLight(0xffffff, 1);
        light.position.set(5, 5, 5);
        scene.add(light);

        let ambientLight = new THREE.AmbientLight(0xffffff, .5);
        scene.add(ambientLight);
    }

}