import {RESPUESTA_LOGIN} from "../actions/login";

export const LoginReducer = (state = {}, action) => {
    switch (action.type) {
        case RESPUESTA_LOGIN:
            return{
                ...state,
                respuesta : action.respuesta
            }
            break;
        default :
            return state;
    }
}