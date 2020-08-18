import { FolderContext } from "../UIControlsComponent";
import { CarryItemsCategories, CarryItemsCollection } from "../../character/model/CarryItems";
import { SlotsCategories } from "../model/UIOptions";
import { updateDatDropdown } from "../utils/updateDatDropdown";
import { Character } from "../../character/CharacterComponent";

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
    rightHandSlot: CarryItemsCollection.get(CarryItemsCategories.SWORDS)[0],
    leftHandSlot: CarryItemsCollection.get(CarryItemsCategories.SHIELDS)[0],
    backSlot: CarryItemsCollection.get(CarryItemsCategories.BACKPACKS)[0],
}

let character: Character;

export function addSlots(context: FolderContext) {
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
        updateDatDropdown(slotsControlsUI[slotId], CarryItemsCollection.get(value));
        setupCarryItemSlotCallback(slotId, CarryItemsCollection.get(value)[0]);
    });
}

function setupCarryItemSlot(root, slotId: string) {
    return root.add(slotsItemsId, slotId, CarryItemsCollection.get(slotsCategories[slotId]))
        .onChange(setupCarryItemSlotCallback.bind(this, slotId));
}

function setupCarryItemSlotCallback(slotId, value) {
    value = value === "none" ? null : value;
    character.setupCarryItemSlot(slotId, value);
}