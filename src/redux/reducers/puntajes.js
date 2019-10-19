import {GET_RESP,ERROR} from '../actions/puntajes';


export const PuntajesReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_RESP:
            return { ...state, respuesta: action.resp };
        case ERROR:
            return { ...state, error: action.error };
        default:
            return state;
    }
}