import { HairFBX, HairColors } from "./Hair";
import { Clothes, Eyes, Mouth, SkinColors, BodiesCollectionId, ClothesPalette } from './Body';
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
    hairColor: HairColors,
    clothesTexture: Clothes,
    clothesColor1: ClothesPalette,
    clothesColor2: ClothesPalette,
    eyesTexture: Eyes,
    mouthTexture: Mouth,
    skinColor: SkinColors,
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

export const AnimationsOptions = Animations;