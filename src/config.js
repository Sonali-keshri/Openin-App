// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAljCDZyuBA-Fe4wfcmwYXJ3afIITgf30c",
  authDomain: "openin-app-413610.firebaseapp.com",
  projectId: "openin-app-413610",
  storageBucket: "openin-app-413610.appspot.com",
  messagingSenderId: "415181027547",
  appId: "1:415181027547:web:eeb6b11c9493711fceb4fe",
  measurementId: "G-GM8D0FD1MY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth()
const provider = new GoogleAuthProvider()

export { auth, provider}
