import { CharacterConfig } from "../model/CharacterConfig";
import { loadFBX } from "../../../utils/loadFBX";
import { setTextureByImage } from "../../../utils/setTextureByImage";

const headSlot = "Dummy_Prop_Head";
const leftHandSlot = "Dummy_Prop_Left";
const rightHandSlot = "Dummy_Prop_Right";
const backSlot = "Dummy_Prop_Back";

const slotMap = new Map<string, string>([
    ["rightHandSlot", rightHandSlot],
    ["leftHandSlot", leftHandSlot],
    ["backSlot", backSlot],
]);

type RotationFix = {z: string[], y: string[]}

const slotMapItemsRotationFix = new Map<string, RotationFix>([
    ["rightHandSlot", {z: ["Crossbow"], y:[""]}],
    ["leftHandSlot", {z: ["Axe"], y:["Claw"]}],
]);

export class CharacterSlots {

    private characterGroup: THREE.Group;

    constructor(private config: CharacterConfig) {}

    setCharacterGroup(characterGroup: THREE.Group) {
        this.characterGroup = characterGroup;
    }

    setupHair(hairFBX: string, color: number = 0xffffff) {
        this.config.hairFBX = hairFBX;
        this.config.hairColor = color;
        this.updateHead();
    }

    setupHat(hatFBX: string) {
        this.config.hatFBX = hatFBX === 'none' ? null : hatFBX;
        this.updateHead();
    }

    headDecor1(decorFBX: string) {
        this.config.headDecor1FBX = decorFBX === 'none' ? null : decorFBX;
        this.updateHead();
    }

    headDecor2(decorFBX: string) {
        this.config.headDecor2FBX = decorFBX === 'none' ? null : decorFBX;
        this.updateHead();
    }

    private updateHead() {
        this.clearSlot(headSlot);
        this.updateHat();
        this.updateHair();
        this.updateDecor(this.config.headDecor1FBX);
        this.updateDecor(this.config.headDecor2FBX);
    }

    private updateDecor(decorFBX: string) {
        const fileDecorFBX = decorFBX ? `models/head/decor/${decorFBX}.FBX` : decorFBX;
        const textureFile = decorFBX ? `head/decor/${decorFBX}` : decorFBX;
        const colorHairFBX = 0xffffff;
        this.setupSlot(headSlot, fileDecorFBX, textureFile, colorHairFBX);
    }

    private updateHat() {
        const { hatFBX } = this.config;
        const fileHatFBX = hatFBX ? `models/head/hats/${hatFBX}.FBX` : hatFBX;
        const textureFile = hatFBX ? `head/hats/${hatFBX}` : hatFBX;
        const colorHairFBX = 0xffffff;
        this.setupSlot(headSlot, fileHatFBX, textureFile, colorHairFBX);
    }

    private updateHair() {
        const { hairFBX } = this.config;
        const { hairColor } = this.config;
        const fileHairFBX = hairFBX === null ? null : `models/head/hair/${hairFBX}.FBX`;
        this.setupSlot(headSlot, fileHairFBX, null, hairColor);
    }

    setupCarryItemSlot(slotId: string, carryItemsFBX: string) {
        const slotFBX = slotMap.get(slotId);
        const fileFBX = carryItemsFBX ? `models/carryitems/${carryItemsFBX}.FBX` : carryItemsFBX;
        const textureFile = carryItemsFBX ? `carryitems/${carryItemsFBX}` : carryItemsFBX;
        const color = 0xffffff;
        this.clearSlot(slotFBX);
        this.setupSlot(slotFBX, fileFBX, textureFile, color);
        this.config[slotId] = carryItemsFBX;
    }

    private async setupSlot(slotId: string, fileFBX: string, textureFile: string, color: number = 0xffffff) {
        let item: THREE.Group;
        if (fileFBX) {
            item = await loadFBX(fileFBX);
            this.fixRotationOnDemand(slotId, item, fileFBX)
            this.characterGroup.getObjectByName(slotId).add(item);
        }
        if (textureFile && fileFBX) {
            setTextureByImage(item.children[0], textureFile);
        }
        if (color !== 0xffffff && fileFBX) {
            (item.children[0] as any).material.color.setHex(color);
        }
    }

    private clearSlot(slotId: string): void {
        for (let i = 0; i < this.characterGroup.getObjectByName(slotId).children.length;) {
            const toRemove = this.characterGroup.getObjectByName(slotId).children[0];
            this.characterGroup.getObjectByName(slotId).remove(toRemove);
        }
    }

    private fixRotationOnDemand(targetSlotId: string, item: THREE.Object3D, fileFBX :string): void {
        slotMapItemsRotationFix.forEach((rotationFix: RotationFix, slotId) => {
            if (slotMap.get(slotId) === targetSlotId) {
                this.fixAxisOnDemand(item, fileFBX, rotationFix.z, 'z');
                this.fixAxisOnDemand(item, fileFBX, rotationFix.y, 'y');
            }
        });
    }

    private fixAxisOnDemand(item: THREE.Object3D, fileFBX: string, itemFixList: string[], axis: string): void {
        itemFixList.forEach((fileSufix: string) => {
            if (fileFBX.indexOf(fileSufix) > 0) {
                item.rotation[axis] = Math.PI;
            }
        });
    }

}