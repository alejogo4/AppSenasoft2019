import {
    sendRefrigerio
} from "../../API/refrigerio";
import {Toast} from "native-base";


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
            Toast.show({
                text: respuesta.data,
                buttonText: "Ok",
                type: "success",
                duration: 5000
            });
            dispatch(respuesta(respuesta.data));

        } else {
            Toast.show({
                text: respuesta.data,
                buttonText: "Ok",
                type: "danger",
                duration: 5000
            });
            dispatch(error(respuesta.datos));
        }
    });
}
