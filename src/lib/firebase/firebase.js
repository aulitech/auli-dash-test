// Import the functions you need from the SDKs you need
import { deleteApp, getApp, getApps, initializeApp } from "firebase/app";
//import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // api key from .env not working need to fix later
  apiKey: "AIzaSyDKGTT4oDYvvJ76U0l5CHIW9_5xb-DYyXA",
  authDomain: "dash-test-fb96a.firebaseapp.com",
  projectId: "dash-test-fb96a",
  storageBucket: "dash-test-fb96a.appspot.com",
  messagingSenderId: "971850842397",
  appId: "1:971850842397:web:c88516a4c0320cc78a61f4",
  measurementId: "G-G5YSGZX63W"
};

// Initialize Firebase
let firebaseApp;
if (!getApps().length) {
    firebaseApp = initializeApp(firebaseConfig)
} else {
    firebaseApp = getApp()
    deleteApp(firebaseApp)
    firebaseApp = initializeApp(firebaseConfig)
}

//const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp)
export const auth = getAuth(firebaseApp)