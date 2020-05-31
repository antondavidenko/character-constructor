import * as THREE from 'three';

export enum Clothes {
    DR_MANHATTAN = 'body/clothes/manhattan',
    ARCHER = 'body/clothes/archer',
    BARBARIAN = 'body/clothes/barbarian',
    BARBARIAN2 = 'body/clothes/barbarian2',
    CASUAL = 'body/clothes/casual',
    MEDUSA = 'body/clothes/medusa',
    VAMPIRRE = 'body/clothes/vampirre',
    WARLOCK = 'body/clothes/warlock',
    WARLOCK2 = 'body/clothes/warlock2',
    KNIGHT = 'body/clothes/knight',
};

export enum SkinColors {
    WHITE = "#e9ae78",
    TAN = "#a2642d",
    BLACK = "#6a401a",
    GREEN = "#8b9826",
    BLUE = "#474463",
};

export enum Faces {
    DR_MANHATTAN = 'body/faces/manhattan',
    CYCLOP = 'body/faces/cyclop',
    EVIL = 'body/faces/evil',
    MEDUSA = 'body/faces/medusa',
    POKER = 'body/faces/poker',
    SMILE = 'body/faces/smile',
    VAMPIRE = 'body/faces/vampire',
    VAMPIRE2 = 'body/faces/vampire2',
};

export enum BodiesCollectionId {
    HOBBIT = 'HOBBIT',
    HUMAN = 'HUMAN',
    OGR = 'OGR',
};

export const FaceTextureX = 380;
export const FaceTextureY = 143;

export const BodiesCollection = {
    HOBBIT: {
        main: new THREE.Vector3(.01, .01, .01),
        head: new THREE.Vector3(1, 1, 1),
        headOffset: 41,
    },
    HUMAN: {
        main: new THREE.Vector3(.01, .015, .01),
        head: new THREE.Vector3(.6, .5, .7),
        headOffset: 28,
    },
    OGR: {
        main: new THREE.Vector3(.015, .018, .015),
        head: new THREE.Vector3(.5, .4, .6),
        headOffset: 24,
    }
}

export type BodyType = {
    main: THREE.Vector3,
    head: THREE.Vector3,
    headOffset: number,
}