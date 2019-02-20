import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const initState = {
    trips: [
        {
            id:'1',
            title: 'La rodadita',
            description: 'Hello Darkness my old friend',
            arriveDate: '02/09/19',
            returnDate: '02/11/19',
            arrivePoint: 'Plaza de Bolivar',
            returnPoint: 'Plaza de Op',
            travelTime: '2 horas',
            carSits: '2',
            termsC: 'on'
        },
        {
            id:'2',
            title: 'La Luu',
            description: 'naked bodies in the park toguether',
            arriveDate: '02/09/19',
            returnDate: '02/11/19',
            arrivePoint: 'Plaza de Bolivar',
            returnPoint: 'Plaza de Op',
            travelTime: '2 horas',
            carSits: '4',
            termsC: 'on'
        },
        {
            id:'3',
            title: 'La Joha',
            description: 'lorepm ipsum molenia',
            arriveDate: '02/09/19',
            returnDate: '02/11/19',
            arrivePoint: 'Plaza de Bolivar',
            returnPoint: 'Plaza de Op',
            travelTime: '2 horas',
            carSits: '3',
            termsC: 'on'
        }
    ]
}

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
        case 'ADD_TRIP_ERROR' :
            console.log('created trip erroe', action.err)
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