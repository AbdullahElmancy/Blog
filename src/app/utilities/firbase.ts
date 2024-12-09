// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-b63b3.firebaseapp.com",
  projectId: "blog-b63b3",
  storageBucket: "blog-b63b3.firebasestorage.app",
  messagingSenderId: "1669707831",
  appId: "1:1669707831:web:e03062ec91fae33c2da7b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);