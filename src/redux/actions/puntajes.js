import {
    APIpuntajes
} from "../../API/puntajes";

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

export const obtener_puntajes = (categoria_id) => dispatch => {

    return APIpuntajes(categoria_id).then(resp => {
        if (resp.ok) {
            dispatch(respuesta(resp.data));
        } else {
            dispatch(error(resp.data));
        }
    }).catch(r=>{
        console.log(e)
    });
}
