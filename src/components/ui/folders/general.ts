import { FolderContext } from "../UIControls";
import { AnimationsOptions } from "../../../model/ui/UIOptions";

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
        context.character.setupRotation(value);
    });
}

function addAnimations(context: FolderContext) {
    context.gui.add(context, 'animation', AnimationsOptions).onChange((value) => {
        context.character.resetAnimation(value);
    });
}

function addShowDebugAxis(context: FolderContext) {
    context.gui.add(context, "showDebugAxis").onChange((value) => {
        context.axesHelper.visible = value;
    });
}

function randomPresets(context: FolderContext) {
    var obj = { randomPresets:function(){ console.log("randomPresets") }};
    context.gui.add(obj,'randomPresets');
}

function exportPresets(context: FolderContext) {
    var obj = { exportPresets:function(){ console.log("exportPresets") }};
    context.gui.add(obj,'exportPresets');
}