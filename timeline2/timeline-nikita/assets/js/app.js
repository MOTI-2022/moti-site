// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDe9txzVlL-07JRgHO3aAH9FHV4ComEFRI",
  authDomain: "sj-moti-dif.firebaseapp.com",
  projectId: "sj-moti-dif",
  storageBucket: "sj-moti-dif.appspot.com",
  messagingSenderId: "404312360346",
  appId: "1:404312360346:web:bb77ea671bd766da4a6623",
  measurementId: "G-BZY1V9WMZV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

