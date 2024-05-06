
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCt3ADXp3Dbkv69FgDKFA5L1GCf9zh7naA",
  authDomain: "chat-app-75e79.firebaseapp.com",
  projectId: "chat-app-75e79",
  storageBucket: "chat-app-75e79.appspot.com",
  messagingSenderId: "253294633763",
  appId: "1:253294633763:web:6807df69faca4f3ce0a296",
  measurementId: "G-ML9YBB76G4"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 
 export const auth = getAuth();