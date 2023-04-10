// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvipz1Ny5823GbOde-aPYre1nYLOI0E8Q",
  authDomain: "hackathon-games-a0514.firebaseapp.com",
  projectId: "hackathon-games-a0514",
  storageBucket: "hackathon-games-a0514.appspot.com",
  messagingSenderId: "967571203644",
  appId: "1:967571203644:web:598cfa843db0fa57d0c539",
  measurementId: "G-RFEB0QSV0T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
