import * as React from 'react';
import MainNavigator from "./screens/mainNavigator";
import {createAppContainer} from "react-navigation";
import {Platform, StyleSheet, Text, View} from 'react-native';

const AppContainer = createAppContainer(MainNavigator)

export default class App extends React.Component {
  render() {
    return <AppContainer/>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
