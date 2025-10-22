// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCRLaK5cQYZnqjdlf7YGripiVHqhPkTBE",
  authDomain: "prepwise-ee23b.firebaseapp.com",
  projectId: "prepwise-ee23b",
  storageBucket: "prepwise-ee23b.firebasestorage.app",
  messagingSenderId: "1032306837911",
  appId: "1:1032306837911:web:7c163f9c69f929f4889cd2",
  measurementId: "G-952NFH6ME8"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);