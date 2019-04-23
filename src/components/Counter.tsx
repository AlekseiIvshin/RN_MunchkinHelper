import * as React from "react";
import {View, Text, StyleSheet} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { withFormikControl } from "react-native-formik";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ItemTypes, colors } from "../common";

const iconColor = '#E0E0E0'

interface CounterProps {
    value: number,
    setFieldValue?: (value: ItemTypes) => void,
}

const Counter = (props: CounterProps) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={props.setFieldValue.bind(this, props.value-1)} style={styles.control}>
                <Icon name={"chevron-left"} size={36} color={colors.accent}/>
            </TouchableOpacity>
            <Text style={styles.title}>{props.value}</Text>
            <TouchableOpacity onPress={props.setFieldValue.bind(this, props.value+1)} style={styles.control}>
                <Icon name={"chevron-right"} size={36} color={colors.accent}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
    },
    control: {
        padding: 8,
    },
    title: {
        color: colors.accent,
        fontSize: 24,
        marginHorizontal: 8,
    }
})

export default withFormikControl(Counter);