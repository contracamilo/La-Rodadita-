export const getBlog = (reasons) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        
        const firestore = getFirestore()
        const reasons = getState().firebase.reasons
        
        firestore.collection('reasons').get().then(() => {
            dispatch( {type: 'GET_REASONS', reasons})
        }).catch((err) => {
            dispatch( {type: 'GET_REASONS_ERROR',err})
        })
    }
}







