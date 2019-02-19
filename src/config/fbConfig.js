import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth' 


var config = {
    apiKey: "AIzaSyCDJNEJyuxGF5FOymDHghGyXbtUM1hQzU4",
    authDomain: "la-rodadita.firebaseapp.com",
    databaseURL: "https://la-rodadita.firebaseio.com",
    projectId: "la-rodadita",
    storageBucket: "la-rodadita.appspot.com",
    messagingSenderId: "60275534575"
  };




  firebase.initializeApp(config);
  firebase.firestore().settings({})

  export default firebase