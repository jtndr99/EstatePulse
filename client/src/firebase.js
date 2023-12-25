// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-project-a.firebaseapp.com",
  projectId: "mern-project-a",
  storageBucket: "mern-project-a.appspot.com",
  messagingSenderId: "478051275638",
  appId: "1:478051275638:web:d9727b26de2bc32e4de057"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);