import * as React from "react";
import {Text} from "react-native"
import { createBottomTabNavigator } from "react-navigation";
import { Routes } from "../common";
import ItemsListScreen from "./ItemsListScreen";
import Ionicons from 'react-native-vector-icons/Ionicons';
import store from "../state";
import AddItemScreen from "./AddItemScreen";
import RulesScreen from "./RulesScreen";

export default createBottomTabNavigator({
    [Routes.ItemsList]: {
        screen: (props) => <ItemsListScreen {...props} store={store.itemsStorage}/>,
        navigationOptions: () => ({title: "Items",}),
    },
    [Routes.AddItem]: {
        screen: (props) => <AddItemScreen {...props} store={store.itemsStorage}/>,
        navigationOptions: () => ({title: "Add",}),
    },
    [Routes.Rules]: {
        screen: (props) => <RulesScreen {...props} store={store.rulesStorage}/>,
        navigationOptions: () => ({title: "Rules",}),
    },
},
{
    initialRouteName: Routes.ItemsList,

    defaultNavigationOptions: ({navigation}) => {
        const {routeName} = navigation.state;
        return {
            tabBarIcon: ({focused, tintColor}) => {
                const IconComponent = Ionicons;
                switch(routeName) {
                    case Routes.ItemsList: return (<IconComponent name={"ios-body"} size={25} color={tintColor}/>);
                    case Routes.AddItem: return (<IconComponent name={"ios-add"} size={25} color={tintColor}/>);
                    case Routes.Rules: return (<IconComponent name={"ios-settings"} size={25} color={tintColor}/>);
                }
            },
        }
    },
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
})

