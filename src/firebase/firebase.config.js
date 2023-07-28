// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.Next_apiKey,
//   authDomain: process.env.Next_authDomain,
//   projectId: process.env.Next_projectId,
//   storageBucket: process.env.Next_storageBucket,
//   messagingSenderId: process.env.Next_messagingSenderId,
//   appId: process.env.Next_appId,
// };

const firebaseConfig = {
  apiKey: "AIzaSyAZSnt6AcOfRYnW1s5nsQZ6TW6d7tMAty8",
  authDomain: "next-auth-4a9bb.firebaseapp.com",
  projectId: "next-auth-4a9bb",
  storageBucket: "next-auth-4a9bb.appspot.com",
  messagingSenderId: "83081401299",
  appId: "1:83081401299:web:842659eac78c393ee89526"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;