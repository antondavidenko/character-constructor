import { filesListGenerator } from "../../storage/utils/filesListGenerator";

const SwordsList = filesListGenerator('Sword', 10, true);
const ShieldsList = filesListGenerator('Shield', 10, true);
const BackpackList = ['Sack01', 'Quiver01', 'none'];

const RangedWeapons = filesListGenerator('Crossbow', 3)
    .concat(filesListGenerator('Longbow', 3))
    .concat(['none']);

const HeavyWeapons = filesListGenerator('Spear', 3)
    .concat(filesListGenerator('Axe', 3))
    .concat(filesListGenerator('Club', 3))
    .concat(['none']);

const DaggersWeapons = filesListGenerator('Dagger', 3)
    .concat(['none']);

const ClawsWeapons = filesListGenerator('Claw', 3)
    .concat(['none']);

export enum CarryItemsCategories {
    BACKPACKS = 'BACKPACKS',
    SHIELDS = 'SHIELDS',
    SWORDS = 'SWORDS',
    RANGED = 'RANGED',
    HEAVY = 'HEAVY',
    DAGGERS = 'DAGGERS',
    CLAWS = 'CLAWS',
};

export const CarryItemsCollection = new Map([
    [CarryItemsCategories.BACKPACKS, BackpackList],
    [CarryItemsCategories.SHIELDS, ShieldsList],
    [CarryItemsCategories.SWORDS, SwordsList],
    [CarryItemsCategories.RANGED, RangedWeapons],
    [CarryItemsCategories.HEAVY, HeavyWeapons],
    [CarryItemsCategories.DAGGERS, DaggersWeapons],
    [CarryItemsCategories.CLAWS, ClawsWeapons],
]);