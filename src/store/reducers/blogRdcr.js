const initState = {}

const blogReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_BLOG' :
            console.log('get info', action.blog)
            return state
        case 'GET_BLOG_ERROR' :
            console.log('error getting info', action.blog)
            return state
        default:
            return state
    }
}


export default blogReducer