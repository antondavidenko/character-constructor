import { CharacterConfig } from "./CharacterConfig";
import { HairCollection, HairCategories, HairColors } from "./Hair";
import { Clothes, SkinColors, Eyes, Mouth, BodiesCollectionId, ClothesPalette, BaseModelList } from "./Body";
import {CarryItemsCategories, CarryItemsCollection } from "./CarryItems";

export const defaultCharackterConfig:CharacterConfig = {
    baseFBX: BaseModelList[0],
    hairFBX: HairCollection.get(HairCategories.MALE)[0],
    hairColor: HairColors[2],
    clothesTexture: Clothes[4],
    skinColor: SkinColors[2],
    eyesTexture: Eyes[17],
    mouthTexture: Mouth[0],
    clothesColor1: ClothesPalette[0],
    clothesColor2: ClothesPalette[1],
    leftHandSlot: CarryItemsCollection.get(CarryItemsCategories.SHIELDS)[0],
    rightHandSlot: CarryItemsCollection.get(CarryItemsCategories.SWORDS)[0],
    backSlot: CarryItemsCollection.get(CarryItemsCategories.BACKPACKS)[0],
    bodyTypeId: BodiesCollectionId.HUMAN,
}