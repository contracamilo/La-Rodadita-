//import storage from '../../config/fbConfig'


export const updateProfile = (profileInfo) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {

        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;

        const socialUser = getState().firebase.auth;
        let prov = socialUser.providerData[0].providerId;

        if (prov == 'google.com' || prov == 'twitter.com') {
            firestore.collection('users').doc(authorId).update(profileInfo)
                .then(() => {
                    dispatch({ type: 'EDIT_PROFILE', profileInfo })
                }).catch((err) => {
                    dispatch({ type: 'EDIT_PROFILE_ERROR', err })
                })
        }

        if (prov == 'facebook.com') {
            firestore.collection('users').doc(authorId).update(profileInfo)
                .then(() => {
                    dispatch({ type: 'EDIT_PROFILE', profileInfo })
                }).catch((err) => {
                    dispatch({ type: 'EDIT_PROFILE_ERROR', err })
                })
        }

        if (profile.isLoaded) {
            firestore.collection('users').doc(authorId).update(profileInfo)
                .then(() => {
                    dispatch({ type: 'EDIT_PROFILE', profileInfo })
                }).catch((err) => {
                    dispatch({ type: 'EDIT_PROFILE_ERROR', err })
                })
        }

    }
}




export function uploadPic(image, picture) {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        const date = new Date().getTime();
        const authorId = getState().firebase.auth.uid;

        const storage = getFirebase().storage();
        console.log(picture, image)

        let storageRef = storage.ref('userImages').child(`${image}/${date}`).put(picture);


        storageRef.on('state_changed', function(snapshot) {

            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                    console.log('Upload is paused');
                    break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
                    console.log('Upload is running');
                    break;
            }
        }, function(error) {
            dispatch({ type: 'EDIT_PROFILE_ERROR', error })
        }, function() {
            storageRef.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                //console.log('File available at', downloadURL);

                firestore.collection('users').doc(authorId).update({
                    picture: downloadURL
                }).then(() => {
                    dispatch({ type: 'EDIT_PROFILE', picture })
                }).catch((err) => {
                    dispatch({ type: 'EDIT_PROFILE_ERROR', err })
                })


            });
        });



    }
}


export function uploadCarPic(image, picture) {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        const date = new Date().getTime();
        const authorId = getState().firebase.auth.uid;

        const storage = getFirebase().storage();
        console.log(picture, image)

        let storageRef = storage.ref('userImages').child(`${image}/${date}`).put(picture);


        storageRef.on('state_changed', function(snapshot) {

            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                    console.log('Upload is paused');
                    break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
                    console.log('Upload is running');
                    break;
            }
        }, function(error) {
            dispatch({ type: 'EDIT_PROFILE_ERROR', error })
        }, function() {
            storageRef.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                //console.log('File available at', downloadURL);

                firestore.collection('users').doc(authorId).update({
                    carPicture: downloadURL
                }).then(() => {
                    dispatch({ type: 'EDIT_PROFILE', picture })
                }).catch((err) => {
                    dispatch({ type: 'EDIT_PROFILE_ERROR', err })
                })


            });
        });



    }
}