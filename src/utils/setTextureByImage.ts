import * as THREE from 'three';

export type CanvasTestureItem = {
    image?: string,
    color?: string,
    mask?: string,
    x?: number,
    y?: number,
    width?: number,
    height?: number,
}

export function setTextureByImage(object:any, filename:string, root = "") {
    const texture = new THREE.TextureLoader().load(getURL(filename, root));
    texture.anisotropy = 32;
    replaceMaterial(object, texture);
}

export async function setTextureByImagesList(object:any, canvasTesturesList: CanvasTestureItem[], color:string = "", root = "", size = 512) {
    let canvas = document.createElement('canvas');

    // document.body.appendChild(canvas);

    let context = canvas.getContext('2d');
    canvas.width = canvas.height = size;
    context.fillStyle = color;
    context.fillRect(0, 0, canvas.width, canvas.height);

    let texture = new THREE.Texture(canvas);
    replaceMaterial(object, texture);

    for (const canvasTestureItem of canvasTesturesList) {

        let image;
        let mask;

        if (canvasTestureItem.image && canvasTestureItem.mask) {
            image = await loadTextureImage(getURL(canvasTestureItem.image, root));
            mask = await loadTextureImage(getURL(canvasTestureItem.mask, root));
        } else if (canvasTestureItem.mask) {
            image = await loadTextureImage(getURL(canvasTestureItem.mask, root));
            mask = image;
        } else if (canvasTestureItem.image) {
            image = await loadTextureImage(getURL(canvasTestureItem.image, root));
        }

        const width = canvasTestureItem.width || image.width;
        const height = canvasTestureItem.height || image.height;
        const x = canvasTestureItem.x || 0;
        const y = canvasTestureItem.y || 0;

        if (canvasTestureItem.mask && canvasTestureItem.color) {
            drawColorByMask(canvasTestureItem.color, mask, context, size);
        } else if (canvasTestureItem.mask && canvasTestureItem.image) {
            drawImageByMask(image, mask, context, size, x, y, width, height);
        } else {
            context.drawImage(image, x, y, width, height);
        }
        texture.needsUpdate = true;
    }
}

function getURL(filename:string, root = ""):string {
    const isJPG = filename.indexOf('.jpg') !== -1;
    return isJPG ? `${root}textures/${filename}` : `${root}textures/${filename}.png`;
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

function drawColorByMask(color:string, mask: HTMLImageElement, context: CanvasRenderingContext2D, size = 512) {
    let canvasTmp = document.createElement('canvas');
    let contextTmp = canvasTmp.getContext('2d');
    canvasTmp.width = canvasTmp.height = size;

    contextTmp.globalCompositeOperation = 'copy';
    contextTmp.drawImage(mask, 0, 0, size, size);
    contextTmp.globalCompositeOperation = 'source-in';
    contextTmp.fillStyle = color;
    contextTmp.fillRect(0, 0, canvasTmp.width, canvasTmp.height);

    context.drawImage(canvasTmp, 0, 0);
}

function drawImageByMask(
    image:HTMLImageElement,
    mask: HTMLImageElement,
    context: CanvasRenderingContext2D,
    size = 512,
    x: number,
    y: number,
    width: number,
    height: number,
) {
    let canvasTmp = document.createElement('canvas');
    let contextTmp = canvasTmp.getContext('2d');
    canvasTmp.width = canvasTmp.height = size;

    contextTmp.globalCompositeOperation = 'copy';
    contextTmp.drawImage(mask, 0, 0, size, size);
    contextTmp.globalCompositeOperation = 'source-in';
    contextTmp.drawImage(image, x, y, width, height);

    context.drawImage(canvasTmp, 0, 0);
}