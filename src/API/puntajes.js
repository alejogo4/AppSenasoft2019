import { URL } from './URL';

export const APIpuntajes = (id_categoria) => {

    let request = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    return fetch(`${URL}/obtener/puntaje/${id_categoria}`, request)
        .then(response => response.json());
}