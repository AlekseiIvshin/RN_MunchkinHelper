import * as React from 'react';
import MainNavigator from "./screens/mainNavigator";
import {createAppContainer} from "react-navigation";
import {Platform, StyleSheet, Text, View} from 'react-native';
import Persistor from './components/Persistor';
import ItemsStorage from './state/ItemsStorage';

const AppContainer = createAppContainer(MainNavigator)

const storages = {
  "items": ItemsStorage,
}

export default class App extends React.Component {
  render() {
    return (
      <Persistor renderLoading={this._renderLoading} storages={storages}>
        <AppContainer/>
      </Persistor>
    )
  }

  _renderLoading = () => {
    return (<View style={styles.container}><Text>Loading...</Text></View>);
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
