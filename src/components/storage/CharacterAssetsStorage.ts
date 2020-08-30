
import * as THREE from 'three';
import { BodyType } from '../character/model/BodyType';
import { loadList } from './utils/loadFilesList';

export enum BodyTypeId {
    HOBBIT = 'HOBBIT',
    HUMAN = 'HUMAN',
    OGR = 'OGR',
};

export enum ASSET_LIST {
    ANIMATIONS = 'animations',
    EYES = 'eyes',
    MOUTH = 'mouth',
    CLOTHES = 'clothes',
    BASE = 'base',
    HATS = 'hats',
    HEADDECOR = 'headdecor',
    HAIRMALE = 'hairmale',
    HAIRFEMALE = 'hairfemale',
}

export enum COLORS_LIST {
    SKIN = 'skin',
    CLOTHES = 'clothes',
    HAIR = 'hair',
}

export enum SlotType {
    HAND = 'hand',
    BACK = 'back',
};

type ItemCategory = { id: string, hand: boolean, back: boolean }

class CharacterAssetsStorage {

    private cdnConfig: any;

    getList(listId: string): string[] {
        return this.cdnConfig.lists[listId];
    }

    getColors(colorsId: string): string[] {
        return this.cdnConfig.colors[colorsId];
    }

    getItems(categoryNumber: number): string[] {
        const categoryId = this.cdnConfig.carryitems.categories[categoryNumber].id;
        return this.cdnConfig.carryitems[categoryId];
    }

    getItemsCategoriesAllowedToSlotType(slotType: SlotType): number[] {
        const result = [];
        this.cdnConfig.carryitems.categories.forEach((category: ItemCategory, id: number) => {
            if (category[slotType] === true) {
                result.push(id);
            }
        });
        return result;
    }

    private getBodiesCollection(): Map<BodyTypeId, BodyType> {
        return new Map([
            [ BodyTypeId.HOBBIT, {
                body: new THREE.Vector3(.01, .01, .01),
                head: new THREE.Vector3(1, 1, 1),
                headOffset: 41,
            }],
            [ BodyTypeId.HUMAN, {
                body: new THREE.Vector3(.01, .015, .01),
                head: new THREE.Vector3(.6, .5, .7),
                headOffset: 28,
            }],
            [ BodyTypeId.OGR, {
                body: new THREE.Vector3(.015, .018, .015),
                head: new THREE.Vector3(.5, .4, .6),
                headOffset: 24,
            }]
        ]);
    }

    getBodyTypeById(bodyTypeId: BodyTypeId): BodyType {
        return this.getBodiesCollection().get(bodyTypeId);
    }

    initStorage(): void {
        loadList((data: any) => {
            this.cdnConfig = data;
        });
    }

}

export const characterAssetsStorage = new CharacterAssetsStorage();