import * as React from "react";
import {AsyncStorage, AppState} from "react-native";
import _ from "lodash";
import {Store} from "../common/index";
import App from "../App";

interface PersistorProps {
    storages: {[key: string]: Store};
    renderLoading: () => JSX.Element;
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
            const rawValue = await AsyncStorage.getItem("@persisted_state");
            const value = JSON.parse(rawValue);
            _.forIn(value, (value, key)=> {
                this.props.storages[key].setData(value);
            })
            console.log("State was rehydrated", rawValue);
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
            });
            await AsyncStorage.setItem("@persisted_state", JSON.stringify(storeData));
            console.log("State was persisted");
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