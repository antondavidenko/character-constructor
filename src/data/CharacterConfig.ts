import { CarryItemsFBX } from "./CarryItems";

export type CharacterConfig = { 
    hairFBX: string,
    hairColor: number,
    faceTexture: string,
    clothesTexture: string,
    skinColor: string,
    leftHandSlot: CarryItemsFBX
    rightHandSlot: CarryItemsFBX,
    backSlot: CarryItemsFBX,
    bodyTypeId: string,
};