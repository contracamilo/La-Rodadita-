const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });

admin.initializeApp(functions.config().firebase);


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'rodaditapp@gmail.com',
        pass: 'Work.1986'
    }
});

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



exports.sendMail = functions.https.onRequest((req, res) => {
    cors(req, res, () => {

        // getting dest email by query string
        const dest = req.query.dest;

        const mailOptions = {
            from: 'LA RODADITA <rodaditapp@gmail.com>', // Something like: Jane Doe <janedoe@gmail.com>
            to: dest,
            subject: 'ALGUIEN QUIERE VIAJAR CONTIGO!!!', // email subject
            html: `<p style="font-size: 16px;">Un usuario de <a href="https://larodadita.com/" target="_blank">larodadita.com</a> quiere viajar contigo, ¡Revisa tu cuenta y ponte en contacto!</p>
                <br />
                <img width="500" src="https://images.pexels.com/photos/825890/pexels-photo-825890.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
            ` // email content in HTML
        };

        // returning result
        return transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return res.send(err.toString());
            }
            return res.send({
                payload: {
                    status: 'sended',
                    sended: true,
                    info: info
                }
            });
        });
    });
});



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