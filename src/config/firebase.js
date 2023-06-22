// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebase-key";

import { getAuth, GoogleAuthProvider } from "firebase/auth";


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider  = new GoogleAuthProvider();