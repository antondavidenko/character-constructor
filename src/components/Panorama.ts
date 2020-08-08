import * as THREE from 'three';
import { setTextureByImage } from '../utils/setTextureByImage';
import { TextureLoader } from 'three';

const BOX_SCALE = 500;
const BOX_OFFSET_Y = 25;
const GROUND_SCALE = 50;
const GROUND_TEXTURE_REPEAT = 5;

export class Panorama {

    constructor(private scene: THREE.Scene) {
        this.addSkyBox();
        this.addGround();
        this.addWater();
    }

    private addSkyBox() {
        const geometry = new THREE.BoxBufferGeometry(1, 1, 1);
        const materials = this.getSkyBoxMaterials();
        const skyBox = new THREE.Mesh(geometry, materials);
        skyBox.geometry.scale(BOX_SCALE, BOX_SCALE, -BOX_SCALE);
        skyBox.position.y += BOX_OFFSET_Y;
        skyBox.rotation.y = Math.PI;
        this.scene.add(skyBox);
    }

    private addGround() {
        const geometry: THREE.PlaneGeometry = new THREE.PlaneGeometry(1, 1, 100, 100)
        const material = new THREE.MeshPhongMaterial({ color: 0xffff00 });
        const plane = new THREE.Mesh(geometry, material);
        plane.receiveShadow = true;
        plane.rotation.x = Math.PI / 2;
        plane.scale.set(GROUND_SCALE, GROUND_SCALE, -GROUND_SCALE);
        setTextureByImage(plane, "/panorama/ground.jpg");
        const planeMaterial = plane.material as THREE.MeshStandardMaterial;
        const displacementMap = new THREE.TextureLoader().load("textures/panorama/plane_grass_map.jpg");
        planeMaterial.displacementMap = displacementMap;
        planeMaterial.displacementScale = 0.1;
        plane.position.y = -2.5;
        this.scene.add(plane);
    }

    private addWater() {
        const geometry: THREE.PlaneGeometry = new THREE.PlaneGeometry(1, 1, 1, 1)
        const material = new THREE.MeshPhongMaterial({ color: 0xffff00 });
        const plane = new THREE.Mesh(geometry, material);
        plane.receiveShadow = true;
        plane.rotation.x = Math.PI / 2;
        plane.scale.set(GROUND_SCALE, GROUND_SCALE, -GROUND_SCALE);
        setTextureByImage(plane, "/panorama/water.jpg");
        const planeMaterial = plane.material as THREE.MeshPhongMaterial;
        planeMaterial.map.wrapS = planeMaterial.map.wrapT = THREE.RepeatWrapping;
        planeMaterial.map.repeat.set(GROUND_TEXTURE_REPEAT, GROUND_TEXTURE_REPEAT);
        planeMaterial.transparent = true;
        planeMaterial.opacity = 0.75;
        plane.position.y = -0.2;
        this.scene.add(plane);
    }

    private getSkyBoxMaterials() {
        const BOX_SIDES = 6;
        return Array.from(Array(BOX_SIDES), (x, index) =>
            new THREE.MeshBasicMaterial({ map: this.getTextureById("./textures/panorama/", index) }
        ));
    }

    private getTextureById(baseUrl: string, id: number) {
        return new THREE.TextureLoader().load(`${baseUrl}/${id + 1}.jpg`);
    }

}