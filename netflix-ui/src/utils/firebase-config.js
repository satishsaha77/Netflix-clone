import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUztaCpHNN_XE4wCpXfWtiQqyCGaznjc8",
  authDomain: "react-netflix-clone-f6d37.firebaseapp.com",
  projectId: "react-netflix-clone-f6d37",
  storageBucket: "react-netflix-clone-f6d37.appspot.com",
  messagingSenderId: "3906954346",
  appId: "1:3906954346:web:c4ff31872f45046f4c1613",
  measurementId: "G-WZSM727J5T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);