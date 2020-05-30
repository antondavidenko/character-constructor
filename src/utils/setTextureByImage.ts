import * as THREE from 'three';

export function setTextureByImage(object:any, filename:string) {
    const texture = new THREE.TextureLoader().load(`textures/${filename}.png`);
    texture.anisotropy = 32;
    let material:THREE.MeshBasicMaterial = object.material;
    material.map = texture;
    material.color.set(0xffffff);
}