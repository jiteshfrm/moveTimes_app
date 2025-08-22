// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9Q2c4wxCBbR0hSZC8strfvWFMZpQUk9I",
  authDomain: "movetimes-931c0.firebaseapp.com",
  projectId: "movetimes-931c0",
  storageBucket: "movetimes-931c0.firebasestorage.app",
  messagingSenderId: "19908855470",
  appId: "1:19908855470:web:b72a9280bb6384e3da8f3f",
  measurementId: "G-8YKMKX23EQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()