// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEsrQfxmwhMdiCUo7qorqANMpn-P0qzhI",
  authDomain: "toothora.firebaseapp.com",
  projectId: "toothora",
  storageBucket: "toothora.firebasestorage.app",
  messagingSenderId: "358020312280",
  appId: "1:358020312280:web:b3204de031051f1ff3bbad",
  measurementId: "G-EZWD2EKKD7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);