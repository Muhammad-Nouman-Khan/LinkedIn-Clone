import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCbbO7pwi_jT6xNMQAVVb1MGQj24Cfa7GY",
  authDomain: "linkedin-clone-34296.firebaseapp.com",
  projectId: "linkedin-clone-34296",
  storageBucket: "linkedin-clone-34296.appspot.com",
  messagingSenderId: "770691907951",
  appId: "1:770691907951:web:52e2618acaa3fc79c8a89a",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };
