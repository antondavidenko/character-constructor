import * as THREE from 'three';

const BOX_SCALE = 500;
const BOX_OFFSET_Y = 25;

export function addSkyBox(scene: THREE.Scene) {
    const geometry = new THREE.BoxBufferGeometry(1, 1, 1);
    const materials = getSkyBoxMaterials();
    const skyBox = new THREE.Mesh(geometry, materials);
    skyBox.geometry.scale(BOX_SCALE, BOX_SCALE, -BOX_SCALE);
    skyBox.position.y += BOX_OFFSET_Y;
    skyBox.rotation.y = Math.PI;
    scene.add(skyBox);
}

function getSkyBoxMaterials() {
    const BOX_SIDES = 6;
    return Array.from(Array(BOX_SIDES), (x, index) =>
        new THREE.MeshBasicMaterial({ map: getTextureById("./textures/panorama/", index) }
    ));
}

function getTextureById(baseUrl: string, id: number) {
    return new THREE.TextureLoader().load(`${baseUrl}/${id + 1}.jpg`);
}