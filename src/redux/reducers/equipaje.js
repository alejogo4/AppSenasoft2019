import {GET_RESPUESTA, CONT_EQUIPAJE ,ERROR, EQUIPAJE} from '../actions/equipaje';


export const EquipajeReducer = (state={}, action) => {
    switch (action.type) {
        case GET_RESPUESTA:
            return { ...state, respuesta: action.respuesta };
        case EQUIPAJE:
            return { ...state, equipaje: action.eq };
        case CONT_EQUIPAJE:
            return { ...state, contador: action.cont };
        case ERROR:
            return { ...state, error: action.error };
        default:
            return state;
    }
}