// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4FDrpf6u2gtIa4e06B0d7hgBJ0_3Rb6k",
  authDomain: "realtor-clone-app-a821e.firebaseapp.com",
  projectId: "realtor-clone-app-a821e",
  storageBucket: "realtor-clone-app-a821e.appspot.com",
  messagingSenderId: "359597052763",
  appId: "1:359597052763:web:5287f0171f23f623a4407e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


export default app;                                             

