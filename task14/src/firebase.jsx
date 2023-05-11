// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJbor_Ey3ZTLKg7h6GruGjOJq6zxwx9-Y",
  authDomain: "practice-5a97d.firebaseapp.com",
  projectId: "practice-5a97d",
  storageBucket: "practice-5a97d.appspot.com",
  messagingSenderId: "148561136100",
  appId: "1:148561136100:web:d0f232c8a92bbc05bd1ff1",
  measurementId: "G-52YM3GWR11",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
