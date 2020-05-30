import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export function getControls(camera, renderer) {
    let controls = new OrbitControls(camera, renderer.domElement);
    controls.screenSpacePanning = true;
    controls.target.set(0, 1, 0);
    return controls;
}