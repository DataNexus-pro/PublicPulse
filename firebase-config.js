// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6s53L0gqWSJzuKLdTodyxMbNeXjEg_B4",
  authDomain: "datanexus-pro.firebaseapp.com",
  projectId: "datanexus-pro",
  storageBucket: "datanexus-pro.firebasestorage.app",
  messagingSenderId: "919261212964",
  appId: "1:919261212964:web:6a1e29e2015302714f43b1",
  measurementId: "G-0WY5GGVKQ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);