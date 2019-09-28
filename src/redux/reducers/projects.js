import {GET_PROJECTS,ERROR,LOADING} from '../actions/proyecto';


export const ProjectsReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_PROJECTS:
            return { ...state, projects: action.projects };
        case ERROR:
            return { ...state, error: action.error };
        case LOADING:
            return { ...state, loading: action.isLoading };
        default:
            return state;
    }
}