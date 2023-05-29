// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHY1p0KFDqgYVApNgwnFzmcGesGCLs7iU",
  authDomain: "autopartsshop-9d354.firebaseapp.com",
  projectId: "autopartsshop-9d354",
  storageBucket: "autopartsshop-9d354.appspot.com",
  messagingSenderId: "361685424858",
  appId: "1:361685424858:web:5e0ae332785ae7998ae3e3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default app;