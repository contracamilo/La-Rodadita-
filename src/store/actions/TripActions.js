export const createTrip = (trip) => {
    return (dispatch, getState) => {
        dispatch(
            {
                type: 'ADD_TRIP',
                trip
            }
        )
    }
}