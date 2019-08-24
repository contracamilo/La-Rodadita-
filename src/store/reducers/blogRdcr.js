const initState = {}

const blogReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_BLOG' :
           return state
        case 'GET_BLOG_ERROR' :
            return state
        default:
            return state
    }
}


export default blogReducer