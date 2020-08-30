import * as THREE from 'three';
import { loadFBX } from '../../../utils/loadFBX';
import { CDN_ROOT } from '../../../components/storage/utils/loadFilesList';

const ANIMATIONS_FOLDER = 'animations/';

export class CharacterAnimation {

    private animationAction: THREE.AnimationAction;
    private mixer: THREE.AnimationMixer;
    private clock: THREE.Clock = new THREE.Clock();

    async init(characterGroup: THREE.Group, fileId:string) {
        this.mixer = new THREE.AnimationMixer(characterGroup);
        await this.setAnimation(fileId);
        this.animationAction.play();
    }

    private async setAnimation(fileId:string) {
        let animation = await loadFBX(ANIMATIONS_FOLDER + fileId + ".FBX", CDN_ROOT);
        this.animationAction = this.mixer.clipAction((animation as any).animations[0]);
    }

    async resetAnimation(fileId:string) {
        const lastAction = this.animationAction;
        await this.setAnimation(fileId);
        lastAction.fadeOut(0.5)
        this.animationAction.reset();
        this.animationAction.fadeIn(0.5)
        this.animationAction.play();
    }

    update (): boolean {
        if (this.mixer) {
            this.mixer.update(this.clock.getDelta());
        }
        return this.mixer !== undefined;
    }

}