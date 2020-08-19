import * as THREE from 'three';
import { BodyType } from 'src/components/character/model/BodyType';

export const ClothesList = [
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

export const BaseModelList = ["BaseNormal", "BaseRobe01", "BaseRobe02"];

export enum BodyTypeId {
    HOBBIT = 'HOBBIT',
    HUMAN = 'HUMAN',
    OGR = 'OGR',
};

export const BodiesCollection: Map<BodyTypeId, BodyType> = new Map([
    [ BodyTypeId.HOBBIT, {
        body: new THREE.Vector3(.01, .01, .01),
        head: new THREE.Vector3(1, 1, 1),
        headOffset: 41,
    }],
    [ BodyTypeId.HUMAN, {
        body: new THREE.Vector3(.01, .015, .01),
        head: new THREE.Vector3(.6, .5, .7),
        headOffset: 28,
    }],
    [ BodyTypeId.OGR, {
        body: new THREE.Vector3(.015, .018, .015),
        head: new THREE.Vector3(.5, .4, .6),
        headOffset: 24,
    }]
]);