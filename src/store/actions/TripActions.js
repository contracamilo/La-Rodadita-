export const createTrip = (trip) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        dispatch( {type: 'ADD_TRIP',trip})
    }
}