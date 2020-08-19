import { CharacterConfig } from "../../character/model/CharacterConfig";
import { characterAssetsStorage, CarryItemsCategories, HairCategories, ClothesList, ClothesPalette, SkinColors, BaseModelList, BodyTypeId } from "../CharacterAssetsStorage";

export const defaultCharacterConfig: CharacterConfig = {
    baseFBX: BaseModelList[0],
    hairFBX: characterAssetsStorage.getHairsByCategories(HairCategories.MALE)[0],
    hatFBX: null,
    headDecor1FBX: null,
    headDecor2FBX: null,
    hairColor: characterAssetsStorage.getHairColors()[2],
    clothesTexture: ClothesList[4],
    skinColor: SkinColors[2],
    eyesTexture: characterAssetsStorage.getEyes()[17],
    mouthTexture: characterAssetsStorage.getMouth()[0],
    clothesColor1: ClothesPalette[0],
    clothesColor2: ClothesPalette[1],
    leftHandSlot: characterAssetsStorage.getCarryItemsByCategories(CarryItemsCategories.SHIELDS)[0],
    rightHandSlot: characterAssetsStorage.getCarryItemsByCategories(CarryItemsCategories.SWORDS)[0],
    backSlot: characterAssetsStorage.getCarryItemsByCategories(CarryItemsCategories.BACKPACKS)[0],
    bodyType: characterAssetsStorage.getBodyTypeById(BodyTypeId.HUMAN),
}