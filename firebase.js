import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDDiJjnJHA4VwKcR3c_F3YZk-ia6TIIOJA",
    authDomain: "slack-30410.firebaseapp.com",
    projectId: "slack-30410",
    storageBucket: "slack-30410.appspot.com",
    messagingSenderId: "377639253789",
    appId: "1:377639253789:web:aa25712ca4154237f593f4",
    measurementId: "G-G91EH6WXCS"
})

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
