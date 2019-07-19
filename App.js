import React from "react";
import Setup from "./src/boot/setup";

import SplashScreen from 'react-native-splash-screen';
import {Provider } from 'react-redux';
import {store} from 'react-redux';


export default class App extends React.Component {
    componentDidMount() {
        SplashScreen.hide()
    }

    render() {
        return
        <Provider store={store}>
            <Setup/>;
        </Provider>
    }
}