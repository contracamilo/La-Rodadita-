import { database } from '../../config/fbConfig';
import axios from 'axios'

export const createTrip = (trip) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {

        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;

        const socialUser = getState().firebase.auth;
        let prov = socialUser.providerData[0].providerId;

        console.log(prov);

        if (prov == 'google.com' || prov == 'twitter.com') {
            firestore.collection('trips').add({
                    ...trip,
                    authorFirstName: socialUser.displayName,
                    authorLastName: '',
                    authorId: authorId,
                    createdAt: new Date()
                })
                .then(() => {
                    dispatch({ type: 'ADD_TRIP', trip })
                }).catch((err) => {
                    dispatch({ type: 'ADD_TRIP_ERROR', err })
                })
        }

        if (prov == 'facebook.com') {
            firestore.collection('trips').add({
                    ...trip,
                    authorFirstName: socialUser.displayName,
                    authorLastName: '',
                    authorId: authorId,
                    createdAt: new Date()
                })
                .then(() => {
                    dispatch({ type: 'ADD_TRIP', trip })
                }).catch((err) => {
                    dispatch({ type: 'ADD_TRIP_ERROR', err })
                })
        }

        if (prov !== 'facebook.com' && prov !== 'twitter.com') {
            firestore.collection('trips').add({
                    ...trip,
                    authorFirstName: profile.firstName,
                    authorLastName: profile.lastName,
                    authorId: authorId,
                    createdAt: new Date()
                })
                .then(() => {
                    dispatch({ type: 'ADD_TRIP', trip })
                }).catch((err) => {
                    dispatch({ type: 'ADD_TRIP_ERROR', err })
                })
        }

    }
}




export const getTrips = () => {
    return (dispatch) => {
        database.on('value', snapshot => {
                console.log(snapshot.val());
            })
            .then(() => {
                dispatch({ type: 'GET_TRIPS', payload: snapshot.val() })
            }).catch((err) => {
                dispatch({ type: 'ADD_TRIP_ERROR', err })
            })
    }
}


const mailingFunction = (mail) => {
    const url = `https://us-central1-rodaditaapp.cloudfunctions.net/sendMail?dest=${mail}`;

    axios.get(url)
        .then((resp) => console.log(resp))
        .catch((err) => console.log(err))
}


export const saveComment = (tripId, comment, mail) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {

        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;


        firestore.collection('comments').add({
                ...comment,
                authorFirstName: profile.firstName,
                authorLastName: profile.lastName,
                authorId: authorId,
                tripId: tripId,
                createdAt: new Date()
            })
            .then(() => {
                console.log('success', comment);
                mailingFunction(mail)

            }).catch((err) => {
                console.log(err)
            })
    }
}

export const submitMail = (mail) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {

        const firestore = getFirestore();

        firestore.collection('suscriptions').add({
                ...mail,
                createdAt: new Date()
            })
            .then(() => {
                dispatch({ type: 'GET_SUSCRIPTION', mail })
            }).catch((err) => {
                dispatch({ type: 'GET_SUSCRIPTION_ERROR', err })
            })
    }
}





export const deleteTrip = id => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {

        const firestore = getFirestore()
        const docRef = id;


        firestore.collection('trips').doc(docRef).delete()
            .then(() => {
                dispatch({ type: 'REMOVE_TRIP', id })
            }).catch((err) => {
                dispatch({ type: 'ADD_TRIP_ERROR', err })
            })
    }
}


export const editTrip = (id, trip) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {

        const firestore = getFirestore()
        const tripId = id;

        console.log(trip);
        console.log(id);

        firestore.collection('trips').doc(tripId).update(trip)
            .then(() => {
                dispatch({ type: 'EDIT_TRIP', trip })
            }).catch((err) => {
                dispatch({ type: 'ADD_TRIP_ERROR', err })
            })
    }
}