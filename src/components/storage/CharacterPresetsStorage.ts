import { defaultCharacterConfig } from './model/DefaultCharacterConfig';
import { CharacterConfig } from '../character/model/CharacterConfig';
import { Animations } from './model/Animations';

class CharacterPresetsStorage {

    getDefaultCharacterConfig(): CharacterConfig {
        return defaultCharacterConfig;
    }

    getDefaultAnimation(): string {
        return Animations[4];
    }

}

export const characterPresetsStorage = new CharacterPresetsStorage();