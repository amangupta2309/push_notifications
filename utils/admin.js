var admin = require("firebase-admin");
const path = require("path");
// console.log(__dirname)
const dotenv = require('dotenv');

dotenv.config({path: path.join(__dirname, '../.env')});
const privateKey = require('../privatekey.json')

admin.initializeApp({
  credential: admin.credential.cert(privateKey),
  databaseURL: process.env.DATABASE_URL
});

const db = admin.database();
const messaging = admin.messaging();
module.exports = { admin, db,messaging };
