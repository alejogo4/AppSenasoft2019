import { URL, TOKEN } from './URL';

export const contarEquipaje = async () => {

    const token = await TOKEN();

    let request = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    };

    return fetch(`${URL}/equipaje/cantidad`, request)
        .then(response => response.json());
}

export const ingresarEquipaje = async data => {

    const token = await TOKEN();

    let request = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    };
    return fetch(`${URL}/equipaje/ingreso`, request)
        .then(response => response.json());
}

export const salidaEquipaje = async data => {

    const token = await TOKEN();

    let request = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    };

    return fetch(`${URL}/equipaje/salida`, request)
        .then(response => response.json());
}