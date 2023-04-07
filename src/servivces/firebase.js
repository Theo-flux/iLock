
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.VITE_APIKEY,
    authDomain: process.env.VITE_AUTHDOMAIN,
    projectId: process.env.VITE_PROJECTID,
    storageBucket: process.env.VITE_STORAGEBUCKET,
    messagingSenderId: process.env.VITE_MESSAGINGSENDERID,
    appId: process.env.VITE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();
export const emailAndPassAuth = signInWithEmailAndPassword;
export const logOut = signOut;
