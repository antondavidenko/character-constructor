import { CharacterConfig } from "./CharacterConfig";
import { HairFBX, HairColors } from "./Hair";
import { Clothes, SkinColors, Faces, BodiesCollectionId } from "./Body";
import { CarryItemsFBX } from "./CarryItems";

export const defaultCharackterConfig:CharacterConfig = {
    hairFBX: HairFBX.CASUAL,
    hairColor: HairColors[2],
    clothesTexture: Clothes[4],
    skinColor: SkinColors[2],
    faceTexture: Faces[4],
    leftHandSlot: CarryItemsFBX.SHIELDSMALL,
    rightHandSlot: CarryItemsFBX.DAGGER,
    backSlot: CarryItemsFBX.SACK,
    bodyTypeId: BodiesCollectionId.HUMAN,
}