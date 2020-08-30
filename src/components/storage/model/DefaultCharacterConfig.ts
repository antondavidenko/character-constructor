import { CharacterConfig } from "../../character/model/CharacterConfig";
import { characterAssetsStorage as storage, BodyTypeId, ASSET_LIST, COLORS_LIST } from "../CharacterAssetsStorage";

export function getDefaultCharacterConfig(): CharacterConfig {
    return {
        baseFBX: storage.getList(ASSET_LIST.BASE)[0],
        hairFBX: storage.getList(ASSET_LIST.HAIRMALE)[0],
        hatFBX: null,
        headDecor1FBX: null,
        headDecor2FBX: null,
        hairColor: storage.getColors(COLORS_LIST.HAIR)[2],
        clothesTexture: storage.getList(ASSET_LIST.CLOTHES)[4],
        skinColor: storage.getColors(COLORS_LIST.SKIN)[2],
        eyesTexture: storage.getList(ASSET_LIST.EYES)[17],
        mouthTexture: storage.getList(ASSET_LIST.MOUTH)[0],
        clothesColor1: storage.getColors(COLORS_LIST.CLOTHES)[0],
        clothesColor2: storage.getColors(COLORS_LIST.CLOTHES)[1],
        leftHandSlot: storage.getItems(1)[0],
        rightHandSlot: storage.getItems(2)[0],
        backSlot: storage.getItems(0)[0],
        bodyType: storage.getBodyTypeById(BodyTypeId.HUMAN),
    }
}