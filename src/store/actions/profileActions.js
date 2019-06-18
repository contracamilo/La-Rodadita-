
export const updateProfile = (profileInfo) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        
        const firestore = getFirestore();
        const profile = getState().firebase.profile; 
        const authorId = getState().firebase.auth.uid;
        
        const socialUser = getState().firebase.auth;
        let prov = socialUser.providerData[0].providerId;
        
        if(prov == 'google.com' || prov == 'twitter.com'){
                firestore.collection('users').doc(authorId).update(profileInfo)
                .then(() => {
                    dispatch( {type: 'EDIT_PROFILE', profileInfo})
                }).catch((err) => {
                    dispatch( {type: 'EDIT_PROFILE_ERROR',err})
                })
        }

        if(profile.isLoaded){
            firestore.collection('users').doc(authorId).update(profileInfo)
            .then(() => {
                dispatch( {type: 'EDIT_PROFILE', profileInfo})
            }).catch((err) => {
                dispatch( {type: 'EDIT_PROFILE_ERROR',err})
            })
        }
        
    }
}