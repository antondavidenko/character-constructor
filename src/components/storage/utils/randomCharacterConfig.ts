import { CharacterConfig } from "src/components/character/model/CharacterConfig";
import { characterAssetsStorage, CarryItemsCategories, HairCategories, BodyTypeId } from "../CharacterAssetsStorage";

const BodyTypes = [BodyTypeId.HUMAN, BodyTypeId.OGR, BodyTypeId.HOBBIT];
const Hairs = [HairCategories.MALE, HairCategories.FEMALE];

export function randomCharacterConfig(): CharacterConfig {
    const hairsList = characterAssetsStorage.getHairsByCategories(getRandomElement(Hairs));
    const inHandItems = [
        CarryItemsCategories.CLAWS,
        CarryItemsCategories.DAGGERS,
        CarryItemsCategories.HEAVY,
        CarryItemsCategories.RANGED,
        CarryItemsCategories.SHIELDS,
        CarryItemsCategories.SWORDS
    ];

    const leftHandItem = getRandomElement(characterAssetsStorage.getCarryItemsByCategories(getRandomElement(inHandItems)));
    const rightHandItem = getRandomElement(characterAssetsStorage.getCarryItemsByCategories(getRandomElement(inHandItems)));

    return {
        baseFBX: getRandomElement(characterAssetsStorage.getBaseModelList()),
        hairFBX: getRandomElement(hairsList),
        hatFBX: getRandomElement(characterAssetsStorage.getAllHats()),
        headDecor1FBX: getRandomElement(characterAssetsStorage.getAllHeadDecor()),
        headDecor2FBX: 'none',
        hairColor: getRandomElement(characterAssetsStorage.getHairColors()),
        clothesTexture: getRandomElement(characterAssetsStorage.getClothesList()),
        skinColor: getRandomElement(characterAssetsStorage.getSkinColors()),
        eyesTexture: getRandomElement(characterAssetsStorage.getEyes()),
        mouthTexture: getRandomElement(characterAssetsStorage.getMouth()),
        clothesColor1: getRandomElement(characterAssetsStorage.getClothesPalette()),
        clothesColor2: getRandomElement(characterAssetsStorage.getClothesPalette()),
        leftHandSlot: leftHandItem,
        rightHandSlot: rightHandItem,
        backSlot: getRandomElement(characterAssetsStorage.getCarryItemsByCategories(CarryItemsCategories.BACKPACKS)),
        bodyType: characterAssetsStorage.getBodyTypeById(getRandomElement(BodyTypes)),
    }
}

function getRandomElement<T>(items: T[]): T {
    return items[Math.floor(Math.random() * items.length)];
}