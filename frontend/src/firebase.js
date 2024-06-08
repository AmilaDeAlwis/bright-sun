// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-97.firebaseapp.com",
  projectId: "real-estate-97",
  storageBucket: "real-estate-97.appspot.com",
  messagingSenderId: "555066220427",
  appId: "1:555066220427:web:94ade97ecc84513697198e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);