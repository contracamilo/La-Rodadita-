const initState = {}

const commentReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_COMMENT' :
            console.log('get info', action.comment)
            return state
        case 'GET_COMMENT_ERROR' :
            console.log('error getting info', action.comment)
            return state
        default:
            return state
    }
}

export default commentReducer