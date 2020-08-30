import * as THREE from 'three';

export type CanvasTestureItem = {
    file: string,
    x?: number,
    y?: number,
    colorMask?: string,
}

export function setTextureByImage(object:any, filename:string, root = "") {
    const texture = new THREE.TextureLoader().load(`${root}textures/${filename}.png`);
    texture.anisotropy = 32;
    replaceMaterial(object, texture);
}

export async function setTextureByImagesList(object:any, canvasTesturesList: CanvasTestureItem[], color:string = "", root = "") {
    let canvas = document.createElement('canvas');
    let context = canvas.getContext('2d');
    let size = 512;
    canvas.width = canvas.height = size;
    context.fillStyle = color;
    context.fillRect(0, 0, canvas.width, canvas.height);

    let texture = new THREE.Texture(canvas);
    replaceMaterial(object, texture);

    canvasTesturesList.forEach(async (canvasTestureItem: CanvasTestureItem ) => {
        let image = await loadTextureImage(`${root}textures/${canvasTestureItem.file}.png`);
        const x = canvasTestureItem.x || 0;
        const y = canvasTestureItem.y || 0;
        if (canvasTestureItem.colorMask) {
            drawColorByMask(canvasTestureItem.colorMask, image, context);
        } else {
            context.drawImage(image, x, y);
        }
        texture.needsUpdate = true;
    })
}

function replaceMaterial(object:any, texture: THREE.Texture) {
    let material:THREE.MeshPhongMaterial = new THREE.MeshPhongMaterial({ color: 0xffff00 });
    material.map = texture;
    material.skinning = true;
    material.color.set(0xffffff);
    object.castShadow = true;
    object.receiveShadow = true;
    object.material = material;
}

function loadTextureImage(utl:string):Promise<HTMLImageElement> {
    var loader = new THREE.ImageLoader();
    return new Promise((resolve, reject) => {
        loader.load(utl, (image:HTMLImageElement) => {
            resolve(image);
        });
    });
}

function drawColorByMask(color:string, mask: HTMLImageElement, context: CanvasRenderingContext2D) {
    let canvasTmp = document.createElement('canvas');
    let contextTmp = canvasTmp.getContext('2d');
    let size = 512;
    canvasTmp.width = canvasTmp.height = size;

    contextTmp.globalCompositeOperation = 'copy';
    contextTmp.drawImage(mask,0,0);
    contextTmp.globalCompositeOperation = 'source-in';
    contextTmp.fillStyle = color;
    contextTmp.fillRect(0, 0, canvasTmp.width, canvasTmp.height);

    context.drawImage(canvasTmp, 0, 0);
}