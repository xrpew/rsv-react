// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/firestore'
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyB6KqxziQvSX24G9PCXxt8lCO1gBgJUoIo",
    authDomain: "administrador-rsrvas.firebaseapp.com",
    projectId: "administrador-rsrvas",
    storageBucket: "administrador-rsrvas.appspot.com",
    messagingSenderId: "578689693410",
    appId: "1:578689693410:web:19a6192522d931046fd0bb",
    measurementId: "G-MY8F2F6PYL"
  };
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth();

