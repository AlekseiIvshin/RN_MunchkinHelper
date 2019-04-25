import * as React from "react";
import {AsyncStorage, AppState} from "react-native";
import _ from "lodash";
import {Storage, Store} from "../common/index";
import App from "../App";

interface PersistorProps {
    storages: Store;
    renderLoading: () => JSX.Element;
    config: {
        version: number;
    }
}

interface PersistorState {
    ready: boolean;
}

class Persistor extends React.Component<PersistorProps, PersistorState> {
    constructor(props){
        super(props);

        this.state = {
            ready: false,
        };
    }

    componentWillMount() {
        AppState.addEventListener('change', this._handleAppStateChange);
        if (!this.state.ready) {
            this._rehydrate();
        }
    }

    componentWillUnmount() {
        this._persist();
        AppState.removeEventListener('change', this._handleAppStateChange);
    }

    render() {
        if (!this.state.ready) {
            return this.props.renderLoading();
        }

        return this.props.children;
    }

    _rehydrate = async () => {
        try {
            const version = await AsyncStorage.getItem("@persisted_version");
            if (parseInt(version) === this.props.config.version) {
                const rawValue = await AsyncStorage.getItem("@persisted_state");
                console.log("Persistor: data rehydrated", rawValue)
                const value = JSON.parse(rawValue);
                _.forIn(value, (value, key)=> {
                    if (this.props.storages[key]){
                        this.props.storages[key].setData(value);
                    }
                })
            } else {
                console.log("Persistor: version updated")
                await AsyncStorage.setItem("@persisted_state", JSON.stringify({}));
            }
            this.setState({ready: true});
        } catch (e) {
            console.error(e);
        }
    }

    _persist = async () => {
        try {
            const storeData = _.reduce(this.props.storages, (acc, store, key)=> {
                acc[key]=store.getData();
                return acc;
            }, {});
            console.log("Persistor: persisting data", storeData);
            await AsyncStorage.setItem("@persisted_state", JSON.stringify(storeData));
            await AsyncStorage.setItem("@persisted_version", JSON.stringify(this.props.config.version));
            this.setState({ready: true});
        } catch (e) {
            console.error(e);
        }
    }

    _handleAppStateChange = (nextAppState: string) => {
        if (nextAppState !== "active") {
            this._persist();
        }
    }
}

export default Persistor;