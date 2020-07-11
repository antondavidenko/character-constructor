import * as THREE from 'three';
import Stats from 'three/examples/jsm/libs/stats.module';
import { Illumination } from './objects/Illumination';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Character } from './objects/Character';
import { getCamera } from './utils/getCamera';
import { getRender } from './utils/getRender';
import { getControls } from './utils/getControls';
import { UIControls } from './objects/UIControls';
import { Panorama } from './objects/Panorama';

export class MainScreen {

    private scene: THREE.Scene;
    private camera: THREE.PerspectiveCamera;
    private renderer: THREE.WebGLRenderer;
    private controls: OrbitControls;
    private character: Character;
    private stats: Stats;
    private axesHelper: THREE.AxesHelper;

    constructor() {
        this.prepareScene();
        this.addSceneObjects();
        this.animate();
    }

    private addSceneObjects() {
        this.stats = Stats();
        document.body.appendChild(this.stats.dom);
        this.axesHelper = new THREE.AxesHelper(5);
        this.scene.add(this.axesHelper);
        this.character = new Character(this.scene);
        new UIControls(this.character, this.axesHelper);
        new Panorama(this.scene);
        this.axesHelper.visible = false;
    }

    private prepareScene() {
        this.scene = new THREE.Scene();
        new Illumination(this.scene);
        this.camera = getCamera();
        this.renderer = getRender();
        this.controls = getControls(this.camera, this.renderer);
        window.addEventListener('resize', this.onWindowResize.bind(this), false);
    }

    private onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderScreen();
    }

    private renderScreen() {
        this.renderer.render(this.scene, this.camera);
    }

    private animate() {
        requestAnimationFrame(this.animate.bind(this));
        this.controls.update();
        this.renderScreen();
        this.stats.update();
        this.character.update();
    }

}