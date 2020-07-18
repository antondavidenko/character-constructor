import { setTextureByImagesList } from '../../utils/setTextureByImage';
import { FaceTextureX, FaceTextureY } from '../../data/Body';
import { CharacterConfig } from '../../data/CharacterConfig';
import { setScaleByVector3 } from '../../utils/helpers';
import { BodiesCollection } from '../../data/Body';

const CLOTHES_TEXTURE_FOLDER = 'body/clothes/';
const FACES_TEXTURE_FOLDER = 'body/faces/';

export async function setupBodyTexture(characterGroup: THREE.Group, config: CharacterConfig) {
    setTextureByImagesList(
        characterGroup.getObjectByName("Base"),
        [
            { file: CLOTHES_TEXTURE_FOLDER + config.clothesTexture }, 
            { file: FACES_TEXTURE_FOLDER + config.faceTexture, 
              x: FaceTextureX, 
              y: FaceTextureY,
            }
        ], 
        config.skinColor,
    );
}

export function setupBodyType(characterGroup: THREE.Group, head: THREE.Object3D, config: CharacterConfig) {
    setScaleByVector3(characterGroup, BodiesCollection[config.bodyTypeId].body);
    setScaleByVector3(head, BodiesCollection[config.bodyTypeId].head);
    head.position.x = BodiesCollection[config.bodyTypeId].headOffset;
}