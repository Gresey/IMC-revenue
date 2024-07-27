// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCdlRcH95zDR6md0g-VkVOPJoDDEf87wQM",
    authDomain: "imc-revenue-login.firebaseapp.com",
    projectId: "imc-revenue-login",
    storageBucket: "imc-revenue-login.appspot.com",
    messagingSenderId: "314657681312",
    appId: "1:314657681312:web:c1a3d6aecac866a0cebec5"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
