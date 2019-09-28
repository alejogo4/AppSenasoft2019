import {APIprojects} from '../../API/projects';

export const GET_PROJECTS = "GET_PROJECTS";
export const ERROR = "ERROR";
export const LOADING = "LOADING";

export const projects = projects => ({
    type: GET_PROJECTS,
    projects,
});

export const error = error => ({
    type: ERROR,
    error,
});

export const loading = bool=>({
    type: LOADING,
    isLoading:bool,
})

export const getProjects = () => dispatch => {
    return APIprojects().then(respuesta => {
        if (respuesta.ok) {
            dispatch(loading(false));
            dispatch(projects(respuesta.data));
        } else {
            dispatch(error(respuesta.mensaje));
        }
    }).catch(err=>{
        dispatch(loading(false));
        dispatch(error(err.message || 'ERROR'));
    });
}