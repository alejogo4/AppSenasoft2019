const URL = 'https://senasoft.fabricadesoftware.co/api/login';


export const sendLogin = ()=>{
    return fetch(URL)
        .then(response=>response.json())
        .then(data => data);
}