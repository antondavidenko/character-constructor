import { GUI } from 'three/examples/jsm/libs/dat.gui.module';
import { Character } from './Character';
import { HairColors, HairFBX } from '../data/Hair';
import { Clothes, Faces, SkinColors, BodiesCollectionId } from '../data/Body';
import { CarryItemsFBX } from '../data/CarryItems';
import { CharacterConfig } from './../data/CharacterConfig';

export class UIControls {

    private gui: GUI;
    private characterConfig: CharacterConfig;
    rotation: number = 0;

    constructor(private character: Character) {
        this.characterConfig = character.getConfig();
        this.gui = new GUI();
        this.addHair();
        this.addHairColor();
        this.addClothes();
        this.addFaces();
        this.addSkin();
        this.addBodyType();
        this.setupCarryItemSlot("rightHandSlot");
        this.setupCarryItemSlot("leftHandSlot");
        this.setupCarryItemSlot("backSlot");
        this.addRotation();
    }

    private addHair() {
        this.gui.add(this.characterConfig, 'hairFBX', {
            CASUAL: HairFBX.CASUAL,
            LONG: HairFBX.LONG,
            SPIKY: HairFBX.SPIKY,
            UNDERCUT: HairFBX.UNDERCUT,
            BOLD: "Bold",
        }).onChange(this.setupHair.bind(this));
    }

    private addHairColor() {
        this.gui.add(this.characterConfig, 'hairColor', {
            BLONDE: HairColors.BLONDE,
            BLACK: HairColors.BLACK,
            BROWN: HairColors.BROWN,
            RED: HairColors.RED,
            SILVER: HairColors.SILVER,
        }).onChange(this.setupHair.bind(this));
    }

    private setupHair(value) {
        if (this.characterConfig.hairFBX !== "Bold") {
            this.character.setupHeadSlot(this.characterConfig.hairFBX, this.characterConfig.hairColor);
        } else {
            this.character.setupHeadSlot(null, this.characterConfig.hairColor);
        }
    }

    private addClothes() {
        this.gui.add(this.characterConfig, 'clothesTexture', {
            DR_MANHATTAN: Clothes.DR_MANHATTAN,
            ARCHER: Clothes.ARCHER,
            BARBARIAN: Clothes.BARBARIAN,
            BARBARIAN2: Clothes.BARBARIAN2,
            CASUAL: Clothes.CASUAL,
            MEDUSA: Clothes.MEDUSA,
            VAMPIRRE: Clothes.VAMPIRRE,
            WARLOCK: Clothes.WARLOCK,
            WARLOCK2: Clothes.WARLOCK2,
            KNIGHT: Clothes.KNIGHT,
        }).onChange(this.character.setupBodyTexture.bind(this.character));
    }

    private addFaces() {
        this.gui.add(this.characterConfig, 'faceTexture', {
            DR_MANHATTAN: Faces.DR_MANHATTAN,
            MEDUSA: Faces.MEDUSA,
            CYCLOP: Faces.CYCLOP,
            EVIL: Faces.EVIL,
            POKER: Faces.POKER,
            SMILE: Faces.SMILE,
            VAMPIRE: Faces.VAMPIRE,
            VAMPIRE2: Faces.VAMPIRE2,
        }).onChange(this.character.setupBodyTexture.bind(this.character));
    }

    private addSkin() {
        this.gui.add(this.characterConfig, 'skinColor', {
            WHITE: SkinColors.WHITE,
            TAN: SkinColors.TAN,
            BLACK: SkinColors.BLACK,
            GREEN: SkinColors.GREEN,
            BLUE: SkinColors.BLUE,
        }).onChange(this.character.setupBodyTexture.bind(this.character));
    }

    private addBodyType() {
        this.gui.add(this.characterConfig, 'bodyTypeId', {
            HOBBIT: BodiesCollectionId.HOBBIT,
            HUMAN: BodiesCollectionId.HUMAN,
            OGR: BodiesCollectionId.OGR,
        }).onChange(this.character.setupBodyType.bind(this.character));
    }

    private setupCarryItemSlot(slotId: string) {
        this.gui.add(this.characterConfig, slotId, {
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
        }).onChange((value) => {
            value = value === "EMPTY" ? null : value;
            this.character.setupCarryItemSlot(slotId, value);
        });
    }

    private addRotation() {
        this.gui.add(this, 'rotation', -1*Math.PI, 1*Math.PI).onChange((value) => {
            this.character.setupRotation(value);
        });
    }

}