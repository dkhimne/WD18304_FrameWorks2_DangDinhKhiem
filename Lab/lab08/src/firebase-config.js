// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2fLIgScBmdPJi_d21mQ4DTljtZN4xSls",
  authDomain: "lab-8-f9c96.firebaseapp.com",
  projectId: "lab-8-f9c96",
  storageBucket: "lab-8-f9c96.appspot.com",
  messagingSenderId: "473846547483",
  appId: "1:473846547483:web:3eee5a20282511c8cee4be",
  measurementId: "G-LMR4N4YPEF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getFirestore(app);

export {analytics};