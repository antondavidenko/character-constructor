import { CharacterConfig } from "./CharacterConfig";
import { HairFBX, HairColors } from "./Hair";
import { Clothes, SkinColors, Eyes, Mouth, BodiesCollectionId, ClothesPalette } from "./Body";
import { CarryItemsFBX } from "./CarryItems";

export const defaultCharackterConfig:CharacterConfig = {
    hairFBX: HairFBX.CASUAL,
    hairColor: HairColors[2],
    clothesTexture: Clothes[4],
    skinColor: SkinColors[2],
    eyesTexture: Eyes[17],
    mouthTexture: Mouth[0],
    clothesColor1: ClothesPalette[0],
    clothesColor2: ClothesPalette[1],
    leftHandSlot: CarryItemsFBX.SHIELDSMALL,
    rightHandSlot: CarryItemsFBX.DAGGER,
    backSlot: CarryItemsFBX.SACK,
    bodyTypeId: BodiesCollectionId.HUMAN,
}