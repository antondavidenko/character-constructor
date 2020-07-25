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

export const ClothesPalette = [
    "#55861d",
    "#221c12",
    "#393536",
    "#002630",
    "#119dc6",
    "#0070cf",
    '#858482',
    '#975427',
    '#ddd8d8',
    '#a02d1f',
    '#560076',
    '#c2de9a',
];

export const Eyes = [
    'eyes1',
    'eyes2',
    'eyes3',
    'eyes4',
    'eyes5',
    'eyes6',
    'eyes7',
    'eyes8',
    'eyes9',
    'eyes10',
    'eyes11',
    'eyes12',
    'eyes13',
    'eyes14',
    'eyes15',
    'eyes16',
    'eyes17',
    'eyes18',
    'none',
];

export const Mouth = [
    'mouth1',
    'mouth2',
    'mouth3',
    'mouth4',
    'mouth5',
    'mouth6',
    'mouth7',
    'mouth8',
    'mouth9',
    'mouth10',
    'mouth11',
    'mouth12',
    'none',
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