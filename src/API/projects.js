const URL = 'https://senasoft.fabricadesoftware.co/api';

export const APIprojects = () => {
    let request = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    return fetch(`${URL}/proyectos`, request)
        .then(response => response.json());
}