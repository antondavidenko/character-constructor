import { HairCollection, HairCategories, HairColors } from "../character/Hair";
import { Clothes, Eyes, Mouth, SkinColors, BodiesCollectionId, ClothesPalette, BaseModelList } from '../character/Body';
import { Animations } from '../character/Animations';
import { CarryItemsCategories } from "../character/CarryItems";

export const characterConfigOptions = {
    baseFBX: BaseModelList,
    hairColor: HairColors,
    clothesTexture: Clothes,
    clothesColor1: ClothesPalette,
    clothesColor2: ClothesPalette,
    eyesTexture: Eyes,
    mouthTexture: Mouth,
    skinColor: SkinColors,
    bodyTypeId: {
        HOBBIT: BodiesCollectionId.HOBBIT,
        HUMAN: BodiesCollectionId.HUMAN,
        OGR: BodiesCollectionId.OGR,
    },
}


export const HeadSlotsCategories = {
    hair: [
        HairCategories.MALE,
        HairCategories.FEMALE
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

export const AnimationsOptions = Animations;