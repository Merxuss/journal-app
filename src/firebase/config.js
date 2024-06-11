// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHnJtwu9gIpMBWsWsNd8iQeaulwGzx_ho",
  authDomain: "react-cursos-9e1f2.firebaseapp.com",
  projectId: "react-cursos-9e1f2",
  storageBucket: "react-cursos-9e1f2.appspot.com",
  messagingSenderId: "377186532933",
  appId: "1:377186532933:web:721570091c4585036d6d2c"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
