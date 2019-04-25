import * as React from "react";
import { IRule, colors } from "../common";
import { View, Switch, Text, StyleSheet } from "react-native";
import { any } from "prop-types";

interface RuleOptionProps extends IRule {
    onToggle: (update: IRule) => any;
}

const RuleOption = (props: RuleOptionProps) => {

    const toggleRule = () => props.onToggle({name: props.name, value: !props.value});

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{props.name}</Text>
            <Switch
                value={props.value}
                onValueChange={toggleRule}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 16,
        paddingHorizontal: 8,
        marginHorizontal: 16,
        marginTop: 8,
        borderBottomWidth: 1,
        borderBottomColor: colors.accent,
    },
    label: {
        fontSize: 18,
    }
})

export default RuleOption;