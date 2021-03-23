import { FolderContext } from "../UIControlsComponent";
import { getAnimationsOptions } from "../model/UIOptions";
import { characterPresetsStorage } from "@antondavidenko/modular-character-threejs/dist/components/storage/CharacterPresetsStorage";

export function addGeneral(context: FolderContext) {
    addRotation(context);
    addAnimations(context);
    addShowDebugAxis(context);
    randomPresets(context);
    exportPresets(context);
    //importPresets();
}

function addRotation(context: FolderContext) {
    context.gui.add(context, 'rotation', -1*Math.PI, 1*Math.PI).onChange((value) => {
        context.character.rotation.y = value;
    });
}

function addAnimations(context: FolderContext) {
    context.gui.add(context, 'animation', getAnimationsOptions()).onChange((value) => {
        context.character.resetAnimation(value);
    });
}

function addShowDebugAxis(context: FolderContext) {
    context.gui.add(context, "showDebugAxis").onChange((value) => {
        context.axesHelper.visible = value;
    });
}

function randomPresets(context: FolderContext) {
    var obj = { randomPresets: () => {
        const configObject = characterPresetsStorage.getRandomCharacterConfig();
        context.character.setConfig(configObject);
    }};
    context.gui.add(obj,'randomPresets');
}

function exportPresets(context: FolderContext) {
    var obj = { exportPresets: () => {
        const stringData = JSON.stringify(context.character.getConfig())
        console.log(stringData);
    }};
    context.gui.add(obj,'exportPresets');
}

