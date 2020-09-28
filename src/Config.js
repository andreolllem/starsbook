import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDOS4xpkL8Zh0BsZ1j-TN4YMlLy_Ofq9Rk",
    authDomain: "starsbook-418bb.firebaseapp.com",
    databaseURL: "https://starsbook-418bb.firebaseio.com",
    projectId: "starsbook-418bb",
    storageBucket: "starsbook-418bb.appspot.com",
    messagingSenderId: "373102334906",
    appId: "1:373102334906:web:12fbd29b88730a552b0383",
    measurementId: "G-GT37NHH1D6",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
