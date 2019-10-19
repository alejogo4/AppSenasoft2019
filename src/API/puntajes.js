import { URL } from './URL';

export const APIpuntajes = async (id_categoria) => {

    let request = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    return fetch(`${URL}/obtener/puntajes/${id_categoria}`, request)
        .then(response => response.json());
}