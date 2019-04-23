import { observable, computed, action } from "mobx";
import uuid from "uuid/v4";
import {IItem, ItemTypes} from "../common/index";

export class Item implements IItem {
    id;
    @observable name;
    @observable type;
    @observable bonus;
}

class ItemsStorage {
    @observable items = [{id: "test1", name: "test 1", type: ItemTypes.None, bonus: -1},{id: "test2", name: "test 2", type: ItemTypes.Head, bonus: 3}];

    @computed get allItems() {
        return this.items;
    }

    @computed get totalBonus() {
        return this.items.reduce((acc, item) => {
            acc+=item.bonus;
            return acc;
        },0)
    }

    @action addItem(item: IItem) {
        this.items.push({id:uuid(),...item});
    }
}

export default new ItemsStorage();