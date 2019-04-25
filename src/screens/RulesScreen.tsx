import * as React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import { IItem, IRulesStorage, IRule } from "../common";
import ItemView from "../components/ItemView";
import {observer} from "mobx-react";
import { Item } from "../state/ItemsStorage";
import { signify } from "../utils";
import RuleOption from "../components/RuleOption";

interface RulesScreenProps {
    store: IRulesStorage;
}

const RulesScreen = observer((props: RulesScreenProps) => {
    const renderItem = ({item}:{item: IRule}) => <RuleOption {...item} onToggle={props.store.toggleRule}/>
    return (
        <React.Fragment>
            <FlatList
                data={props.store.allRules}
                renderItem={renderItem}
                extraData={props.store.version}
            />
        </React.Fragment>
    );
})

export default RulesScreen;