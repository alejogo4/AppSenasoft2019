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
    return sendRefrigerio(data).then(resp => {

        if (resp.ok) {
            Toast.show({
                text: resp.data,
                buttonText: "Ok",
                type: "success",
                duration: 5000
            });
            dispatch(respuesta(resp.data));

        } else {
            Toast.show({
                text: resp.data,
                buttonText: "Ok",
                type: "danger",
                duration: 5000
            });
            dispatch(error(resp.datos));
        }
    });
}
