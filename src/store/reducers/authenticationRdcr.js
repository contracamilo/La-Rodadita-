import Swal from 'sweetalert2'

const initState = {
    authError: null
  }
  
  const authReducer = (state = initState, action) => {
    switch(action.type){
      case 'GET_USER':
        return action.payload
      case 'TRIP_STATUS':
        return {...state, trips:action.payload}
      case 'USER_STATUS':
        return {...state, user:action.payload}
      case 'LOGIN_ERROR':
        console.log('login error');
        return {
          ...state,
          authError: 'Login failed'
        }
      case 'LOGIN_SUCCESS':
        return {
          authError: null
      }
      case 'SIGNOUT_SUCCESS':
        console.log('signout success');
        Swal.fire(
          '¡Adios!',
          '¡Has salido de la aplicacion!',
          'info'
        )
        return state
      case 'SIGNUP_SUCCESS':
        console.log('signup success')
        Swal.fire(
          '¡Bienvenido!',
          '¡Has creado una cuenta en la rodadita!',
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
      default:
        return state
    }
  };
  
  export default authReducer;