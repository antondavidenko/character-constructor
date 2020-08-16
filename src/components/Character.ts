import * as THREE from 'three';
import { loadFBX } from '../utils/loadFBX';
import { CharacterConfig } from '../model/character/CharacterConfig';
import { defaultCharackterConfig } from '../model/character/DefaultCharackterConfig';
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
        await this.setupAll();
        this.scene.add(this.characterGroup);
    }

    async reInit() {
        this.scene.remove(this.characterGroup);
        this.init();
    }

    private async setupAll() {
        this.characterGroup = await loadFBX("models/"+this.config.baseFBX+".FBX");
        this.head = this.characterGroup.getObjectByName(headId);
        this.characterSlots.setCharacterGroup(this.characterGroup);

        this.setupBodyType();
        this.setupBodyTexture();
        this.setupHair(this.config.hairFBX, this.config.hairColor);
        this.setupHat(this.config.hatFBX);
        this.headDecor1(this.config.headDecor1FBX);
        this.headDecor2(this.config.headDecor2FBX);
        this.setupCarryItemSlot("rightHandSlot", this.config.rightHandSlot);
        this.setupCarryItemSlot("leftHandSlot", this.config.leftHandSlot);
        this.setupCarryItemSlot("backSlot", this.config.backSlot);

        this.characterAnimation.init(this.characterGroup);
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

    async setupHair(hairFBX: string, color: number = 0xffffff) {
        this.characterSlots.setupHair(hairFBX, color);
    }

    setupHat(hatFBX: string) {
        this.characterSlots.setupHat(hatFBX);
    }

    headDecor1(decorFBX: string) {
        this.characterSlots.headDecor1(decorFBX);
    }

    headDecor2(decorFBX: string) {
        this.characterSlots.headDecor2(decorFBX);
    }

    setupBodyTexture() {
        setupBodyTexture(this.characterGroup, this.config);
    }

    setupCarryItemSlot(slotId: string, carryItemsFBX: string) {
        this.characterSlots.setupCarryItemSlot(slotId, carryItemsFBX);
    }

    getConfig(): CharacterConfig {
        return this.config;
    }

    resetAnimation(fileId:string) {
        this.characterAnimation.resetAnimation(fileId);
    }

}