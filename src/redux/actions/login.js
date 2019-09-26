import {
    Toast
} from "native-base";

import {
    AsyncStorage
} from 'react-native';

import NavigationService from './../../services/NavigationService';
import {
    sendLogin
} from "../../API/login";

export const GET_TOKEN = "GET_TOKEN";
export const GET_USER = "GET_USER";
export const LOADING = "LOADING";
export const ERROR = "ERROR";

export const token = (token) => ({
    type: GET_TOKEN,
    token,
});

export const user = (user) => ({
    type: GET_USER,
    user,
});

export const loading = bool => ({
    type: LOADING,
    isLoading: bool,
});

export const error = error => ({
    type: ERROR,
    error,
});

export const getToken = () => dispatch => {
    return AsyncStorage.getItem('token')
        .then((data) => {
            dispatch(loading(false));
            dispatch(token(data));
        })
        .catch((err) => {
            dispatch(loading(false));
            dispatch(error(err.message || 'ERROR'));
        })
}

export const getUser = () => dispatch => {
    return AsyncStorage.getItem('user')
        .then((data) => {
            dispatch(loading(false));
            dispatch(user(JSON.parse(data)));
        })
        .catch((err) => {
            dispatch(loading(false));
            dispatch(error(err.message || 'ERROR'));
        })
}

const guardarToken = (data) => dispatch => {
    AsyncStorage.setItem('token', data.token)
        .then((data) => {
            dispatch(loading(false));
        })
        .catch((err) => {
            dispatch(loading(false));
            dispatch(error(err.message || 'ERROR'));
        })
}

const guardarDatosUsuario = (data) => dispatch => {
    AsyncStorage.setItem('user', JSON.stringify(data))
        .then((data) => {
            dispatch(loading(false));
        })
        .catch((err) => {
            dispatch(loading(false));
            dispatch(error(err.message || 'ERROR'));
        })
}

export const removerToken = () => dispatch => {
    return AsyncStorage.removeItem('token')
        .then((data) => {
            dispatch(token(null));
            dispatch(loading(false));
        })
        .catch((err) => {
            dispatch(loading(false));
            dispatch(error(err.message || 'ERROR'));
        })
}

export const validarLogin = data => dispatch => {

    sendLogin(data).then(respuesta => {

        dispatch(loading(false));

        if (respuesta.ok) {
            dispatch(guardarToken(respuesta));
            dispatch(guardarDatosUsuario(respuesta));
            NavigationService.navigate('Profile');
        } else {
            Toast.show({
                text: respuesta.mensaje,
                buttonText: "Ok",
                type: "danger"
            });
        }
        //dispatch(respuestaLogin(respuesta));
    });
};