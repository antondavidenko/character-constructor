import { FolderContext } from "../UIControlsComponent";
import { SlotsCategories } from "../model/UIOptions";
import { updateDatDropdown } from "../utils/updateDatDropdown";
import { Character } from "../../character/CharacterComponent";
import { CarryItemsCategories } from "../../../components/storage/model/CarryItems";
import { characterAssetsStorage } from "../../../components/storage/CharacterAssetsStorage";

let slotsCategories = {
    rightHandSlot: CarryItemsCategories.SWORDS,
    leftHandSlot: CarryItemsCategories.SHIELDS,
    backSlot: CarryItemsCategories.BACKPACKS,
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

    slotsItemsId.rightHandSlot = characterAssetsStorage.getItems(CarryItemsCategories.SWORDS)[0],
    slotsItemsId.leftHandSlot = characterAssetsStorage.getItems(CarryItemsCategories.SHIELDS)[0],
    slotsItemsId.backSlot = characterAssetsStorage.getItems(CarryItemsCategories.BACKPACKS)[0],


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
    root.add(slotsCategories, slotId, SlotsCategories[slotId]).onChange((value) => {
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