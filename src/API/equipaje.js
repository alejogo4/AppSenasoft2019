// const URL = 'https://senasoft.fabricadesoftware.co/api';
const URL = 'https://95a6efd5.ngrok.io/api';

export const contarEquipaje = () => {
    let request = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    return fetch(`${URL}/equipaje/cantidad`, request)
        .then(response => response.json());
}

export const ingresarEquipaje = data => {
    let request = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return fetch(`${URL}/equipaje/ingreso`, request)
        .then(response => response.json());
}

export const salidaEquipaje = data => {
    let request = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    };

    return fetch(`${URL}/equipaje/salida`, request)
        .then(response => response.json());
}