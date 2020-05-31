import { loadFBX } from '../utils/loadFBX';
import { setTextureByImage, setTextureByImagesList } from '../utils/setTextureByImage';
import { CharacterConfig } from '../data/CharacterConfig';
import { defaultCharackterConfig } from '../data/DefaultCharackterConfig';
import { carryItemsMaterial, CarryItemsFBX } from '../data/CarryItems';
import { setScaleByVector3 } from './../utils/helpers';
import { BodiesCollection, FaceTextureX, FaceTextureY } from '../data/Body';

const headSlot = "Dummy_Prop_Head";
const leftHandSlot = "Dummy_Prop_Left";
const rightHandSlot = "Dummy_Prop_Right";
const backSlot = "Dummy_Prop_Back";

const slotMap = new Map<string, string>([
    ["rightHandSlot", rightHandSlot],
    ["leftHandSlot", leftHandSlot],
    ["backSlot", backSlot],
]);

const headId = "RigHead";
const mainId = "RigPelvis";

export class Character {

    private main: THREE.Group;
    private head: THREE.Object3D;

    constructor(private scene: THREE.Scene, private config: CharacterConfig = defaultCharackterConfig) {
        this.initMain();
    }

    private async initMain() {
        this.main = await loadFBX("models/BaseNormal.FBX");
        this.head = this.main.getObjectByName(headId);

        this.setupBodyType();
        this.setupBodyTexture();
        this.setupHeadSlot(this.config.hairFBX, this.config.hairColor);
        this.setupCarryItemSlot("rightHandSlot", this.config.rightHandSlot);
        this.setupCarryItemSlot("leftHandSlot", this.config.leftHandSlot);
        this.setupCarryItemSlot("backSlot", this.config.backSlot);

        this.scene.add(this.main);
    }

    update() {}

    setupRotation(rotation:number) {
        this.main.rotation.y = rotation;
    }

    setupBodyType() {
        setScaleByVector3(this.main, BodiesCollection[this.config.bodyTypeId].main);
        setScaleByVector3(this.head, BodiesCollection[this.config.bodyTypeId].head);
        this.head.position.x = BodiesCollection[this.config.bodyTypeId].headOffset;
    }

    async setupHeadSlot(modelFileFBX: string, color: number = 0xffffff) {
        let fileFBX = modelFileFBX === null ? null : `models/hair/${modelFileFBX}.FBX`;
        this.setupSlot.call(this, headSlot, fileFBX, null, color);
        this.config.hairFBX = modelFileFBX;
        this.config.hairColor = color;
    }

    async setupBodyTexture() {
        setTextureByImagesList(
            this.main.getObjectByName("Base"),
            [
                {file: this.config.clothesTexture}, 
                {file: this.config.faceTexture, x: FaceTextureX, y: FaceTextureY}
            ], 
            this.config.skinColor,
        );
    }

    setupCarryItemSlot(slotId: string, carryItemsFBX: CarryItemsFBX) {
        let slotFBX = slotMap.get(slotId);
        let fileFBX = carryItemsFBX ? `models/carryitems/${carryItemsFBX}.FBX` : carryItemsFBX;
        let texture = carryItemsFBX ? carryItemsMaterial.get(carryItemsFBX).texture : carryItemsFBX;
        let textureFile = texture ? `carryitems/${texture}` : texture;
        let color = carryItemsFBX ? carryItemsMaterial.get(carryItemsFBX).color || 0xffffff : 0xffffff;
        this.setupSlot(slotFBX, fileFBX, textureFile, color);
        this.config[slotId] = carryItemsFBX;
    }

    private async setupSlot(slotId: string, fileFBX: string, textureFile: string, color: number = 0xffffff) {
        let item: THREE.Group;
        if (this.main.getObjectByName(slotId).children.length > 0) {
            let toRemove = this.main.getObjectByName(slotId).children[0];
            this.main.getObjectByName(slotId).remove(toRemove);
        }
        if (fileFBX) {
            item = await loadFBX(fileFBX);
            this.main.getObjectByName(slotId).add(item);
        }
        if (textureFile && fileFBX) {
            setTextureByImage(item.children[0], textureFile);
        }
        if (color !== 0xffffff && fileFBX) {
            (item.children[0] as any).material.color.setHex(color);
        }
    }

    getConfig(): CharacterConfig {
        return this.config;
    }

}