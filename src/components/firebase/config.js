import firebase from "firebase/compat/app";

import "firebase/compat/analytics";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZJ2StHdq0TSDPu7Rmwt30XIcR5e3lBs8",
  authDomain: "chat-app-a0665.firebaseapp.com",
  projectId: "chat-app-a0665",
  storageBucket: "chat-app-a0665.appspot.com",
  messagingSenderId: "44806382054",
  appId: "1:44806382054:web:8d48ffba84881e15f4f627",
  measurementId: "G-82LJXNYD7H",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
