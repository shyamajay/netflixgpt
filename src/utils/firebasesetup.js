// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsejy8A7YJLZJD8b8d4-vYMvbOUTUKHBA",
  authDomain: "netflixgpt-91112.firebaseapp.com",
  projectId: "netflixgpt-91112",
  storageBucket: "netflixgpt-91112.firebasestorage.app",
  messagingSenderId: "58807652484",
  appId: "1:58807652484:web:b437f9af7c1ec9c9ffb2d1",
  measurementId: "G-76K9WN2R1D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
