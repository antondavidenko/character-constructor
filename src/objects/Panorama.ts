import * as THREE from 'three';
import { setTextureByImage } from '../utils/setTextureByImage';

const BOX_SCALE = 500;
const BOX_OFFSET_Y = 25;
const GROUND_SCALE = 25;

export class Panorama {

    constructor(private scene: THREE.Scene) {
        this.addSkyBox();
        this.addGround();
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
        const geometry = new THREE.PlaneBufferGeometry(1, 1, 1);
        const material = new THREE.MeshStandardMaterial({ color: 0xffff00 });
        const plane = new THREE.Mesh(geometry, material);
        plane.receiveShadow = true;
        plane.rotation.x = Math.PI / 2;
        plane.scale.set(GROUND_SCALE, GROUND_SCALE, -GROUND_SCALE);
        setTextureByImage(plane, "panorama/ground.jpg");
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