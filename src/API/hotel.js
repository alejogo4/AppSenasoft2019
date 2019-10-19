import { URL, USER } from './URL';

export const APIhoteles = async () => {

    const user = await JSON.parse(USER());
    const token = await TOKEN();

    let request = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    };

    return await fetch(`${URL}/asignacion/hotel/${user.persona.id}`, request)
        .then(response => response.json());
}