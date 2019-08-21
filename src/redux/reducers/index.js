import { combineReducers } from 'redux';
import { LoginReducer } from './login';
import  {ProjectsReducer} from './projects';

export default combineReducers({
    login: LoginReducer,
    proyectos:ProjectsReducer
});