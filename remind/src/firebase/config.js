import  firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAb2Y49iUw0fYrth9ef76BopYqR_CJgvYc",
  authDomain: "remids-b04ea.firebaseapp.com",
  projectId: "remids-b04ea",
  storageBucket: "remids-b04ea.appspot.com",
  messagingSenderId: "1040381784510",
  appId: "1:1040381784510:web:f3c8f8ffa9d91ccfb589ef"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider, db};
