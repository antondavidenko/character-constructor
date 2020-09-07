import * as THREE from 'three';
import { setTextureByImagesList } from '@src/utils/setTextureByImage';
import { GROUND_SCALE } from '../WorldComponent';

export function addGround(scene: THREE.Scene) {
    const geometry: THREE.PlaneGeometry = new THREE.PlaneGeometry(1, 1, 100, 100)
    const material = new THREE.MeshPhongMaterial({ color: 0xffff00 });
    const plane = new THREE.Mesh(geometry, material);
    plane.receiveShadow = true;
    plane.rotation.x = Math.PI / 2;
    plane.scale.set(GROUND_SCALE, GROUND_SCALE, -GROUND_SCALE);
    setTextureByImagesList(plane, getCanvasTesturesList(), '', '', 4096);
    const planeMaterial = plane.material as THREE.MeshStandardMaterial;
    const displacementMap = new THREE.TextureLoader().load("textures/panorama/plane_grass_map.jpg");
    planeMaterial.displacementMap = displacementMap;
    planeMaterial.displacementScale = 0.3;
    plane.position.y = -30.35;
    scene.add(plane);
}

function getCanvasTesturesList(): any[] {
    const result = [];
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            result.push({
                image: "/panorama/ground.jpg",
                x: 920 * i,
                y: 920 * j,
            });
        }
    }
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            result.push({
                mask: "/panorama/plane_grass_map_sand",
                image: "/panorama/sand.jpg",
                x: 900 * i,
                y: 900 * j,
            });
        }
    }
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            result.push({
                mask: "/panorama/plane_grass_map_rock",
                image: "/panorama/rock.jpg",
                x: 600 * i,
                y: 600 * j,
            });
        }
    }
    return result;
}