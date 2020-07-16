import { HairFBX, HairColors } from "./Hair";
import { Clothes, Faces, SkinColors, BodiesCollectionId } from './Body';
import { CarryItemsFBX } from '../data/CarryItems';
import { Animations } from './Animations';

export const characterConfigOptions = {
    hairFBX: {
        CASUAL: HairFBX.CASUAL,
        LONG: HairFBX.LONG,
        SPIKY: HairFBX.SPIKY,
        UNDERCUT: HairFBX.UNDERCUT,
        BOLD: "Bold",
    },
    hairColor: [
        HairColors.BLONDE,
        HairColors.BLACK,
        HairColors.BROWN,
        HairColors.RED,
        HairColors.SILVER,
    ],
    clothesTexture: {
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
    },
    faceTexture: {
        DR_MANHATTAN: Faces.DR_MANHATTAN,
        MEDUSA: Faces.MEDUSA,
        CYCLOP: Faces.CYCLOP,
        EVIL: Faces.EVIL,
        POKER: Faces.POKER,
        SMILE: Faces.SMILE,
        VAMPIRE: Faces.VAMPIRE,
        VAMPIRE2: Faces.VAMPIRE2,
    },
    skinColor: [
        SkinColors.WHITE,
        SkinColors.TAN,
        SkinColors.BLACK,
        SkinColors.GREEN,
        SkinColors.BLUE,
    ],
    bodyTypeId: {
        HOBBIT: BodiesCollectionId.HOBBIT,
        HUMAN: BodiesCollectionId.HUMAN,
        OGR: BodiesCollectionId.OGR,
    },
}

export const CarryItemsOptions = {
    rightHandSlot: {
        ARROW: CarryItemsFBX.ARROW,
        AXE: CarryItemsFBX.AXE,
        CLAW: CarryItemsFBX.CLAW,
        DAGGER: CarryItemsFBX.DAGGER,
        LONGBOW: CarryItemsFBX.LONGBOW,
        SHIELDSMALL: CarryItemsFBX.SHIELDSMALL,
        SHIELDLARGE: CarryItemsFBX.SHIELDLARGE,
        SWORD: CarryItemsFBX.SWORD,
        EMPTY: "EMPTY",
    },
    leftHandSlot: {
        ARROW: CarryItemsFBX.ARROW,
        AXE: CarryItemsFBX.AXE,
        DAGGER: CarryItemsFBX.DAGGER,
        LONGBOW: CarryItemsFBX.LONGBOW,
        SHIELDSMALL: CarryItemsFBX.SHIELDSMALL,
        SHIELDLARGE: CarryItemsFBX.SHIELDLARGE,
        SWORD: CarryItemsFBX.SWORD,
        EMPTY: "EMPTY",
    },
    backSlot: {
        QUIVER: CarryItemsFBX.QUIVER,
        SACK: CarryItemsFBX.SACK,
        EMPTY: "EMPTY",
    }
}

export const AnimationsOptions = {
    CHOP: Animations.CHOP,
    DASH: Animations.DASH,
    IDLE: Animations.IDLE,
    JUMP: Animations.JUMP,
}