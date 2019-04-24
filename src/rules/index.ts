import _ from "lodash";
import { IItem, ItemTypes } from "../common";

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

export {
    oneTwoHanded,
}