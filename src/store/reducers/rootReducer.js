import authReducer from './authenticationRdcr'
import tripReducer from './tripRdcr'
import carReducer  from './carRdcr'
import profileReducer from './profileRdcr'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    trip: tripReducer,
    profile: profileReducer,
    car: carReducer
})

export default rootReducer
