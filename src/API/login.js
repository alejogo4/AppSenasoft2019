const URL = 'https://senasoft.fabricadesoftware.co/api';

export const sendLogin = (data) => {
    let request = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    };

    return fetch(`${URL}/login`, request)
        .then(response => response.json());
}