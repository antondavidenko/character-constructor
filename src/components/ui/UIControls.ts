import { GUI } from 'three/examples/jsm/libs/dat.gui.module';
import { Character } from '../Character';
import { CharacterConfig } from '../../model/character/CharacterConfig';
import { characterConfigOptions, AnimationsOptions } from '../../model/ui/UIOptions';
import { Animations } from '../../model/character/Animations';
import { selectToRadios } from '../../lib/dat.gui.radio';
import { addHead } from './folders/head';
import { addBody } from './folders/body';
import { addClothes } from './folders/clothes';
import { addSlots } from './folders/slots';
import { addGeneral } from './folders/general';

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
    private animation: string = Animations[4];
    private showDebugAxis:boolean = false;

    constructor(private character: Character, private axesHelper: THREE.AxesHelper) {
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