import { observable, computed, action, autorun } from "mobx";
import uuid from "uuid/v4";
import {IItem, ItemTypes, Store, IItemsStorage, GameRule} from "../common/index";

export class Item implements IItem {
    id;
    @observable name;
    @observable type;
    @observable bonus;
    @observable isBig;
    @observable isEquipped;
    @observable brokenRules: {[key in GameRule]: boolean};
}

class ItemsStorage implements IItemsStorage {
    @observable items = [];

    @computed get allItems() {
        return this.items;
    }

    @computed get totalBonus() {
        return this.items.reduce((acc, item) => {
            acc+=item.bonus;
            return acc;
        },0)
    }

    @computed get wearables() {
        return this.items.filter(item => item.type !== ItemTypes.None && item.type !== ItemTypes.Bonus);
    }

    @action addItem(item: IItem) {
        this.items.push({id:uuid(),...item});
    }

    getData = () => this.items;
    setData = (data: any) => {
        this.items = data;
    }
}

export default new ItemsStorage();