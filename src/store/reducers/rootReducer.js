import authReducer from './authenticationRdcr'
import tripReducer from './tripRdcr'
import commentReducer from './commentReducer'
import profileReducer from './profileRdcr'
import blogReducer from './blogRdcr'
import searchReducer from './searchReducer'

import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'





const rootReducer = combineReducers({
    auth: authReducer,
    trip: tripReducer,
    comments: commentReducer,
    user: profileReducer,
    blogs: blogReducer,
    search: searchReducer,
    firestore: firestoreReducer, 
    firebase: firebaseReducer, 
})

export default rootReducer
