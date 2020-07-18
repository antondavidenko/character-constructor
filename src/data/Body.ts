import * as THREE from 'three';

export const Clothes = [
    'manhattan',
    'archer',
    'barbarian',
    'barbarian2',
    'casual',
    'medusa',
    'vampirre',
    'warlock',
    'warlock2',
    'knight',
];

export const SkinColors = [
    "#e9ae78",
    "#a2642d",
    "#6a401a",
    "#8b9826",
    "#474463",
];

export const Faces = [
    'manhattan',
    'cyclop',
    'evil',
    'medusa',
    'poker',
    'smile',
    'vampire',
    'vampire2',
];

export enum BodiesCollectionId {
    HOBBIT = 'HOBBIT',
    HUMAN = 'HUMAN',
    OGR = 'OGR',
};

export const FaceTextureX = 380;
export const FaceTextureY = 143;

export const BodiesCollection = {
    HOBBIT: {
        body: new THREE.Vector3(.01, .01, .01),
        head: new THREE.Vector3(1, 1, 1),
        headOffset: 41,
    },
    HUMAN: {
        body: new THREE.Vector3(.01, .015, .01),
        head: new THREE.Vector3(.6, .5, .7),
        headOffset: 28,
    },
    OGR: {
        body: new THREE.Vector3(.015, .018, .015),
        head: new THREE.Vector3(.5, .4, .6),
        headOffset: 24,
    }
}

export type BodyType = {
    body: THREE.Vector3,
    head: THREE.Vector3,
    headOffset: number,
}