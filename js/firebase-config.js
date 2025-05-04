
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyCUqQOl6C-81GBf_tabmXpFyHyYOnQdzsk",
    authDomain: "notes-app-c7e7e.firebaseapp.com",
    projectId: "notes-app-c7e7e",
    storageBucket: "notes-app-c7e7e.firebasestorage.app",
    messagingSenderId: "848480043007",
    appId: "1:848480043007:web:faf0a39f6ba3889ac4b1ca",
    measurementId: "G-4NR0WQC3W0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const  auth=getAuth(app);
export const db=getFirestore(app);

