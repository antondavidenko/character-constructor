import * as THREE from 'three';
import { loadFBX } from '../utils/loadFBX';
import { CharacterConfig } from '../data/CharacterConfig';
import { defaultCharackterConfig } from '../data/DefaultCharackterConfig';
import { CarryItemsFBX } from '../data/CarryItems';
import { CharacterSlots } from './character/CharacterSlots';
import { CharacterAnimation } from './character/CharacterAnimation';
import { setupBodyTexture, setupBodyType } from './character/setupBody';

const headId = "RigHead";
const mainId = "RigPelvis";

export class Character {

    private characterGroup: THREE.Group;
    private head: THREE.Object3D;

    private characterSlots: CharacterSlots;
    private characterAnimation: CharacterAnimation = new CharacterAnimation();

    constructor(private scene: THREE.Scene, private config: CharacterConfig = defaultCharackterConfig) {
        this.characterSlots = new CharacterSlots(this.config);
        this.init();
    }

    private async init() {
        this.characterGroup = await loadFBX("models/BaseNormal.FBX");
        this.head = this.characterGroup.getObjectByName(headId);
        this.characterSlots.setCharacterGroup(this.characterGroup);

        this.setupBodyType();
        this.setupBodyTexture();
        this.setupHeadSlot(this.config.hairFBX, this.config.hairColor);
        this.setupCarryItemSlot("rightHandSlot", this.config.rightHandSlot);
        this.setupCarryItemSlot("leftHandSlot", this.config.leftHandSlot);
        this.setupCarryItemSlot("backSlot", this.config.backSlot);

        this.characterAnimation.init(this.characterGroup);
        this.scene.add(this.characterGroup);
    }

    update() {
        if (this.characterAnimation.update()) {
            this.setupBodyType();
            this.characterGroup.rotation.x = 0;
        }
    }

    setupRotation(rotation:number) {
        this.characterGroup.rotation.y = rotation;
    }

    setupBodyType() {
        setupBodyType(this.characterGroup, this.head, this.config);
    }

    async setupHeadSlot(modelFileFBX: string, color: number = 0xffffff) {
        this.characterSlots.setupHeadSlot(modelFileFBX, color);
    }

    setupBodyTexture() {
        setupBodyTexture(this.characterGroup, this.config);
    }

    setupCarryItemSlot(slotId: string, carryItemsFBX: CarryItemsFBX) {
        this.characterSlots.setupCarryItemSlot(slotId, carryItemsFBX);
    }

    getConfig(): CharacterConfig {
        return this.config;
    }

    resetAnimation(fileId:string) {
        this.characterAnimation.resetAnimation(fileId);
    }

}