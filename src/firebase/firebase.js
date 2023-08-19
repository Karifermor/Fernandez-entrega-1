// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNDhfg3KsRGczjqpn7K5gjZzYWcII8Yww",
  authDomain: "proyectofinal-7c0d9.firebaseapp.com",
  projectId: "proyectofinal-7c0d9",
  storageBucket: "proyectofinal-7c0d9.appspot.com",
  messagingSenderId: "996859934239",
  appId: "1:996859934239:web:e791f0bc51487559db072a",
  measurementId: "G-6NZG8HRNLD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)