// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeHuTTf8fvIx6wEEjvn46k_sUYJZ3kvTk",
  authDomain: "practiceperfect-80b8f.firebaseapp.com",
  projectId: "practiceperfect-80b8f",
  storageBucket: "practiceperfect-80b8f.firebasestorage.app",
  messagingSenderId: "710063745938",
  appId: "1:710063745938:web:c3e9dddb82c56ff9686f4b",
  measurementId: "G-3D4M94PH4S"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);