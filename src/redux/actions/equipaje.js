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

export const validarEquipaje = data => dispatch => {

}