import * as THREE from 'three';

export type canvasTestureItem = {
    file: string,
    x?: number,
    y?: number,
}

export function setTextureByImage(object:any, filename:string) {
    const texture = new THREE.TextureLoader().load(`textures/${filename}.png`);
    texture.anisotropy = 32;
    let material:THREE.MeshBasicMaterial = object.material;
    material.map = texture;
    material.color.set(0xffffff);
}

export async function setTextureByImagesList(object:any, filenames:canvasTestureItem[], color:string = "") {
    let canvas = document.createElement('canvas');
    let context = canvas.getContext('2d');
    let size = 512;
    canvas.width = canvas.height = size;
    context.fillStyle = color;
    context.fillRect(0, 0, canvas.width, canvas.height);

    let material:THREE.MeshBasicMaterial = object.material;
    let texture = new THREE.Texture(canvas);
    material.map = texture;

    for (let i in filenames) {
        let image = await loadTextureImage(`textures/${filenames[i].file}.png`);
        let x = filenames[i].x || 0;
        let y = filenames[i].y || 0;
        context.drawImage( image, x, y );
        texture.needsUpdate = true;
    }
}

function loadTextureImage(utl:string):Promise<HTMLImageElement> {
    var loader = new THREE.ImageLoader();
    return new Promise((resolve, reject) => {
        loader.load(utl, (image:HTMLImageElement) => {
            resolve(image);
        });
    });
}