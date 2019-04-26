import * as React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import _ from "lodash";
import { IItem, IItemsStorage, colors } from "../common";
import ItemView from "../components/ItemView";
import {observer} from "mobx-react";
import { Item } from "../state/ItemsStorage";
import { signify } from "../utils";
import WearableView from "../components/WearableView";

interface ItemsListProps {
    store: IItemsStorage
}

const renderItem = ({item}:{item: IItem}) => <ItemView item={item}/>

const ItemsListScreen = observer((props: ItemsListProps) => {
    return (
        <React.Fragment>
            <View style={styles.headerContainer}>
                <Text style={styles.totalBonus}>Total bonus: {signify(props.store.totalBonus)}</Text>
                <View style={styles.wearableContainer}>
                    {_.map(props.store.wearables, item => <WearableView key={item.name} {...item} />)}
                </View>
            </View>
            <FlatList
                data={props.store.allItems}
                renderItem={renderItem}
                extraData={props.store.totalBonus}
            />
        </React.Fragment>
    );
})

const styles = StyleSheet.create({
    totalBonus: {
        fontSize: 24,
        margin: 8,
    },
    wearableContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    headerContainer: {
        backgroundColor: colors.primary
    }
})

export default ItemsListScreen;