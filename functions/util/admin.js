const serviceAccount = require("../ServiceAccountKey.json");
const admin = require('firebase-admin');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://team-krispy-gamr.firebaseio.com"
});

const db = admin.firestore();

module.exports = {admin, db};