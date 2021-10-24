import firebase from 'firebase/app'
import 'firebase/auth';

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
const auth = firebase.auth();
export {auth};
