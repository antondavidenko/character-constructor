import { FolderContext } from "../UIControlsComponent";
import { BodyTypeId, characterAssetsStorage } from "@antondavidenko/modular-character-threejs/dist/components/storage/CharacterAssetsStorage";
import { characterConfigOptions } from "../model/UIOptions";

let bodyTypeConfig = {
    bodyType: BodyTypeId.HUMAN,
}

export function addBody(context: FolderContext) {
    let body = context.gui.addFolder('BODY');
    context.addCharacterConfig(body, 'baseFBX').onChange(context.character.reInit.bind(context.character));
    body.add(bodyTypeConfig, 'bodyType', characterConfigOptions.bodyTypeId).onChange((value) => {
        const bodyType = characterAssetsStorage.getBodyTypeById(value);
        context.character.resetBodyType(bodyType);
    });
    context.addColorPicker(body, 'skinColor').onChange(context.character.setupBodyTexture.bind(context.character));
}