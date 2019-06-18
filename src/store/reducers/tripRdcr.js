import Swal from 'sweetalert2'


const initState = {}

const tripReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TRIP' :
            console.log('created trip', action.trip)
            Swal.fire(
                '¡Perfecto!',
                'Has creado un nuevo viaje!',
                'success'
            )
            return state
        case 'EDIT_TRIP' :
            console.log('edited trip', action.trip)
            Swal.fire(
                '¡Perfecto!',
                'Has editado tu viaje!',
                'success'
            )
            return state
        case 'REMOVE_TRIP' :
            console.log('removed trip', action.trip)
            Swal.fire(
                '¡OH!',
                'Has eliminado un viaje!',
                'success'
            )
            return state
        case 'GET_TRIPS':
            console.log(action.payload)
            return action.payload
        case 'TRIP_STATUS':
            console.log(action.payload)
            return {
                ...state, 
                trips:action.payload
            }
        case 'ADD_TRIP_ERROR' :
            console.log('created trip error', action.err)
            Swal.fire(
                '¡Uy!',
                'algo salio mal, vuelve a intentar en un rato!',
                'error'
            )
            return state
        default:
            return state
    }
}



export default tripReducer