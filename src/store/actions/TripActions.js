export const createTrip = (trip) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        
        const firestore = getFirestore()
        const profile = getState().firebase.profile 
        const authorId = getState().firebase.auth.uid

        
        firestore.collection('trips').add({
            ...trip,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName, 
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch( {type: 'ADD_TRIP',trip})
        }).catch((err) => {
            dispatch( {type: 'ADD_TRIP_ERROR',err})
        })
    }
}

export const deleteTrip = (trip) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        
        const firestore = getFirestore()
        const authorId = getState().firebase.auth.uid

         firestore.ref(`trips/${authorId}`).remove()
        .then(() => {
            dispatch( {type: 'REMOVE_TRIP',trip})
        }).catch((err) => {
            dispatch( {type: 'ADD_TRIP_ERROR',err})
        })
        
    }
}






