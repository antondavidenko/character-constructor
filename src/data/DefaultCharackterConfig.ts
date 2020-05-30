import { CharacterConfig } from "./CharacterConfig";
import { HairFBX, HairColors } from "./Hair";
import { BodyTextures } from "./Body";
import { CarryItemsFBX } from "./CarryItems";

export const defaultCharackterConfig:CharacterConfig = {
    hairFBX: HairFBX.HAIR1,
    hairColor: HairColors.BROWN,
    bodyTexture: BodyTextures.CASUAL,
    leftHandSlot: CarryItemsFBX.SHIELDSMALL,
    rightHandSlot: CarryItemsFBX.DAGGER,
    backSlot: CarryItemsFBX.SACK,
}