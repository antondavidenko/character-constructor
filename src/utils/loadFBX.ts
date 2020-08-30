import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { Group } from 'three';

export function loadFBX(filename:string, root = ""):any {
    return new Promise((resolve, reject) => {
        const fbxLoader: FBXLoader = new FBXLoader();
        fbxLoader.load(
            root + filename,
            (object:Group) => {
                resolve(object);
            },
            (xhr) => {
                //console.log((xhr.loaded / xhr.total * 100) + '% loaded')
            },
            (error) => {
                console.log(error);
                reject(error);
            }
        );

    });
}