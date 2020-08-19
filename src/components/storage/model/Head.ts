import { filesListGenerator } from "../utils/filesListGenerator";

export const HairColors = [
    0xeace56,
    0x000000,
    0x32261d,
    0xff0000,
    0xc0c0c0,
];

export const Eyes = filesListGenerator('eyes', 18, true);
export const Mouth = filesListGenerator('mouth', 12, true);

const HairMaleList = filesListGenerator('HairMale', 18).concat(['none']);
const HairFemaleList = filesListGenerator('HairFemale', 18).concat(['none']);

export enum HairCategories {
    MALE = 'MALE',
    FEMALE = 'FEMALE',
};

export const AllHats = filesListGenerator('Crown ', 4)
    .concat(filesListGenerator('Hat ', 5))
    .concat(filesListGenerator('Headband ', 9))
    .concat(filesListGenerator('Helmet ', 10))
    .concat(['Hood 01'])
    .concat(['none']);

export const AllHeadDecor = ['Antlers']
    .concat(filesListGenerator('Beard ', 4))
    .concat(['Bunny Ears', 'Cat Ears', 'Coif 01', 'Elf Ears 01'])
    .concat(['Glasses 01', 'Halo 01'])
    .concat(filesListGenerator('Horn ', 3))
    .concat(['Jaw 01'])
    .concat(filesListGenerator('Mask ', 3))
    .concat(['none']);

export const HairCollection = new Map([
    [HairCategories.MALE, HairMaleList],
    [HairCategories.FEMALE, HairFemaleList],
]);
