import {
    APIhoteles
} from "../../API/hotel";

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

export const obtener_hotel = () => dispatch => {

    return APIhoteles().then(respuesta => {
        if (respuesta.ok) {
            dispatch(respuesta(respuesta.data));
        } else {
            dispatch(error(respuesta.data));
        }
    }).catch(r=>{
        console.log(e)
    });
}
