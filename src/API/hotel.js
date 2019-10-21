import { URL, USER, TOKEN } from './URL';

export const APIhoteles = async () => {

    const user = await USER();
    const token = await TOKEN();

    let usuario = JSON.parse(user);

    let request = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    };

    return await fetch(`${URL}/asignacion/hotel/${usuario.persona.id}`, request)
        .then(response => response.json());
}