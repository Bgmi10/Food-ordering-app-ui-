// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-ajTEfOYcYLwHW9wS3SKlWCUyvhUQj0k",
  authDomain: "food-odering-app-ceee8.firebaseapp.com",
  projectId: "food-odering-app-ceee8",
  storageBucket: "food-odering-app-ceee8.appspot.com",
  messagingSenderId: "72545992827",
  appId: "1:72545992827:web:dfd3c08924b3858843a2de",
  measurementId: "G-RHR7K3W7HV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);