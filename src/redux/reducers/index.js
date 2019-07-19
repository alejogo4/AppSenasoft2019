import {combineReducers} from 'redux';
import {LoginReducer} from './login';

export const  reducer = combineReducers({
    Login:LoginReducer
})