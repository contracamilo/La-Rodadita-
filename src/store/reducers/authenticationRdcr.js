import Swal from 'sweetalert2'

const initState = {
    authError: null
  }
  
  const authReducer = (state = initState, action) => {
    switch(action.type){
      case 'LOGIN_ERROR':
        console.log('login error');
        Swal.fire(
            '¡Upps!',
            'algo salio mal, verifica tus datos y vuelve a intentar!',
            'error'
        )
        return {
          ...state,
          authError: 'Login failed'
        }
      case 'LOGIN_SUCCESS':
        console.log('login success');
        return {
          authError: null
        }
      default:
        return state
    }
  };
  
  export default authReducer;