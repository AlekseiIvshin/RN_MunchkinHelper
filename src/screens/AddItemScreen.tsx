import * as React from "react";
import {useState} from "react";
import { View, Text, FlatList, TextInput, Button, StyleSheet, Switch } from "react-native";
import {Formik} from "formik";
import uuid from "uuid/v4";
import { IItem, ItemTypes, colors, Routes, IItemsStorage } from "../common";
import ItemView from "../components/ItemView";
import {observer} from "mobx-react";
import { Item } from "../state/ItemsStorage";
import TypeOption from "../components/TypeOption";
import { number } from "prop-types";
import Counter from "../components/Counter";

const typesMap = [
    {type: ItemTypes.Bonus, title: "Bonus"},
    {type: ItemTypes.Head, title: "Head"},
    {type: ItemTypes.OneHanded, title: "One-handed"},
    {type: ItemTypes.TwoHanded, title: "Two-handed"},
    {type: ItemTypes.Boots, title: "Boots"},
    {type: ItemTypes.Body, title: "Body"},
]

interface AddItemScreenProps {
    store: IItemsStorage;
    navigation: any;
}

const AddItemScreen = observer((props: AddItemScreenProps) => {
    const onSubmit = (values, {resetForm}) => {
        props.store.addItem(values);
        props.navigation.navigate(Routes.ItemsList);
        resetForm();
    }

    return (
        <View style={styles.container}>
            <Formik 
                initialValues={{name: "", bonus: 0, type: ItemTypes.Bonus, isBig: false}}
                onSubmit={onSubmit}
            >
            {
                formProps => (
                    <React.Fragment>
                        <TextInput
                            placeholder="Name"
                            onChangeText={formProps.handleChange('name')}
                            onBlur={formProps.handleBlur('name')}
                            value={formProps.values.name}
                            style={styles.input}
                        />
                        <View style={styles.optionsContainer}>
                            <Text style={styles.label}>Bonus:</Text>
                            <Counter
                                value={formProps.values.bonus}
                                name={"bonus"}
                                type={typeof number}
                            />
                        </View>
                        <View style={styles.optionsContainer}>
                            <Text style={styles.label}>Is big:</Text>
                            <Switch
                                value={formProps.values.isBig}
                                onValueChange={formProps.handleChange('isBig')}
                            />
                        </View>
                        <View style={styles.typesContainer}>
                            {typesMap.map(item=> (
                                <TypeOption 
                                    key={item.type} 
                                    onPress={formProps.handleChange('type')} 
                                    value={item.type} 
                                    title={item.title} 
                                    name={"type"}
                                    type={typeof ItemTypes}
                                />
                            ))}
                        </View>
                        <Button onPress={formProps.handleSubmit as any} title="Submit" color={colors.accent} />
                    </React.Fragment>
                )
            }
            </Formik>
        </View>
    );
})

const styles = StyleSheet.create({
    container: {
        padding: 8,
    },
    optionsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginVertical: 16,
    },
    typesContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginVertical: 16,
    },
    input: {
        fontSize: 18,
        margin: 8,
    },
    label: {
        fontSize: 18,
        marginVertical: 16,
    }
})

export default AddItemScreen;