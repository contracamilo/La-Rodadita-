export const createTrip = (trip) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        
        const firestore = getFirestore()
        
        firestore.collection('trips').add({
            ...trip,
            authorFirstName: 'Camilo',
            authorLastName: 'Rivera', 
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch( {type: 'ADD_TRIP',trip})
        }).catch((err) => {
            dispatch( {type: 'ADD_TRIP_ERROR',err})
        })
        
        
    }
}