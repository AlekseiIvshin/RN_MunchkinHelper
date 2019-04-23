import * as React from "react";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ItemTypes, colors } from "../common";

interface TypeIconProps {
    type: ItemTypes;
    size: "small"|"medium"|"large";
    color: string;
}

const sizesMap = {
    small: 18,
    medium: 36,
    large: 64,
}

const typesMap ={
    [ItemTypes.Bonus]: "magic",
    [ItemTypes.Head]: "hard-hat",
    [ItemTypes.OneHanded]: "hand-pointer",
    [ItemTypes.TwoHanded]: "hand-peace",
    [ItemTypes.Boots]: "shoe-prints",
    [ItemTypes.Body]: "tshirt",
};


const TypeIcon = (props: TypeIconProps) => <Icon name={typesMap[props.type]} size={sizesMap[props.size]} color={props.color}/>

TypeIcon.defaultProps = {
    type: ItemTypes.None,
    size: "medium",
    color: colors.accent,
}

export default TypeIcon;