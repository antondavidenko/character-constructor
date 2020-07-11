import { setTextureByImagesList } from '../../utils/setTextureByImage';
import { FaceTextureX, FaceTextureY } from '../../data/Body';
import { CharacterConfig } from '../../data/CharacterConfig';
import { setScaleByVector3 } from '../../utils/helpers';
import { BodiesCollection } from '../../data/Body';

export async function setupBodyTexture(characterGroup: THREE.Group, config: CharacterConfig) {
    setTextureByImagesList(
        characterGroup.getObjectByName("Base"),
        [
            {file: config.clothesTexture}, 
            {file: config.faceTexture, x: FaceTextureX, y: FaceTextureY}
        ], 
        config.skinColor,
    );
}

export function setupBodyType(characterGroup: THREE.Group, head: THREE.Object3D, config: CharacterConfig) {
    setScaleByVector3(characterGroup, BodiesCollection[config.bodyTypeId].body);
    setScaleByVector3(head, BodiesCollection[config.bodyTypeId].head);
    head.position.x = BodiesCollection[config.bodyTypeId].headOffset;
}