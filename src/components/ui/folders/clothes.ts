import { FolderContext } from "../UIControls";

export function addClothes(context: FolderContext) {
    let clothes = context.gui.addFolder('CLOTHES');
    context.addCharacterConfig(clothes, 'clothesTexture').onChange(context.character.setupBodyTexture.bind(context.character));
    context.addColorPicker(clothes, 'clothesColor1').onChange(context.character.setupBodyTexture.bind(context.character));
    context.addColorPicker(clothes, 'clothesColor2').onChange(context.character.setupBodyTexture.bind(context.character));
}