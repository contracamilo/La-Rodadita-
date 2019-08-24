export const sendDate = (searchArrive, searchReturn) => (dispatch, { getState }) => {
    console.log(searchArrive, searchReturn)
    dispatch({
        type: 'GET_DATE',
        payload: {searchArrive, searchReturn}
    });
}