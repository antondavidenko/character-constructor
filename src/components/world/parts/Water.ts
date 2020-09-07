import * as THREE from 'three';
import { setTextureByImage } from '@src/utils/setTextureByImage';
import { GROUND_SCALE } from '../WorldComponent';

const WATER_TEXTURE_REPEAT = 5;

export function addWater(scene: THREE.Scene) {
    const geometry: THREE.PlaneGeometry = new THREE.PlaneGeometry(1, 1, 1, 1)
    const material = new THREE.MeshPhongMaterial({ color: 0xffff00 });
    const plane = new THREE.Mesh(geometry, material);
    plane.receiveShadow = true;
    plane.rotation.x = Math.PI / 2;
    plane.scale.set(GROUND_SCALE, GROUND_SCALE, -GROUND_SCALE);
    setTextureByImage(plane, "/panorama/water.jpg");
    const planeMaterial = plane.material as THREE.MeshPhongMaterial;
    planeMaterial.map.wrapS = planeMaterial.map.wrapT = THREE.RepeatWrapping;
    planeMaterial.map.repeat.set(WATER_TEXTURE_REPEAT, WATER_TEXTURE_REPEAT);
    planeMaterial.transparent = true;
    planeMaterial.opacity = 0.75;
    plane.position.y = -0.5;
    scene.add(plane);
}