import {
    contarEquipaje,
    salidaEquipaje,
    ingresarEquipaje
} from '../../API/equipaje';

export const GET_RESPUESTA = "GET_RESPUESTA";
export const EQUIPAJE = "EQUIPAJE";
export const CONT_EQUIPAJE = "CONT_EQUIPAJE";
export const ERROR = "ERROR";

export const contador = (cont) => ({
    type: CONT_EQUIPAJE,
    cont,
});

export const equipaje = (eq) => ({
    type: EQUIPAJE,
    eq,
});

export const get_respuesta = (respuesta) => ({
    type: GET_RESPUESTA,
    respuesta
});

export const error = error => ({
    type: ERROR,
    error,
});

export const contar = () => dispatch => {
    return contarEquipaje().then(respuesta => {
        if (respuesta.ok) {
            dispatch(contador(respuesta.data.cantidad));
        }
    }).catch(e => {
        dispatch(error(e));
    });
}

export const ingreso = data => dispatch => {
    return ingresarEquipaje(data).then(resp => {
        dispatch(get_respuesta(resp));
    }).catch(e => {
        dispatch(error(e));
    });
}

export const salida = data => dispatch => {
    return salidaEquipaje(data).then(resp => {
        dispatch(get_respuesta(resp));
        dispatch(equipaje(resp.data));
    }).catch(e => {
        dispatch(error(e));
    });
}