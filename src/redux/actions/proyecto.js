import {APIprojects} from '../../API/projects';

export const GET_PROJECTS = "GET_PROJECTS";
export const ERROR = "ERROR";

export const projects = projects => ({
    type: GET_PROJECTS,
    projects,
});

export const error = error => ({
    type: ERROR,
    error,
});

export const getProjects = () => dispatch => {
    return APIprojects().then(respuesta => {

        //dispatch(loading(false));

        if (respuesta.ok) {

            dispatch(projects(respuesta.data));
            //NavigationService.navigate('Home');
        } else {

        }
        //dispatch(respuestaLogin(respuesta));
    });
}