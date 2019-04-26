import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { IItem, colors, ItemTypes } from "../common";
import { signify } from "../utils";
import TypeIcon from "./TypeIcon";

interface WearableProps extends IItem {}

export default (props: WearableProps) => {
    return (
        <View style={styles.container}>
            <TypeIcon type={props.type} size={"small"} color={colors.accent}/>
            <Text style={styles.label}>{signify(props.bonus)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        backgroundColor: colors.primaryLight,
        margin: 8,
        paddingVertical: 8,
        paddingHorizontal: 16,
        flexDirection: "row",
    },
    label: {
        fontSize: 18,
        color: colors.background,
    },
})