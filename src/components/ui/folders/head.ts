import { FolderContext } from "../UIControlsComponent";
import { updateDatDropdown } from "../utils/updateDatDropdown";
import { HeadSlotsCategories } from "../model/UIOptions";
import { HairCategories, HairCollection } from "../../character/model/Head";

let slotsCategories = {
    hair: HairCategories.MALE,
}

let slotsControlsUI = {
    hair: null,
}

let slotsItemsId = {
    hair: HairCollection.get(HairCategories.MALE)[0],
}

let _context: FolderContext;

export function addHead(context: FolderContext) {
    let head = context.gui.addFolder('HEAD');
    _context = context;

    setupHeadSlotCategory(head, "hair", context);
    slotsControlsUI.hair = setupCarryItemSlot(head, "hair", context);
    context.addCharacterConfig(head, 'hatFBX').onChange(context.character.setupHat.bind(context.character));
    context.addCharacterConfig(head, 'headDecor1FBX').onChange(context.character.headDecor1.bind(context.character));
    context.addCharacterConfig(head, 'headDecor2FBX').onChange(context.character.headDecor2.bind(context.character));

    context.addColorPicker(head, 'hairColor').onChange(setupHair.bind(context));
    context.addCharacterConfig(head, 'eyesTexture').onChange(context.character.setupBodyTexture.bind(context.character));
    context.addCharacterConfig(head, 'mouthTexture').onChange(context.character.setupBodyTexture.bind(context.character));
}

function setupHair() {
    if (_context.characterConfig.hairFBX !== "Bold") {
        _context.character.setupHair(_context.characterConfig.hairFBX, _context.characterConfig.hairColor);
    } else {
        _context.character.setupHair(null, _context.characterConfig.hairColor);
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