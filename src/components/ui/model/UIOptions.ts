import { characterAssetsStorage, CarryItemsCategories, HairCategories, BaseModelList, ClothesList, ClothesPalette, SkinColors, BodyTypeId } from "../../../components/storage/CharacterAssetsStorage";

export const characterConfigOptions = {
    baseFBX: BaseModelList,
    hairColor: characterAssetsStorage.getHairColors(),
    hatFBX: characterAssetsStorage.getMouth(),
    headDecor1FBX: characterAssetsStorage.getAllHeadDecor(),
    headDecor2FBX: characterAssetsStorage.getAllHeadDecor(),
    clothesTexture: ClothesList,
    clothesColor1: ClothesPalette,
    clothesColor2: ClothesPalette,
    eyesTexture: characterAssetsStorage.getEyes(),
    mouthTexture: characterAssetsStorage.getMouth(),
    skinColor: SkinColors,
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