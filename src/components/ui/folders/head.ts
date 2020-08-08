import { FolderContext } from "../UIControls";
import { updateDatDropdown } from "../updateDatDropdown";
import { HeadSlotsCategories } from "../../../model/ui/UIOptions";
import { HairCategories, HairCollection } from "../../../model/character/Hair";

let slotsCategories = {
    hair: HairCategories.MALE,
}

let slotsControlsUI = {
    hair: null,
}

let slotsItemsId = {
    hair: HairCollection.get(HairCategories.MALE)[0],
}

export function addHead(context: FolderContext) {
    let head = context.gui.addFolder('HEAD');

    setupHeadSlotCategory(head, "hair", context);
    slotsControlsUI.hair = setupCarryItemSlot(head, "hair", context);

    context.addColorPicker(head, 'hairColor').onChange(setupHair.bind(context));
    context.addCharacterConfig(head, 'eyesTexture').onChange(context.character.setupBodyTexture.bind(context.character));
    context.addCharacterConfig(head, 'mouthTexture').onChange(context.character.setupBodyTexture.bind(context.character));
}

function setupHair() {
    if (this.characterConfig.hairFBX !== "Bold") {
        this.character.setupHeadSlot(this.characterConfig.hairFBX, this.characterConfig.hairColor);
    } else {
        this.character.setupHeadSlot(null, this.characterConfig.hairColor);
    }
}

function setupHeadSlotCategory(root, slotId: string, context: FolderContext) {
    root.add(slotsCategories, slotId, HeadSlotsCategories[slotId]).onChange((value) => {
        updateDatDropdown(slotsControlsUI[slotId], HairCollection.get(value));
        context.characterConfig.hairFBX = HairCollection.get(value)[0];
        setupHair.call(context);
    });
}

function setupCarryItemSlot(root, slotId: string, context: FolderContext) {
    return root.add(slotsItemsId, slotId, HairCollection.get(slotsCategories[slotId]))
        .onChange((value) => {
            context.characterConfig.hairFBX = value;
            setupHair.call(context);
        });
}