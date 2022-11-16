// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyDLQdPInSVA1ulxJ6HvcFfChsJdxAMZmu8",
  authDomain: "react-crud-c79b1.firebaseapp.com",
  projectId: "react-crud-c79b1",
  storageBucket: "react-crud-c79b1.appspot.com",
  messagingSenderId: "561458244178",
  appId: "1:561458244178:web:401124466624823f7b8d8b",
  measurementId: "G-TWQ3S306SE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);
export default app;