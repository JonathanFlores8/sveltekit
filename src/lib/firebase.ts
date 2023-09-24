// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlE9EWebUkrrF0LZxN7t4sCxFpIWKR9sM",
  authDomain: "showcase-32537.firebaseapp.com",
  projectId: "showcase-32537",
  storageBucket: "showcase-32537.appspot.com",
  messagingSenderId: "51277784000",
  appId: "1:51277784000:web:633010b9b0e8e6fdd99e25",
  measurementId: "G-BZE94BDBHF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();

