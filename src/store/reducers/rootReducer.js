import authReducer from './authenticationRdcr'
import tripReducer from './tripRdcr'
import carReducer  from './carRdcr'
import profileReducer from './profileRdcr'
import blogReducer from './blogRdcr'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'




const rootReducer = combineReducers({
   
    auth: authReducer,
    trip: tripReducer,
    profile: profileReducer,
    blogs: blogReducer,
    car: carReducer,
    firestore: firestoreReducer, 
    firebase: firebaseReducer, 
})

export default rootReducer
