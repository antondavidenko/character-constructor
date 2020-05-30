import { GUI } from 'three/examples/jsm/libs/dat.gui.module';
import { Character } from './Character';
import { HairColors, HairFBX } from '../data/Hair';
import { BodyTextures } from '../data/Body';
import { CarryItemsFBX } from '../data/CarryItems';

export class UIControls {

    private gui:GUI;
    private obj:any;

    constructor(private character: Character) {
        this.obj = character.getConfig();
        this.gui = new GUI();
        this.addHair();
        this.addHairColor();
        this.addBodyTexture();
        this.setupCarryItemSlot("rightHandSlot");
        this.setupCarryItemSlot("leftHandSlot");
        this.setupCarryItemSlot("backSlot");
    }

    private addHair() {
        this.gui.add(this.obj, 'hairFBX', {
            HairMale01: HairFBX.HAIR1,
            HairMale05: HairFBX.HAIR2,
            HairMale09: HairFBX.HAIR3,
            HairMale11: HairFBX.HAIR4,
            Bold: "Bold",
        }).onChange(this.setupHair.bind(this));
    }

    private addHairColor() {
        this.gui.add(this.obj, 'hairColor', {
            BLONDE: HairColors.BLONDE,
            BLACK: HairColors.BLACK,
            BROWN: HairColors.BROWN,
            RED: HairColors.RED,
            SILVER: HairColors.SILVER,
        }).onChange(this.setupHair.bind(this));
    }

    private setupHair(value) {
        if (this.obj.hairFBX !== "Bold") {
            this.character.setupHeadSlot(this.obj.hairFBX, this.obj.hairColor);
        } else {
            this.character.setupHeadSlot(null, this.obj.hairColor);
        }
    }

    private addBodyTexture() {
        this.gui.add(this.obj, 'bodyTexture', {
            DR_MANHATTAN: BodyTextures.DR_MANHATTAN,
            ARCHER: BodyTextures.ARCHER,
            BARBARIAN: BodyTextures.BARBARIAN,
            CASUAL: BodyTextures.CASUAL,
            CASUAL512: BodyTextures.CASUAL512,
            CASUAL512FACE: BodyTextures.CASUAL512FACE,
            CASUAL512DRESS: BodyTextures.CASUAL512DRESS,
            KNIGHT: BodyTextures.KNIGHT,
        }).onChange(this.character.setupBodyTexture.bind(this.character));
    }

    private setupCarryItemSlot(slotId:string) {
        this.gui.add(this.obj, slotId, {
            ARROW: CarryItemsFBX.ARROW,
            AXE: CarryItemsFBX.AXE,
            CLAW: CarryItemsFBX.CLAW,
            DAGGER: CarryItemsFBX.DAGGER,
            LONGBOW: CarryItemsFBX.LONGBOW,
            QUIVER: CarryItemsFBX.QUIVER,
            SACK: CarryItemsFBX.SACK,
            SHIELDSMALL: CarryItemsFBX.SHIELDSMALL,
            SHIELDLARGE: CarryItemsFBX.SHIELDLARGE,
            SWORD: CarryItemsFBX.SWORD,
            EMPTY: "EMPTY",
        }).onChange( (value) => {
            value = value === "EMPTY" ? null : value;
            this.character.setupCarryItemSlot(slotId, value);
        });
    }

}