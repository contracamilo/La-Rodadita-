import { auth, googleProvider, twitterProvider, facebookProvider } from '../../config/fbConfig'

export const getUser = () => {
    return dispatch => {
        dispatch({
            type: 'USER_STATUS',
            payload: true
        });
        auth.onAuthStateChanged(user => {
            dispatch({
                type: 'GET_USER',
                payload: user
            });
            dispatch({
                type: 'USER_STATUS',
                payload: false
            })

        })
    }
}

export const signIn = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' })
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err })
        })

    }
}

export const recoverPass = (email, actionCodeSettings) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
            .then(function() {
                window.localStorage.setItem('emailForSignIn', email);
                dispatch({ type: 'RECOVER_SUCCESS' });
            })
            .catch(function(error) {
                dispatch({ type: 'LOGIN_ERROR', error })
            });

    }
}




export const changePass = (newPassword) => {
    return (dispatch, getState, { getFirebase }) => {

        const firebase = getFirebase();
        let user = firebase.auth().currentUser;

        user.updatePassword(newPassword).then(function() {
            dispatch({ type: 'CHANGE_SUCCESS' });
        }).catch(function(error) {
            dispatch({ type: 'LOGIN_ERROR', error })
        });

    }
}



export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS' })
        });
    }
}


export const signUp = (newUser) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then(resp => {
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            });
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS' });
        }).catch((err) => {
            dispatch({ type: 'SIGNUP_ERROR', err });
        });
    }
}


export const googleLogin = () => auth.signInWithPopup(googleProvider)
export const twitterLogin = () => auth.signInWithPopup(twitterProvider)
export const facebookLogin = () => auth.signInWithPopup(facebookProvider)