import Swal from 'sweetalert2'

const initState = {}

const profileReducer = (state = initState, action) => {
    switch (action.type) {
         case 'EDIT_PROFILE' :
            console.log('edited profile', action.userProfile)
            Swal.fire(
                '¡Perfecto!',
                'Has editado tu perfil!',
                'success'
            )
            return state
        case 'EDIT_PROFILE_ERROR' :
            console.log('edit profile error', action.err)
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


export default profileReducer