import { setTextureByImagesList } from '../../../utils/setTextureByImage';
import { FaceTextureX, FaceTextureY } from '../model/Body';
import { CharacterConfig } from '../model/CharacterConfig';
import { setScaleByVector3 } from '../../../utils/helpers';
import { BodiesCollection } from '../model/Body';

const CLOTHES_TEXTURE_FOLDER = 'body/clothes/';
const FACES_TEXTURE_FOLDER = 'head/faces/';

export async function setupBodyTexture(characterGroup: THREE.Group, config: CharacterConfig) {
    setTextureByImagesList(
        characterGroup.getObjectByName("Base"),
        [
            { 
                file: CLOTHES_TEXTURE_FOLDER + config.clothesTexture
            },
            {
                file: CLOTHES_TEXTURE_FOLDER + config.clothesTexture + '/color1',
                colorMask: config.clothesColor1 
            },
            {
                file: CLOTHES_TEXTURE_FOLDER + config.clothesTexture + '/color2',
                colorMask: config.clothesColor2 
            },
            {
                file: FACES_TEXTURE_FOLDER + config.mouthTexture,
                x: FaceTextureX,
                y: FaceTextureY,
            },
            {
                file: FACES_TEXTURE_FOLDER + config.eyesTexture,
                x: FaceTextureX,
                y: FaceTextureY,
            },
        ],
        config.skinColor,
    );
}

export function setupBodyType(characterGroup: THREE.Group, head: THREE.Object3D, config: CharacterConfig) {
    setScaleByVector3(characterGroup, BodiesCollection[config.bodyTypeId].body);
    setScaleByVector3(head, BodiesCollection[config.bodyTypeId].head);
    head.position.x = BodiesCollection[config.bodyTypeId].headOffset;
}