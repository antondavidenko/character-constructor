import { CharacterConfig } from "../../character/model/CharacterConfig";
import { characterAssetsStorage, CarryItemsCategories, HairCategories, BodyTypeId } from "../CharacterAssetsStorage";

export const defaultCharacterConfig: CharacterConfig = {
    baseFBX: characterAssetsStorage.getBaseModelList()[0],
    hairFBX: characterAssetsStorage.getHairsByCategories(HairCategories.MALE)[0],
    hatFBX: null,
    headDecor1FBX: null,
    headDecor2FBX: null,
    hairColor: characterAssetsStorage.getHairColors()[2],
    clothesTexture: characterAssetsStorage.getClothesList()[4],
    skinColor: characterAssetsStorage.getSkinColors()[2],
    eyesTexture: characterAssetsStorage.getEyes()[17],
    mouthTexture: characterAssetsStorage.getMouth()[0],
    clothesColor1: characterAssetsStorage.getClothesPalette()[0],
    clothesColor2: characterAssetsStorage.getClothesPalette()[1],
    leftHandSlot: characterAssetsStorage.getCarryItemsByCategories(CarryItemsCategories.SHIELDS)[0],
    rightHandSlot: characterAssetsStorage.getCarryItemsByCategories(CarryItemsCategories.SWORDS)[0],
    backSlot: characterAssetsStorage.getCarryItemsByCategories(CarryItemsCategories.BACKPACKS)[0],
    bodyType: characterAssetsStorage.getBodyTypeById(BodyTypeId.HUMAN),
}