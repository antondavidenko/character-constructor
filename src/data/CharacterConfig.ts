import { CarryItemsFBX } from "./CarryItems";

export type CharacterConfig = { 
    hairFBX: string,
    hairColor: number,
    eyesTexture: string,
    mouthTexture: string,
    clothesTexture: string,
    clothesColor1: string,
    clothesColor2: string,
    skinColor: string,
    leftHandSlot: CarryItemsFBX
    rightHandSlot: CarryItemsFBX,
    backSlot: CarryItemsFBX,
    bodyTypeId: string,
};