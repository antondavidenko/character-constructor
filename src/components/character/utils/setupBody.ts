import { setTextureByImagesList } from '../../../utils/setTextureByImage';
import { CharacterConfig } from '../model/CharacterConfig';
import { setScaleByVector3 } from '../../../utils/helpers';
import { CDN_ROOT } from '../../../components/storage/utils/loadFilesList';

const FaceTextureX = 380;
const FaceTextureY = 143;

const CLOTHES_TEXTURE_FOLDER = 'body/clothes/';
const FACES_TEXTURE_FOLDER = 'head/faces/';

export async function setupBodyTexture(characterGroup: THREE.Group, config: CharacterConfig) {
    const canvasTesturesList = [];
    canvasTesturesList.push({
        image: CLOTHES_TEXTURE_FOLDER + config.clothesTexture
    });
    canvasTesturesList.push({
        mask: CLOTHES_TEXTURE_FOLDER + config.clothesTexture + '/color1',
        color: config.clothesColor1 
    });
    canvasTesturesList.push({
        mask: CLOTHES_TEXTURE_FOLDER + config.clothesTexture + '/color2',
        color: config.clothesColor2 
    });
    if (config.mouthTexture !== 'none') {
        canvasTesturesList.push({
            image: FACES_TEXTURE_FOLDER + config.mouthTexture,
            x: FaceTextureX,
            y: FaceTextureY,
        });
    }
    if (config.eyesTexture !== 'none') {
        canvasTesturesList.push({
            image: FACES_TEXTURE_FOLDER + config.eyesTexture,
            x: FaceTextureX,
            y: FaceTextureY,
        });
    }

    setTextureByImagesList(characterGroup.getObjectByName("Base"), canvasTesturesList, config.skinColor, CDN_ROOT);
}

export function setupBodyType(characterGroup: THREE.Group, head: THREE.Object3D, config: CharacterConfig) {
    setScaleByVector3(characterGroup, config.bodyType.body);
    setScaleByVector3(head, config.bodyType.head);
    head.position.x = config.bodyType.headOffset;
}