const initState = {}

//loading data error
const searchReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_DATE' :
            return state
        case 'GET_DATA_ERROR' :
            return initState
        default:
            return state
    }
}


export default searchReducer 