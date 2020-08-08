import { filesListGenerator } from "../FilesListGenerator";

export const HairColors = [
    0xeace56,
    0x000000,
    0x32261d,
    0xff0000,
    0xc0c0c0,
];

const HairMaleList = filesListGenerator('HairMale', 18);
const HairFemaleList = filesListGenerator('HairFemale', 18);

export enum HairCategories {
    MALE = 'MALE',
    FEMALE = 'FEMALE',
};

export const HairCollection = new Map([
    [HairCategories.MALE, HairMaleList],
    [HairCategories.FEMALE, HairFemaleList],
]);
