import * as THREE from 'three';
import { GROUND_SCALE } from '../WorldComponent';
import { getShaderMaterial } from '@src/utils/shaderMaterials/shaderMaterialLava';

export function addLava(scene: THREE.Scene) {
    const geometry: THREE.PlaneGeometry = new THREE.PlaneGeometry(1, 1, 1, 1)
    const material = new THREE.MeshPhongMaterial({ color: 0xffff00 });
    const plane = new THREE.Mesh(geometry, getShaderMaterial('LAVAL'));
    plane.receiveShadow = true;
    plane.rotation.x = Math.PI / 2;
    plane.scale.set(GROUND_SCALE, GROUND_SCALE, -GROUND_SCALE);
    plane.position.y = -0.2;
    scene.add(plane);
}