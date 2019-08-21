import { combineReducers } from 'redux';
import { LoginReducer } from './login';
import  {ProjectsReducer} from './projects';
import { TabsReducer } from './tabs';

export default combineReducers({
    login: LoginReducer,
    proyectos:ProjectsReducer,
    tabs:TabsReducer
});