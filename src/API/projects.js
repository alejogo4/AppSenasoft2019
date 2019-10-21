import { URL, TOKEN } from './URL';

export const APIprojects = async () => {

    const token = await TOKEN();

    let request = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    };

    return await fetch(`${URL}/proyectos`, request)
        .then(response => response.json());
}