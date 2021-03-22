import { characterAssetsStorage, BodyTypeId, ASSET_LIST, COLORS_LIST, SlotType } from "@antondavidenko/modular-character-threejs/dist/components/storage/CharacterAssetsStorage";

export const characterConfigOptions = {
    baseFBX: ASSET_LIST.BASE,
    hairColor: COLORS_LIST.HAIR,
    hatFBX: ASSET_LIST.HATS,
    headDecor1FBX: ASSET_LIST.HEADDECOR,
    headDecor2FBX: ASSET_LIST.HEADDECOR,
    clothesTexture: ASSET_LIST.CLOTHES,
    clothesColor1: COLORS_LIST.CLOTHES,
    clothesColor2: COLORS_LIST.CLOTHES,
    eyesTexture: ASSET_LIST.EYES,
    mouthTexture: ASSET_LIST.MOUTH,
    skinColor: COLORS_LIST.SKIN,
    bodyTypeId: {
        HOBBIT: BodyTypeId.HOBBIT,
        HUMAN: BodyTypeId.HUMAN,
        OGR: BodyTypeId.OGR,
    },
}


export const HeadSlotsCategories = {
    hair: [
        ASSET_LIST.HAIRMALE,
        ASSET_LIST.HAIRFEMALE,
    ],
}

export const SlotsCategories = {
    rightHandSlot: SlotType.HAND,
    leftHandSlot: SlotType.HAND,
    backSlot: SlotType.BACK,
}

export function getAnimationsOptions(): string[] {
    return characterAssetsStorage.getList(ASSET_LIST.ANIMATIONS);
}