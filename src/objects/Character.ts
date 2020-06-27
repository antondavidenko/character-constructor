import { loadFBX } from '../utils/loadFBX';
import { setTextureByImage, setTextureByImagesList } from '../utils/setTextureByImage';
import { CharacterConfig } from '../data/CharacterConfig';
import { defaultCharackterConfig } from '../data/DefaultCharackterConfig';
import { carryItemsMaterial, CarryItemsFBX } from '../data/CarryItems';
import { setScaleByVector3 } from './../utils/helpers';
import * as THREE from 'three';
import { BodiesCollection, FaceTextureX, FaceTextureY } from '../data/Body';
import { Animations } from './../data/Animations';

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
    private mixer: THREE.AnimationMixer;
    private clock: THREE.Clock = new THREE.Clock();
    private animationAction: THREE.AnimationAction;

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

        this.mixer = new THREE.AnimationMixer(this.main);
        this.setAnimation(Animations.IDLE);

        this.scene.add(this.main);
    }

    private async setAnimation(fileId:string) {
        let animation = await loadFBX(fileId + ".FBX");
        this.animationAction = this.mixer.clipAction((animation as any).animations[0]);
        this.animationAction.reset();
        this.animationAction.play();
    }

    resetAnimation(fileId:string) {
        this.animationAction.stop();
        this.setAnimation(fileId);
    }

    update() {
        if (this.mixer) {
            this.mixer.update(this.clock.getDelta());
            this.setupBodyType();
            this.main.rotation.x = 0;
        }
    }

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