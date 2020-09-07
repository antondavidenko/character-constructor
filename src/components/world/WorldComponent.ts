import { addSkyBox } from "./parts/SkyBox";
import { addWater } from "./parts/Water";
import { addGround } from "./parts/Ground";

export const GROUND_SCALE = 200;

export class WorldComponent {

    constructor(private scene: THREE.Scene) {
        addSkyBox(this.scene);
        addGround(this.scene);
        addWater(this.scene);
    }

}