const URL = 'https://senasoft.fabricadesoftware.co/api';

export const sendRefrigerio = data => {
    let request = {
        method: 'POST',
        body:JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    };

    return fetch(`${URL}/usuario`, request)
        .then(response => response.json());
}