import { getDefaultCharacterConfig } from './model/DefaultCharacterConfig';
import { CharacterConfig } from '../character/model/CharacterConfig';
import { randomCharacterConfig } from './utils/randomCharacterConfig';
import { characterAssetsStorage, ASSET_LIST } from './CharacterAssetsStorage';

class CharacterPresetsStorage {

    getDefaultCharacterConfig(): CharacterConfig {
        return getDefaultCharacterConfig();
    }

    getRandomCharacterConfig(): CharacterConfig {
        return randomCharacterConfig();
    }

    getDefaultAnimation(): string {
        return characterAssetsStorage.getList(ASSET_LIST.ANIMATIONS)[4];
    }

}

export const characterPresetsStorage = new CharacterPresetsStorage();