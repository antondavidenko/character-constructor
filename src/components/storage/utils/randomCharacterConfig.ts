import { CharacterConfig } from "src/components/character/model/CharacterConfig";
import { characterAssetsStorage as storage, BodyTypeId, ASSET_LIST, COLORS_LIST, SlotType } from "../CharacterAssetsStorage";

const BodyTypes = [BodyTypeId.HUMAN, BodyTypeId.OGR, BodyTypeId.HOBBIT];
const Hairs = [ASSET_LIST.HAIRMALE, ASSET_LIST.HAIRFEMALE];

export function randomCharacterConfig(): CharacterConfig {
    const hairsList = storage.getList(getRandomElement(Hairs));

    const backItems = storage.getItemsCategoriesAllowedToSlotType(SlotType.BACK);
    const inHandItems = storage.getItemsCategoriesAllowedToSlotType(SlotType.HAND);

    return {
        baseFBX: getRandomElement(storage.getList(ASSET_LIST.BASE)),
        hairFBX: getRandomElement(hairsList),
        hatFBX: getRandomElement(storage.getList(ASSET_LIST.HATS)),
        headDecor1FBX: getRandomElement(storage.getList(ASSET_LIST.HEADDECOR)),
        headDecor2FBX: 'none',
        hairColor: getRandomElement(storage.getColors(COLORS_LIST.HAIR)),
        clothesTexture: getRandomElement(storage.getList(ASSET_LIST.CLOTHES)),
        skinColor: getRandomElement(storage.getColors(COLORS_LIST.SKIN)),
        eyesTexture: getRandomElement(storage.getList(ASSET_LIST.EYES)),
        mouthTexture: getRandomElement(storage.getList(ASSET_LIST.MOUTH)),
        clothesColor1: getRandomElement(storage.getColors(COLORS_LIST.CLOTHES)),
        clothesColor2: getRandomElement(storage.getColors(COLORS_LIST.CLOTHES)),
        leftHandSlot: getRandomElement(storage.getItems(getRandomElement(inHandItems))),
        rightHandSlot: getRandomElement(storage.getItems(getRandomElement(inHandItems))),
        backSlot: getRandomElement(storage.getItems(getRandomElement(backItems))),
        bodyType: storage.getBodyTypeById(getRandomElement(BodyTypes)),
    }
}

function getRandomElement<T>(items: T[]): T {
    return items[Math.floor(Math.random() * items.length)];
}