// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth   } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4qcinld5MYL89ecBm_xlOSHdPPH8vbFc",
  authDomain: "smit-batch-11-cd2ff.firebaseapp.com",
  projectId: "smit-batch-11-cd2ff",
  storageBucket: "smit-batch-11-cd2ff.appspot.com",
  messagingSenderId: "998205423593",
  appId: "1:998205423593:web:76d1c1ed4d440cc42a5578",
  measurementId: "G-613528BGP6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);