// firebase.js
import firebase from 'firebase/app';
import 'firebase/database';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDvlxTwfSMPppXfDKDaMX-SE0aREjUt0w4",
    authDomain: "uptag-623f0.firebaseapp.com",
    databaseURL: "https://uptag-623f0.firebaseio.com",
    projectId: "uptag-623f0",
    storageBucket: "uptag-623f0.appspot.com",
    messagingSenderId: "369383170296",
    appId: "1:369383170296:web:5475a44309b2b9d8bddb0d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// this exports the CONFIGURED version of firebase
export default firebase;