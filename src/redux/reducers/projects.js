import {GET_PROJECTS,ERROR} from '../actions/proyecto';


export const ProjectsReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_PROJECTS:
            return { ...state, projects: action.projects };
        case ERROR:
            return { ...state, error: action.error };
        default:
            return state;
    }
}