import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUPdY7keDoI_S-dIet9PtwHEfbrTFNduM",
  authDomain: "react-51d70.firebaseapp.com",
  projectId: "react-51d70",
  storageBucket: "react-51d70.appspot.com",
  messagingSenderId: "40863461205",
  appId: "1:40863461205:web:c79c5da3c0d0d3cc6b09dc"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
