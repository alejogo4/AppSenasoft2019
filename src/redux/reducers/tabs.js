import {GET_TABS} from './../actions/tabs';

export const TabsReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_TABS:
            return { ...state, stateTabs: action.stateTabs };
        default:
            return state;
    }
}