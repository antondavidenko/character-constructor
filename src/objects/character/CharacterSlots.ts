import { CharacterConfig } from "../../data/CharacterConfig";
import { carryItemsMaterial, CarryItemsFBX } from "../../data/CarryItems";
import { loadFBX } from "../../utils/loadFBX";
import { setTextureByImage } from "../../utils/setTextureByImage";

const headSlot = "Dummy_Prop_Head";
const leftHandSlot = "Dummy_Prop_Left";
const rightHandSlot = "Dummy_Prop_Right";
const backSlot = "Dummy_Prop_Back";

const slotMap = new Map<string, string>([
    ["rightHandSlot", rightHandSlot],
    ["leftHandSlot", leftHandSlot],
    ["backSlot", backSlot],
]);

export class CharacterSlots {

    private characterGroup: THREE.Group;

    constructor(private config: CharacterConfig) {}

    setCharacterGroup(characterGroup: THREE.Group) {
        this.characterGroup = characterGroup;
    }

    async setupHeadSlot(modelFileFBX: string, color: number = 0xffffff) {
        let fileFBX = modelFileFBX === null ? null : `models/hair/${modelFileFBX}.FBX`;
        this.setupSlot.call(this, headSlot, fileFBX, null, color);
        this.config.hairFBX = modelFileFBX;
        this.config.hairColor = color;
    }

    setupCarryItemSlot(slotId: string, carryItemsFBX: CarryItemsFBX) {
        const slotFBX = slotMap.get(slotId);
        const fileFBX = carryItemsFBX ? `models/carryitems/${carryItemsFBX}.FBX` : carryItemsFBX;
        const texture = carryItemsFBX ? carryItemsMaterial.get(carryItemsFBX).texture : carryItemsFBX;
        const textureFile = texture ? `carryitems/${texture}` : texture;
        const color = carryItemsFBX ? carryItemsMaterial.get(carryItemsFBX).color || 0xffffff : 0xffffff;
        this.setupSlot(slotFBX, fileFBX, textureFile, color);
        this.config[slotId] = carryItemsFBX;
    }

    private async setupSlot(slotId: string, fileFBX: string, textureFile: string, color: number = 0xffffff) {
        let item: THREE.Group;
        if (this.characterGroup.getObjectByName(slotId).children.length > 0) {
            const toRemove = this.characterGroup.getObjectByName(slotId).children[0];
            this.characterGroup.getObjectByName(slotId).remove(toRemove);
        }
        if (fileFBX) {
            item = await loadFBX(fileFBX);
            this.characterGroup.getObjectByName(slotId).add(item);
        }
        if (textureFile && fileFBX) {
            setTextureByImage(item.children[0], textureFile);
        }
        if (color !== 0xffffff && fileFBX) {
            (item.children[0] as any).material.color.setHex(color);
        }
    }

}