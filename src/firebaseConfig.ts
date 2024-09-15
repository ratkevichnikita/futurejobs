import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDDXb6kJaJTRxdPgK1AyY0VPA-dQE9Xe3w",
  authDomain: "battle-of-vikings.firebaseapp.com",
  projectId: "battle-of-vikings",
  storageBucket: "battle-of-vikings.appspot.com",
  messagingSenderId: "463316823430",
  appId: "1:463316823430:web:7f84fbe605029556071007",
  measurementId: "G-T5H3KF4W7W"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);