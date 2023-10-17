// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-3YSmAw9agquTe8eUnT1HbN9HWd7YZhs",
  authDomain: "web-site-miggy.firebaseapp.com",
  projectId: "web-site-miggy",
  storageBucket: "web-site-miggy.appspot.com",
  messagingSenderId: "673352282535",
  appId: "1:673352282535:web:06bb84a268a65d5e3b4682",
  measurementId: "G-PCPWEFTPWQ"
};git 

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);