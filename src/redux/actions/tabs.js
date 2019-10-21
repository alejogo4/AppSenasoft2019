export const GET_TABS = "GET_TABS";

export const tabs = (stateTabs) => ({
    type: GET_TABS,
    stateTabs,
});

export const changeTab = data => dispatch =>{
    dispatch(tabs(data));
}
