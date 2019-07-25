import Swal from 'sweetalert2'

const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_USER':
            return action.payload
        case 'TRIP_STATUS':
            return {
                ...state,
                trips: action.payload
            }
        case 'USER_STATUS':
            return {
                ...state,
                user: action.payload
            }
        case 'LOGIN_ERROR':
            Swal.fire(
                '¡upps!',
                '¡Hubo un Error!',
                'Error'
            )
            return {
                ...state,
                authError: '¡Ups revisa tus datos y vuelve a intentarlo!'
            }
        case 'LOGIN_SUCCESS':
            return {
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            Swal.fire(
                '¡Adios!',
                '¡Has salido de la aplicación!',
                'info'
            )
            return state
        case 'SIGNUP_SUCCESS':
            Swal.fire(
                '¡Bienvenido!',
                '¡Has creado una cuenta en La Rodadita!',
                'success'
            )
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            return {
                ...state,
                authError: action.err.message
            }
        case 'RECOVER_SUCCESS':
            Swal.fire(
                '¡Atención!',
                '¡Te enviaremos un correo con los pasos a seguir!',
                'info'
            )
            window.history.back();
            return state
        case 'CHANGE_SUCCESS':
            Swal.fire(
                '¡Genial!',
                '¡Has restaurado tu contaseña!',
                'success'
            )
            window.history.back();
            return state
        default:
            return state
    }
};

export default authReducer;