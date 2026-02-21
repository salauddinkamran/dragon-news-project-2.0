// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgpFUgezzD3rOX4sZFKTWf5-zUaiVRxIs",
  authDomain: "hw-simple-firebase.firebaseapp.com",
  projectId: "hw-simple-firebase",
  storageBucket: "hw-simple-firebase.firebasestorage.app",
  messagingSenderId: "541572462125",
  appId: "1:541572462125:web:5bb60dcff7686860b9aaa4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);