import { Toast } from "native-base";

import NavigationService from './../../services/NavigationService';
import { sendLogin } from "../../API/login";

export const LOGIN = "LOGIN";
export const RESPUESTA_LOGIN = "RESPUESTA_LOGIN";

export const respuestaLogin = respuesta => {
    return {
        type: RESPUESTA_LOGIN,
        respuesta
    };
};

export const validarLogin = data => {
    return dispatch => {
        sendLogin(data).then(respuesta => {
            console.log(respuesta, data);
            if (respuesta.ok) {
                NavigationService.navigate('Home');
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
};