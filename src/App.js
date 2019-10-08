import React from "react";
import { Root } from "native-base";

import NavigationService from './services/NavigationService';

// import { StackNavigator, DrawerNavigator } from "react-navigation";
import { createDrawerNavigator, createStackNavigator, createAppContainer } from "react-navigation";



import Home from "./screens/home/";
import SideBar from "./screens/sidebar";
import Login from "./screens/login";
import Proyecto from './screens/proyectos';
import Profile from './screens/profile';
import Refrigerios from './screens/refrigerios';
import Equipaje from './screens/equipaje';
import Informacion from './screens/information';
//Importaciones propias



const Drawer = createDrawerNavigator(
    {
        Home: { screen: Home },
        Equipaje: { screen: Equipaje },
        Proyecto:{screen:Proyecto},
        Profile:{screen:Profile},
        Refrigerios:{screen:Refrigerios},
        Informacion:{screen:Informacion},
        Asistencia : {screen:Home},
        HotelTransporte: {screen:Home}
    },
    {
        gesturesEnabled: true,
        initialRouteName: "Home",
        contentOptions: {
            activeTintColor: "#e91e63"
        },
        contentComponent: props => <SideBar {...props} />
    }
);

const AppNavigator = createStackNavigator(
    {
        Drawer: { screen: Drawer },
        Login:{screen:Login},
        Proyecto:{screen:Proyecto},
        Profile:{screen:Profile},
        Refrigerios:{screen:Refrigerios},
        Informacion:{screen:Informacion},
        Asistencia : {screen:Home},
        HotelTransporte: {screen:Home}
    },
    {
        initialRouteName: "Drawer",
        headerMode: "none"
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default () =>
    <Root>
        <AppContainer ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
        }} />
    </Root>;
