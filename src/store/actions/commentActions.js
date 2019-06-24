export const getComments = (comment) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        
        const firestore = getFirestore()
        const blogs = getState().firebase.blog 
        
        firestore.collection('comments').get().then(() => {
            dispatch( {type: 'GET_COMMENT', comment})
        }).catch((err) => {
            dispatch( {type: 'GET_COMMENT_ERROR',err})
        })
    }
}
