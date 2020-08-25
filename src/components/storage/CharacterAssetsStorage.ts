import { Animations } from './model/Animations';
import { CarryItemsCollection, CarryItemsCategories } from './model/CarryItems';
import { HairColors, Eyes, Mouth, HairCategories, AllHeadDecor, AllHats, HairCollection } from './model/Head';
import { ClothesPalette, SkinColors, BaseModelList, ClothesList, BodyTypeId, BodiesCollection } from './model/Body';
import { BodyType } from '../character/model/BodyType';

class CharacterAssetsStorage {

    getAnimationsList(): string[] {
        return Animations;
    }

    getCarryItemsByCategories(categoryId: CarryItemsCategories): string[] {
        return CarryItemsCollection.get(categoryId);
    }

    getBodyTypeById(bodyTypeId: BodyTypeId): BodyType {
        return BodiesCollection.get(bodyTypeId);
    }

    getHairsByCategories(categoryId: HairCategories): string[] {
        return HairCollection.get(categoryId);
    }

    getHairColors(): number[] {
        return HairColors;
    }

    getEyes(): string[] {
        return Eyes;
    }

    getMouth(): string[] {
        return Mouth;
    }

    getAllHeadDecor(): string[] {
        return AllHeadDecor;
    }

    getAllHats(): string[] {
        return AllHats;
    }

    getSkinColors(): string[] {
        return SkinColors;
    }

    getClothesPalette(): string[] {
        return ClothesPalette;
    }

    getBaseModelList(): string[] {
        return BaseModelList;
    }

    getClothesList(): string[] {
        return ClothesList;
    }

}

export const characterAssetsStorage = new CharacterAssetsStorage();
export { CarryItemsCategories };
export { HairCategories };
export { BodyTypeId };