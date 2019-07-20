import React, {Component} from "react";
import Setup from "./src/boot/setup";

import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

export default class App extends Component {
    componentDidMount() {
        SplashScreen.hide()
    }

    render() {
        return (<Provider store={store}>
            <Setup/>
        </Provider>);
    }
}