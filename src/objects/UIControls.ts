import { GUI } from 'three/examples/jsm/libs/dat.gui.module';
import { Character } from './Character';
import { CharacterConfig } from '../data/CharacterConfig';
import { characterConfigOptions, CarryItemsOptions, AnimationsOptions } from './../data/UIOptions';
import { Animations } from '../data/Animations';
import { selectToRadios } from '../lib/dat.gui.radio';

export class UIControls {

    private gui: GUI;
    private characterConfig: CharacterConfig;
    private rotation: number = 0;
    private animation: string = Animations[2];
    private showDebugAxis:boolean = false; 

    constructor(private character: Character, private axesHelper: THREE.AxesHelper) {
        this.characterConfig = character.getConfig();
        this.gui = new GUI();

        let head = this.gui.addFolder('HEAD');
        this.addCharacterConfig(head, 'hairFBX').onChange(this.setupHair.bind(this));
        this.addColorPicker(head, 'hairColor').onChange(this.setupHair.bind(this));
        this.addCharacterConfig(head, 'faceTexture').onChange(this.character.setupBodyTexture.bind(this.character));

        let body = this.gui.addFolder('BODY');
        this.addCharacterConfig(body, 'bodyTypeId').onChange(this.character.setupBodyType.bind(this.character));
        this.addColorPicker(body, 'skinColor').onChange(this.character.setupBodyTexture.bind(this.character));

        let clothes = this.gui.addFolder('CLOTHES');
        this.addCharacterConfig(clothes, 'clothesTexture').onChange(this.character.setupBodyTexture.bind(this.character));

        let slots = this.gui.addFolder('SLOTS');
        this.setupCarryItemSlot(slots, "rightHandSlot");
        this.setupCarryItemSlot(slots, "leftHandSlot");
        this.setupCarryItemSlot(slots, "backSlot");

        this.addRotation(this.gui);
        this.addAnimations(this.gui);
        this.addShowDebugAxis(this.gui);
    }

    private addColorPicker(root, key) {
        return selectToRadios(root.add(this.characterConfig, key, characterConfigOptions[key]));
    }

    private addCharacterConfig(root, key) {
        return root.add(this.characterConfig, key, characterConfigOptions[key]);
    }

    private setupHair(value) {
        if (this.characterConfig.hairFBX !== "Bold") {
            this.character.setupHeadSlot(this.characterConfig.hairFBX, this.characterConfig.hairColor);
        } else {
            this.character.setupHeadSlot(null, this.characterConfig.hairColor);
        }
    }

    private setupCarryItemSlot(root, slotId: string) {
        root.add(this.characterConfig, slotId, CarryItemsOptions[slotId]).onChange((value) => {
            value = value === "EMPTY" ? null : value;
            this.character.setupCarryItemSlot(slotId, value);
        });
    }

    private addRotation(root) {
        root.add(this, 'rotation', -1*Math.PI, 1*Math.PI).onChange((value) => {
            this.character.setupRotation(value);
        });
    }

    private addAnimations(root) {
        root.add(this, 'animation', AnimationsOptions).onChange((value) => {
            this.character.resetAnimation(value);
        });
    }

    private addShowDebugAxis(root) {
        root.add(this, "showDebugAxis").onChange((value) => {
            this.axesHelper.visible = value;
        });
    }

}