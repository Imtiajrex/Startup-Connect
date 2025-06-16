// lib/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCQPRQZ6Y2e9fJ2YbBtR0AkE0PhjMs8sCY",
    authDomain: "startup-connect-8d88f.firebaseapp.com",
    projectId: "startup-connect-8d88f",
    storageBucket: "startup-connect-8d88f.firebasestorage.app",
    messagingSenderId: "532384240546",
    appId: "1:532384240546:web:9641f5aed977e168e658fb",
    measurementId: "G-6JKHK3VWJJ",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
