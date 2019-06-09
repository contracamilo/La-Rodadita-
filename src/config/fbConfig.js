import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth' 
import 'firebase/database' 


var config = {
    apiKey: "AIzaSyC6ek0wQize9j3rBcj5ePrJqd0vBi_FC1w",
    authDomain: "rodaditaapp.firebaseapp.com",
    databaseURL: "https://rodaditaapp.firebaseio.com",
    projectId: "rodaditaapp",
    storageBucket: "rodaditaapp.appspot.com",
    messagingSenderId: "550096953187"
  };


  firebase.initializeApp(config);
  firebase.firestore().settings({})
  
  export const database = firebase.database().ref('/User/Trips')
  export const auth = firebase.auth()
  export const googleProvider = new firebase.auth.GoogleAuthProvider()
  export const twitterProvider = new firebase.auth.TwitterAuthProvider()
  export default firebase;