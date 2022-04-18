// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8bfxdxoou1ILWLVfyNlANaIV93ydl7Xc",
  authDomain: "independent-service-prov-20931.firebaseapp.com",
  projectId: "independent-service-prov-20931",
  storageBucket: "independent-service-prov-20931.appspot.com",
  messagingSenderId: "597114739060",
  appId: "1:597114739060:web:59f09e594151849399f421"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;