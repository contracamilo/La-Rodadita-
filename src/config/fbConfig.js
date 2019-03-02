import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth' 


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

  export default firebase