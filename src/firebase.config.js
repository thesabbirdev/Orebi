// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnpo9wbZGikgfX8R56euttHe-9X4BSjb0",
  authDomain: "orebi-43705.firebaseapp.com",
  projectId: "orebi-43705",
  storageBucket: "orebi-43705.appspot.com",
  messagingSenderId: "837081245905",
  appId: "1:837081245905:web:bcffec0f8a879029fdfdf0",
  measurementId: "G-6GC23Q8DQ5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;
