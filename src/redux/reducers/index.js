import { combineReducers } from 'redux';
import { LoginReducer } from './login';
import  {ProjectsReducer} from './projects';
import { TabsReducer } from './tabs';
import {RefrigerioReducer} from './refrigerio';
import { EquipajeReducer } from './equipaje';
import { HotelReducer } from './hotel';
import { PuntajesReducer } from './puntajes';

export default combineReducers({
    login: LoginReducer,
    proyectos:ProjectsReducer,
    tabs:TabsReducer,
    refrigerio:RefrigerioReducer,
    equipaje:EquipajeReducer,
    hotel:HotelReducer,
    puntaje: PuntajesReducer
});