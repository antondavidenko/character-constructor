import { FolderContext } from "../UIControls";

export function addBody(context: FolderContext) {
    let body = context.gui.addFolder('BODY');
    context.addCharacterConfig(body, 'baseFBX').onChange(context.character.reInit.bind(context.character));
    context.addCharacterConfig(body, 'bodyTypeId').onChange(context.character.setupBodyType.bind(context.character));
    context.addColorPicker(body, 'skinColor').onChange(context.character.setupBodyTexture.bind(context.character));
}