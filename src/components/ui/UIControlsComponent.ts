import { GUI } from 'three/examples/jsm/libs/dat.gui.module';
import { Character } from '../character/CharacterComponent';
import { CharacterConfig } from '../character/model/CharacterConfig';
import { characterConfigOptions } from './model/UIOptions';
import { selectToRadios } from './utils/selectToRadios';
import { addHead } from './folders/head';
import { addBody } from './folders/body';
import { addClothes } from './folders/clothes';
import { addSlots } from './folders/slots';
import { addGeneral } from './folders/general';
import { characterAssetsStorage } from '../storage/CharacterAssetsStorage';

export class FolderContext {
    gui: GUI;
    character: Character;
    addCharacterConfig: (root, key, UIkey?) => any;
    addColorPicker: (root, key) => any;
    characterConfig: CharacterConfig;

    axesHelper: THREE.AxesHelper;
    rotation: number;
    animation: string;
    showDebugAxis:boolean;
}

export class UIControls {

    private gui: GUI;
    private characterConfig: CharacterConfig;
    private rotation: number = 0;
    private showDebugAxis:boolean = false;

    constructor(private character: Character, private axesHelper: THREE.AxesHelper, private animation: string) {
        this.characterConfig = character.getConfig();
        this.gui = new GUI();

        const context: FolderContext = {
            gui: this.gui,
            character: this.character,
            addCharacterConfig: this.addCharacterConfig.bind(this),
            addColorPicker: this.addColorPicker.bind(this),
            characterConfig: this.characterConfig,

            axesHelper: axesHelper,
            rotation: this.rotation,
            animation: this.animation,
            showDebugAxis: this.showDebugAxis,
        }

        addHead(context);
        addBody(context);
        addClothes(context);
        addSlots(context);
        addGeneral(context);
    }

    private addColorPicker(root, key) {
        return selectToRadios(root.add(this.characterConfig, key, characterConfigOptions[key]));
    }

    private addCharacterConfig(root, key, UIkey = key) {
        return root.add(this.characterConfig, key, characterConfigOptions[UIkey]);
    }

}