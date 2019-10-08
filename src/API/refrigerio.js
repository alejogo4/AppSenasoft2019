import { URL, TOKEN } from './URL';

export const sendRefrigerio = async data => {
    const token = await TOKEN();

    let request = {
        method: 'POST',
        body:JSON.stringify(data),
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    };

    return fetch(`${URL}/registrosRefrigerio`, request)
        .then(response => response.json());
}