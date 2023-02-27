// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPacIiEYg6FFIF5YrnbtnvEKdsY_MaRv0",
  authDomain: "instagram-clone-1c405.firebaseapp.com",
  projectId: "instagram-clone-1c405",
  storageBucket: "instagram-clone-1c405.appspot.com",
  messagingSenderId: "617989149567",
  appId: "1:617989149567:web:da0dc05b6669d80fa3404a",
  measurementId: "G-HKCHJH8SZM",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
//!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app;
const analytics = getAnalytics(firebaseApp);
const db = getFirestore(firebaseApp);

export { firebaseApp, db };
