import { NavigationActions } from 'react-navigation';
import { DrawerActions } from 'react-navigation-drawer';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

function openDrawer(routeName, params) {
  _navigator.dispatch(DrawerActions.openDrawer());
}

// add other navigation functions that you need and export them

export default {
  navigate,
  setTopLevelNavigator,
  openDrawer
};