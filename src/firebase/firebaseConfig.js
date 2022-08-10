import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAMZB00CnjUZSRvGtaBmoJL1Rzoope-05w",
  authDomain: "react-portfolio-7d118.firebaseapp.com",
  projectId: "react-portfolio-7d118",
  storageBucket: "react-portfolio-7d118.appspot.com",
  messagingSenderId: "405325752254",
  appId: "1:405325752254:web:4d2a1edb7f1310d1e07bef"
};

initializeApp(firebaseConfig);

export const db = getFirestore();