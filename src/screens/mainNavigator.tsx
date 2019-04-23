import * as React from "react";
import {Text} from "react-native"
import { createBottomTabNavigator } from "react-navigation";
import { Routes } from "../common";
import ItemsListScreen from "./ItemsListScreen";
import Ionicons from 'react-native-vector-icons/Ionicons';
import store from "../state";
import AddItemScreen from "./AddItemScreen";

export default createBottomTabNavigator({
    [Routes.ItemsList]: {
        screen: (props) => <ItemsListScreen {...props} store={store.ItemsList}/>,
        navigationOptions: ({navigation}) => ({title: "Items",}),
    },
    [Routes.AddItem]: {
        screen: (props) => <AddItemScreen {...props} store={store.ItemsList}/>,
        navigationOptions: ({navigation}) => ({title: "Add",}),
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
                }
            },
        }
    },
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
})

