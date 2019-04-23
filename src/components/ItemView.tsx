import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { IItem, colors, ItemTypes } from "../common";
import TypeIcon from "./TypeIcon";

interface ItemViewProps {
    item: IItem;
}

export default (props: ItemViewProps) => {
    return (
    <View style={styles.container}>
        <View>
            <Text style={styles.label}>{props.item.name}</Text>
            <Text style={styles.label}>{`${props.item.bonus>0 ? `+`:``}${props.item.bonus}`}</Text>
        </View>
        {props.item.type !== ItemTypes.None && <TypeIcon type={props.item.type} size="medium" color={colors.background}/>}
    </View>)
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        backgroundColor: colors.primaryLight,
        margin: 8,
        padding: 8,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    label: {
        fontSize: 18,
        color: colors.background,
    },
})