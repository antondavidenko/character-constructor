import { FolderContext } from "../UIControlsComponent";
import { SlotsCategories } from "../model/UIOptions";
import { updateDatDropdown } from "../utils/updateDatDropdown";
import { Character } from "../../character/CharacterComponent";
import { characterAssetsStorage } from "../../../components/storage/CharacterAssetsStorage";

let slotsCategories = {
    rightHandSlot: 2,
    leftHandSlot: 1,
    backSlot: 0,
}

let slotsControlsUI = {
    rightHandSlot: null,
    leftHandSlot: null,
    backSlot: null,
}

let slotsItemsId = {
    rightHandSlot: '',
    leftHandSlot: '',
    backSlot: '',
}

let character: Character;

export function addSlots(context: FolderContext) {
    slotsItemsId.rightHandSlot = characterAssetsStorage.getItems(2)[0],
    slotsItemsId.leftHandSlot = characterAssetsStorage.getItems(1)[0],
    slotsItemsId.backSlot = characterAssetsStorage.getItems(0)[0],

    character = context.character;
    let slots = context.gui.addFolder('SLOTS');

    let rightSlot = slots.addFolder('RIGHT');
    setupCarryItemSlotCategory(rightSlot, "rightHandSlot");
    slotsControlsUI.rightHandSlot = setupCarryItemSlot(rightSlot, "rightHandSlot");

    let leftSlot = slots.addFolder('LEFT');
    setupCarryItemSlotCategory(leftSlot, "leftHandSlot");
    slotsControlsUI.leftHandSlot = setupCarryItemSlot(leftSlot, "leftHandSlot");

    let backSlot = slots.addFolder('BACK');
    setupCarryItemSlotCategory(backSlot, "backSlot");
    slotsControlsUI.backSlot = setupCarryItemSlot(backSlot, "backSlot");
}

function setupCarryItemSlotCategory(root, slotId: string) {
    const list = characterAssetsStorage.getItemsCategoriesAllowedToSlotType(SlotsCategories[slotId]);
    root.add(slotsCategories, slotId, list).onChange((value) => {
        updateDatDropdown(slotsControlsUI[slotId], characterAssetsStorage.getItems(value));
        setupCarryItemSlotCallback(slotId, characterAssetsStorage.getItems(value)[0]);
    });
}

function setupCarryItemSlot(root, slotId: string) {
    return root.add(slotsItemsId, slotId, characterAssetsStorage.getItems(slotsCategories[slotId]))
        .onChange(setupCarryItemSlotCallback.bind(this, slotId));
}

function setupCarryItemSlotCallback(slotId, value) {
    character.setupCarryItemSlot(slotId, value);
}