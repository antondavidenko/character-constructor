import { CharacterConfig } from "./CharacterConfig";
import { HairFBX, HairColors } from "./Hair";
import { Clothes, SkinColors, Faces, FaceTextureY, FaceTextureX, BodiesCollectionId } from "./Body";
import { CarryItemsFBX } from "./CarryItems";

export const defaultCharackterConfig:CharacterConfig = {
    hairFBX: HairFBX.CASUAL,
    hairColor: HairColors.BROWN,
    clothesTexture: Clothes.CASUAL,
    skinColor: SkinColors.BLACK,
    faceTexture: Faces.POKER,
    leftHandSlot: CarryItemsFBX.SHIELDSMALL,
    rightHandSlot: CarryItemsFBX.DAGGER,
    backSlot: CarryItemsFBX.SACK,
    bodyTypeId: BodiesCollectionId.HUMAN,
}