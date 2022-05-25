// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCp41smMqQngws-OeYHiNWKZDBL4aeEbi4",
  authDomain: "hiper-moto-store.firebaseapp.com",
  projectId: "hiper-moto-store",
  storageBucket: "hiper-moto-store.appspot.com",
  messagingSenderId: "801259119589",
  appId: "1:801259119589:web:56aa0aab0755af44c2c50c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
