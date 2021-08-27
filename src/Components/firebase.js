import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBst-QX2KMCqUO4A0w-BnFoYWFOK_xgPlg",
    authDomain: "linkedin-clone-fc18b.firebaseapp.com",
    projectId: "linkedin-clone-fc18b",
    storageBucket: "linkedin-clone-fc18b.appspot.com",
    messagingSenderId: "827538472053",
    appId: "1:827538472053:web:75945f0b8be0f814104c3c",
    measurementId: "G-BEYCRNDLJZ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();
const auth = firebase.auth();

export { database, auth };