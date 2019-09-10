

//import NavigationService from './../../services/NavigationService';
import {
    sendRefrigerio
} from "../../API/refrigerio";



export const GET_RESP = "GET_RESP";
export const ERROR = "ERROR";

export const respuesta = (resp) => ({
    type: GET_RESP,
    resp,
});

export const error = error => ({
    type: ERROR,
    error,
});

export const validarRefrigerio = data => dispatch => {
    return sendRefrigerio(data).then(respuesta => {
        if (respuesta.ok) {
            dispatch(respuesta(respuesta.data));
        } else {

        }
    });
}
