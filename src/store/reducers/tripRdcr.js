const initState = {
    trips: [
        {
            id:'1',
            title: 'La rodadita',
            content: 'Hello Darkness my old friend',
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
            content: 'naked bodies in the park toguether',
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
            content: 'lorepm ipsum molenia',
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
         console.log('create project', action.trip);
    }
    return state 
}



export default tripReducer