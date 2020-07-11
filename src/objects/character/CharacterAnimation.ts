import * as THREE from 'three';
import { loadFBX } from '../../utils/loadFBX';
import { Animations } from '../../data/Animations';

export class CharacterAnimation {

    private animationAction: THREE.AnimationAction;
    private mixer: THREE.AnimationMixer;
    private clock: THREE.Clock = new THREE.Clock();

    async init(characterGroup: THREE.Group) {
        this.mixer = new THREE.AnimationMixer(characterGroup);
        await this.setAnimation(Animations.IDLE);
        this.animationAction.play();
    }

    private async setAnimation(fileId:string) {
        let animation = await loadFBX(fileId + ".FBX");
        this.animationAction = this.mixer.clipAction((animation as any).animations[0]);
    }

    async resetAnimation(fileId:string) {
        const lastAction = this.animationAction;
        await this.setAnimation(fileId);
        lastAction.stop();
        lastAction.fadeOut(1)
        this.animationAction.reset();
        this.animationAction.fadeIn(1)
        this.animationAction.play();
    }

    update (): boolean {
        if (this.mixer) {
            this.mixer.update(this.clock.getDelta());
        }
        return this.mixer !== undefined;
    }

}