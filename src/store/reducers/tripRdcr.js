import Swal from 'sweetalert2'


const initState = {}

const tripReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TRIP':
            Swal.fire(
                '¡Perfecto!',
                '¡Has creado un nuevo viaje!',
                'success'
            )
            return state
        case 'EDIT_TRIP':
            Swal.fire(
                '¡Perfecto!',
                '¡Has editado tu viaje!',
                'success'
            )
            return state
        case 'REMOVE_TRIP':
            Swal.fire(
                '¡OH!',
                '¡Has eliminado un viaje!',
                'success'
            )
            return state
        case 'GET_TRIPS':
            return action.payload
        case 'TRIP_STATUS':
            return {
                ...state,
                trips: action.payload
            }
        case 'ADD_TRIP_ERROR':
            Swal.fire(
                '¡Uy!',
                '¡Algo salió mal, vuelve a intentar en un rato!',
                'error'
            )
            return state
        case 'GET_SUSCRIPTION':
            Swal.fire(
                '¡Perfecto!',
                'Te has suscrito a nuestro newsletter',
                'success'
            )
            return state
        case 'GET_SUSCRIPTION_ERROR':
            Swal.fire(
                '¡Uy!',
                '¡Algo salió mal, vuelve a intentar en un rato!',
                'error'
            )
            return state
        default:
            return state
    }
}



export default tripReducer