const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer')
const postmarkTransport = require('nodemailer-postmark-transport')
admin.initializeApp(functions.config().firebase);

const createNotification = ((notification) => {
    return admin.firestore().collection('notifications')
        .add(notification)
        .then(doc => console.log('notification added', doc));
});

const createProfile = ((profile) => {
    return admin.firestore().collection('profiles')
        .add(profile)
        .then(doc => console.log('profile added', doc));
});


const postmarkKey = functions.config().postmark.key
const mailTransport = nodemailer.createTransport(postmarkTransport({
    auth: {
        apiKey: postmarkKey
    }
}))


exports.tripCreated = functions.firestore
    .document('trips/{tripId}')
    .onCreate(doc => {

        const trip = doc.data();
        const notification = {
            content: '- Añadio un nuevo viaje',
            user: `${trip.authorFirstName} ${trip.authorLastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }

        return createNotification(notification);

    });

exports.userJoined = functions.auth.user()
    .onCreate(user => {

        return admin.firestore().collection('users')
            .doc(user.uid).get().then(doc => {

                const newUser = doc.data();
                const notification = {
                    content: '- Se unio a la rodadita',
                    user: `${newUser.firstName} ${newUser.lastName}`,
                    time: admin.firestore.FieldValue.serverTimestamp()
                };

                return createNotification(notification);

            });
    });


exports.userProfiled = functions.auth.user()
    .onCreate(user => {

        return admin.firestore().collection('profiles')
            .doc(user.uid).get().then(doc => {

                const newUser = doc.data();
                const profile = {
                    content: 'Perfil',
                    userName: `${newUser.firstName}`,
                    userLastName: `${newUser.lastName}`,
                    creationDate: admin.firestore.FieldValue.serverTimestamp()
                };

                return createNotification(profile);

            });
    });