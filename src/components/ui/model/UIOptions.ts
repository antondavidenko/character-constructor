import { characterAssetsStorage, CarryItemsCategories, HairCategories, BodyTypeId } from "../../../components/storage/CharacterAssetsStorage";

export const characterConfigOptions = {
    baseFBX: characterAssetsStorage.getBaseModelList(),
    hairColor: characterAssetsStorage.getHairColors(),
    hatFBX: characterAssetsStorage.getAllHats(),
    headDecor1FBX: characterAssetsStorage.getAllHeadDecor(),
    headDecor2FBX: characterAssetsStorage.getAllHeadDecor(),
    clothesTexture: characterAssetsStorage.getClothesList(),
    clothesColor1: characterAssetsStorage.getClothesPalette(),
    clothesColor2: characterAssetsStorage.getClothesPalette(),
    eyesTexture: characterAssetsStorage.getEyes(),
    mouthTexture: characterAssetsStorage.getMouth(),
    skinColor: characterAssetsStorage.getSkinColors(),
    bodyTypeId: {
        HOBBIT: BodyTypeId.HOBBIT,
        HUMAN: BodyTypeId.HUMAN,
        OGR: BodyTypeId.OGR,
    },
}


export const HeadSlotsCategories = {
    hair: [
        HairCategories.MALE,
        HairCategories.FEMALE,
    ],
}

export const SlotsCategories = {
    rightHandSlot: [
        CarryItemsCategories.SHIELDS,
        CarryItemsCategories.SWORDS,
        CarryItemsCategories.RANGED,
        CarryItemsCategories.HEAVY,
        CarryItemsCategories.CLAWS,
        CarryItemsCategories.DAGGERS,
    ],
    leftHandSlot: [
        CarryItemsCategories.SHIELDS,
        CarryItemsCategories.SWORDS,
        CarryItemsCategories.RANGED,
        CarryItemsCategories.HEAVY,
        CarryItemsCategories.CLAWS,
        CarryItemsCategories.DAGGERS,
    ],
    backSlot: [
        CarryItemsCategories.BACKPACKS,
    ]
}

export const AnimationsOptions = characterAssetsStorage.getAnimationsList();