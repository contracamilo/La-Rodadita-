import { auth, firebase, firestore, googleProvider, twitterProvider, facebookProvider } from '../../config/fbConfig'
import Swal from 'sweetalert2'

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


export const sendVerification = (email) => {
    return (dispatch, getState, { getFirebase }) => {

        const firebase = getFirebase();
        const user = firebase.auth().currentUser;

        if (user) {
            user.sendEmailVerification().then(function() {
                window.localStorage.setItem('emailForSignIn', email)
            }).catch(function(error) {
                console.log('error', error)
            });
        }
    }
}

export const signIn = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' });
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err })
        })

    }
}

export const recoverPass = (email, actionCodeSettings) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().sendPasswordResetEmail(email, actionCodeSettings)
            .then(() => {
                dispatch({ type: 'RECOVER_SUCCESS' });
            }).catch((error) => {
                dispatch({ type: 'LOGIN_ERROR', error })
            });



    }
}






export const changePass = (newPassword) => {
    return (dispatch, getState, { getFirebase }) => {

        const firebase = getFirebase();
        let user = firebase.auth().currentUser;


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
            console.log(err.code);
            dispatch({ type: 'SIGNUP_ERROR', err });
            if (err.code == 'auth/email-already-in-use') {
                Swal.fire(
                    'Ups!',
                    'la cuenta de correo que quieres usar ya esta en uso',
                    'error'
                )
            }

        });
    }
}


export const googleLogin = () => {
    auth.signInWithPopup(googleProvider)
        .then(resp => {
            const name = resp.user.displayName.split(' ');
            if (name) {
                return firestore.collection('users').doc(resp.user.uid).set({
                    firstName: name[0],
                    lastName: name[1],
                    initials: resp.user.displayName.substring(0, 2)
                });
            }
        }).catch((err) => {
            Swal.fire(
                'Ups!',
                `hubo un error inténtalo más tarde`,
                'error'
            )
        });
}

export const twitterLogin = () => {
    auth.signInWithPopup(twitterProvider)
        .then(resp => {
            const name = resp.user.displayName;

            if (name) {
                return firestore.collection('users').doc(resp.user.uid).set({
                    firstName: name,
                    lastName: '',
                    initials: name.substring(0, 2)
                });
            }
        }).catch((err) => {
            Swal.fire(
                'Ups!',
                `hubo un error inténtalo más tarde`,
                'error'
            )
        });
}

export const facebookLogin = () => {
    auth.signInWithPopup(facebookProvider)
        .then(resp => {
            const name = resp.user.displayName.split(' ');
            if (name) {
                return firestore.collection('users').doc(resp.user.uid).set({
                    firstName: name[0],
                    lastName: name[1],
                    initials: resp.user.displayName.substring(0, 2)
                });
            }

        }).catch((err) => {
            if (err.email) {
                Swal.fire(
                    'Ups!',
                    `Puede que tu cuenta ya este registrada con ${err.email} o hubo un error inténtalo de nuevo`,
                    'error'
                )
            }
        });
}