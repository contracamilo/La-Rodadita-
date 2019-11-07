import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'


export const actionCodeSettings = {
    url: 'https://larodadita.com/#/cambiar-contraseña',
    handleCodeInApp: true,
    //dynamicLinkDomain: 'example.page.link'
};

var config = {
 // paste here the config info
};


firebase.initializeApp(config);
firebase.firestore().settings({})

export const database = firebase.database().ref('/User/Trips')
export const auth = firebase.auth()
export const storage = firebase.storage()
export const firestore = firebase.firestore()
export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const twitterProvider = new firebase.auth.TwitterAuthProvider()
export const facebookProvider = new firebase.auth.FacebookAuthProvider()
export default firebase;
