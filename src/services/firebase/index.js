// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyB5s3-8-TCF5-ArqqgpKEjBplw24CBU7lw",
  authDomain: "backendsneakerstore.firebaseapp.com",
  projectId: "backendsneakerstore",
  storageBucket: "backendsneakerstore.appspot.com",
  messagingSenderId: "55766447075",
  appId: "1:55766447075:web:9fd8c943c9468070aca6d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db=getFirestore(app)