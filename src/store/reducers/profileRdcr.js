const initState = {
    profiles:[
        {
            id:'1',
            title: 'La rodadita',
            bio: 'Hola soy camilo nacido en mordor...',
            completedTrips: '87',
            rate: '5',
            blockedUser: 'false',
            edad: '27',
            phone: '3003522300',
            cedula: '1030530952',
            sexo: 'masculino',
            preferences: 'no niños, no ancianos'

        },
        {
            id:'2',
            title: 'DeathTrip',
            bio: 'Hola soy Juan nacido en el aberno...',
            completedTrips: '87',
            rate: '5',
            blockedUser: 'false',
            edad: '28',
            phone: '3003522300',
            cedula: '1030530952',
            sexo: 'masculino',
            preferences: 'no niños, no ancianos'

        },
        {
            id:'3',
            title: 'Mafia',
            bio: 'Hola soy Legolas nacido en tirandor...',
            completedTrips: '87',
            rate: '5',
            blockedUser: 'false',
            edad: '27',
            phone: '3003522300',
            cedula: '1030530952',
            sexo: 'masculino',
            preferences: 'no niños, no ancianos'

        }
    ]
}

const profileReducer = (state = initState, action) => {
    return state 
}


export default profileReducer