import _ from "lodash";
import { IItem, ItemTypes, GameRule, EquipmentRule } from "../common";
import { Item } from "../state/ItemsStorage";

enum Rule {
    OnlyOne = "only_one",
}

const oneTwoHanded = (items: IItem) => {
    const twoHandedItems = _.filter(items, item => item.type === ItemTypes.TwoHanded);
    if (twoHandedItems.length > 1) {
        return {
            rule: Rule.OnlyOne,
            items: twoHandedItems
        }
    } 
    return null;
}

const counts = {
    [ItemTypes.Head]: 1,
    [ItemTypes.Body]: 1,
    [ItemTypes.Boots]: 1,
    [ItemTypes.TwoHanded]: 2,
    [ItemTypes.OneHanded]: 2,
}

const wearingCount = (items: Item): Item[] => {
    _.forIn(counts, (count, type)=> {
        const itemsOfType = _.filter(items, item => item.type === type);

        if (itemsOfType.length > count) {
            _.forEach(itemsOfType, item => {
                item.
            });
        }
    })


    _.map(items, item => {
        if (!counts[item.type]) {
            return item;
        }
        const sameType = _.filter(items, i => i.type === item.type).length;
        if (sameType > counts[item.type]) {
            return {
                ...item,
                brokenRules: {
                    ...item.brokenRules,
                    [EquipmentRule.]
                }
            }
        }
    })
}

export {
    oneTwoHanded,
}