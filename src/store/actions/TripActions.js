import { database } from '../../config/fbConfig';


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




export const getTrips = () => {
    console.log('hey')
    return (dispatch)  => {
         
        database.on('value', snapshot => {
          console.log(snapshot.val());
        })
        .then(() => {
            dispatch( {type: 'GET_TRIPS', payload: snapshot.val()})
        }).catch((err) => {
            dispatch( {type: 'ADD_TRIP_ERROR',err})
        }) 
        
 
     }
 }

 /*
export const createTrip = trip => {
    return (dispatch, getState, { getFirebase }) => { 
        const profile = getState().firebase.profile; 
        const authorId = getState().firebase.auth.uid;
        
        database.push({
            ...trip,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId, 
            createdAt: new Date()
        })
        .then(() => {
            dispatch( {type: 'ADD_TRIP',trip})
        }).catch((err) => {
            dispatch( {type: 'ADD_TRIP_ERROR',err})
        }) 
    }
}
*/

export const deleteTrip = id => {
    return (dispatch, getState, { getFirebase, getFirestore })  => {
        
        const firestore = getFirestore()
        const docRef = id;
        
        firestore.collection('trips').doc(docRef).delete()
        .then(() => {
            dispatch( {type: 'REMOVE_TRIP', id})
        }).catch((err) => {
            dispatch( {type: 'ADD_TRIP_ERROR',err})
        })
    }
}

export const editTrip = (id, trip) => {
    
    const firestore = getFirestore()
    console.log(id, trip);
    return (dispatch, getState, { getFirebase, getFirestore })  => {
    
    }
}






