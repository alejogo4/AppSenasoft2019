import {GET_TOKEN, GET_USER, LOADING, ERROR} from "../actions/login";

export const LoginReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_TOKEN:
            return { ...state, token: action.token };
        case GET_USER:
            return { ...state, user: action.user };
        case LOADING:
            return { ...state, loading: action.isLoading };
        case ERROR:
            return { ...state, error: action.error };
        default:
            return state;
    }
}