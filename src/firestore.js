import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBDnVz7OTr9unpenTTL8cp16E2ndDIf7ew",
    authDomain: "test-a01aa.firebaseapp.com",
    projectId: "test-a01aa",
    storageBucket: "test-a01aa.appspot.com",
    messagingSenderId: "858068916323",
    appId: "1:858068916323:web:a6dbc25154c245963c0056",
    measurementId: "G-YT2WY76CX2"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

