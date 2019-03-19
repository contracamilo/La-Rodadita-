const initState = {}

const reasonReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_REASON' :
            console.log('get info', action.reason)
            return state
        case 'GET_REASON_ERROR' :
            console.log('error getting info', action.reason)
            return state
        default:
            return state
    }
}


export default reasonReducer