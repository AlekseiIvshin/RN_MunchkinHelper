const Routes = {
    ItemsList: "itemsList",
    AddItem: "addItem",
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

interface IItem {
    id: string;
    name: string;
    type: ItemTypes;
    bonus: number;
    isBig: boolean;
}
interface Munchkin {
    name: string;
    level: number;
    bonusSum: number;
    gender: "female" | "male";
}

interface Store {
    getData: () => any;
    setData: (data: any) => void;
}

export {Routes, colors, IItem, ItemTypes, Munchkin, Store}