// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBr4vP8TPZUrOw21YQvNJWY3GqhV2P-Q-Y",
  authDomain: "dragon-news-project-c75c4.firebaseapp.com",
  projectId: "dragon-news-project-c75c4",
  storageBucket: "dragon-news-project-c75c4.firebasestorage.app",
  messagingSenderId: "696252406374",
  appId: "1:696252406374:web:8bed36a35107def6342ba7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;