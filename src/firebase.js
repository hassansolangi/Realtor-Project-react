// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2ke0HWJfQ_efzj7dfPciLzg-bOysTIKA",
  authDomain: "realtorproject-8b92a.firebaseapp.com",
  projectId: "realtorproject-8b92a",
  storageBucket: "realtorproject-8b92a.appspot.com",
  messagingSenderId: "737799700877",
  appId: "1:737799700877:web:76731e446ba519d9207dc4"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();