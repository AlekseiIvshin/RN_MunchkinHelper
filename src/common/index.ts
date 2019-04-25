import { Rule } from "../state/RulesStorage";

const Routes = {
    ItemsList: "itemsList",
    AddItem: "addItem",
    Rules: "rules",
}

const colors = {
    primary: "#424242",
    accent: "#9E9E9E",
    primaryDark: "#212121",
    primaryLight: "#616161",
    background: "#E0E0E0",
}

enum ItemTypes {
    None = 'none',
    Head = 'head',
    Body = 'body',
    OneHanded = 'one-handed',
    TwoHanded = 'two-handed',
    Boots = 'boots',
    Bonus = 'bonus',
}

enum Rules {
    One_TwoHanded = "one_twohanded",
    One_Big = "one_big",
    Check_Gender = "check_gender",
}

interface IItem {
    id: string;
    name: string;
    type: ItemTypes;
    bonus: number;
    isBig: boolean;
}

interface IRule {
    name: Rules;
    value: boolean;
}

interface Munchkin {
    name: string;
    level: number;
    bonusSum: number;
    gender: "female" | "male";
}

interface Storage {
    getData: () => any;
    setData: (data: any) => void;
}

interface IItemsStorage extends Storage {
    allItems: IItem[];
    totalBonus: number;
    addItem: (item: IItem) => any;
}

interface IRulesStorage extends Storage {
    allRules: IRule[];
    toggleRule: (update: IRule) => any;
    version: number;
}

interface Store {
    itemsStorage: IItemsStorage;
    rulesStorage: IRulesStorage;
}

export {
    Routes, 
    colors, 
    IItem, 
    IRule, 
    ItemTypes, 
    Munchkin, 
    Storage, 
    IItemsStorage, 
    IRulesStorage, 
    Store, 
    Rules
}