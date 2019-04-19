export const getBlog = (blog) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        
        const firestore = getFirestore()
        const blogs = getState().firebase.blog 
        
        firestore.collection('blog').get().then(() => {
            dispatch( {type: 'GET_BLOG', blogs})
        }).catch((err) => {
            dispatch( {type: 'GET_BLOG_ERROR',err})
        })
    }
}







