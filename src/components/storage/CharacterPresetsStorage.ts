import { defaultCharacterConfig } from './model/DefaultCharacterConfig';
import { CharacterConfig } from '../character/model/CharacterConfig';
import { Animations } from './model/Animations';
import { randomCharacterConfig } from './utils/randomCharacterConfig';

class CharacterPresetsStorage {

    getDefaultCharacterConfig(): CharacterConfig {
        return defaultCharacterConfig;
    }

    getRandomCharacterConfig(): CharacterConfig {
        return randomCharacterConfig();
    }

    getDefaultAnimation(): string {
        return Animations[4];
    }

}

export const characterPresetsStorage = new CharacterPresetsStorage();