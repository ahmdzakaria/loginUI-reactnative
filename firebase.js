// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6Pxj-F8VTmlZG2HCeC5vyLvYDfgWHQPg",
  authDomain: "login-ui-60209.firebaseapp.com",
  projectId: "login-ui-60209",
  storageBucket: "login-ui-60209.appspot.com",
  messagingSenderId: "508920228991",
  appId: "1:508920228991:web:c17bd23cac8388334fa34a",
};

// Initialize Firebase
// let app;
// if (firebase.apps.length === 0) {
//   app = firebase.initializeApp(firebaseConfig);
// } else {
//   app = firebase.app();
// }

const app = initializeApp(firebaseConfig);

const auth = app.auth;

export { auth };
