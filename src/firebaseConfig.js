// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6jUWuWz7bCRj5puBOYIosdXI8J4JVklQ",
  authDomain: "mazebank-36527.firebaseapp.com",
  projectId: "mazebank-36527",
  storageBucket: "mazebank-36527.appspot.com",
  messagingSenderId: "568791478443",
  appId: "1:568791478443:web:2b765633b1c2fa87eb07ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app