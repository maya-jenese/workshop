// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0bwwMUEgqfqAgwh90aXAI48JIo1iMy9g",
  authDomain: "todolist-813ab.firebaseapp.com",
  projectId: "todolist-813ab",
  storageBucket: "todolist-813ab.appspot.com",
  messagingSenderId: "420421437209",
  appId: "1:420421437209:web:647e6a0aa626689c276788",
  measurementId: "G-M8J7MNG24M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
