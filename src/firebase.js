// Import the functions you need from the SDKs you nee
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-MqjS2a3x6HWMUuVfw7RkusMcvcpT9SQ",
  authDomain: "womenempowerment-68a3c.firebaseapp.com",
  projectId: "womenempowerment-68a3c",
  storageBucket: "womenempowerment-68a3c.appspot.com",
  messagingSenderId: "962222757488",
  appId: "1:962222757488:web:5ba9ebc9fa4952388ec6b5",
  measurementId: "G-DNFEEMNLSN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
