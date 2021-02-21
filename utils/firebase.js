import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyAZMjKcxd6kj0zVkUcYBbwIQYA4e7-x-Nk",
    authDomain: "blue-8abd1.firebaseapp.com",
    databaseURL: "https://blue-8abd1.firebaseio.com",
    projectId: "blue-8abd1",
    storageBucket: "blue-8abd1.appspot.com",
    messagingSenderId: "278593435972"
};
firebase.initializeApp(config);

const firestore = firebase.firestore();

firestore.settings({
    timestampsInSnapshots: true
});

export { firebase, firestore };

