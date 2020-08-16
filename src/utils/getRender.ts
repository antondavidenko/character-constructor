import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { FilmPass } from 'three/examples//jsm/postprocessing/FilmPass.js';
import { BloomPass } from 'three/examples//jsm/postprocessing/BloomPass.js';

let composer;
let renderer;

export function getRender(scene, camera) {
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    document.body.appendChild(renderer.domElement);
    renderer.autoClear = false;

    var renderModel = new RenderPass( scene, camera );
    var effectBloom = new BloomPass( 1.25 );
    var effectFilm = new FilmPass( 0.35, 0.95, 2048, 0 );

    composer = new EffectComposer( renderer );

    composer.addPass( renderModel );
    composer.addPass( effectBloom );
    composer.addPass( effectFilm );

    return renderer;
}
