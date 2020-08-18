import { CharacterConfig } from "./CharacterConfig";
import { HairCollection, HairCategories, HairColors, Eyes, Mouth, AllHats } from "./Head";
import { Clothes, SkinColors, BodiesCollectionId, ClothesPalette, BaseModelList } from "./Body";
import { CarryItemsCategories, CarryItemsCollection } from "./CarryItems";

export const defaultCharackterConfig:CharacterConfig = {
    baseFBX: BaseModelList[0],
    hairFBX: HairCollection.get(HairCategories.MALE)[0],
    hatFBX: null,
    headDecor1FBX: null,
    headDecor2FBX: null,
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