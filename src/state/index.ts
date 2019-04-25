import ItemsStorage from "./ItemsStorage";
import RulesStorage from "./RulesStorage";
import { Store } from "../common";

const store: Store = {
    itemsStorage: ItemsStorage,
    rulesStorage: RulesStorage,
}

export default store;