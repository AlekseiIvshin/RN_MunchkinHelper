import * as React from "react";
import {View, Text, StyleSheet} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { withFormikControl } from "react-native-formik";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ItemTypes, colors } from "../common";
import TypeIcon from "./TypeIcon";

const iconColor = '#E0E0E0'

interface TypeOptionProps {
    title: string;
    onPress: (type: ItemTypes) => any;
    value: ItemTypes,
    setFieldValue?: (value: ItemTypes) => void,
}

const TypeOption = (props: TypeOptionProps) => {
    return (
        <TouchableOpacity onPress={props.setFieldValue.bind(this, props.value)} style={styles.container}>
            <TypeIcon type={props.value} size="medium" color={iconColor}/>
            <Text style={styles.title}>{props.title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        alignItems: "center",
        backgroundColor: colors.accent,
        margin: 8,
        borderRadius: 8,
    },
    title: {
        color: iconColor,
        fontSize: 18,
    }
})

export default withFormikControl(TypeOption);