 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyAkfTjkcNolZ26eGzT_bRsHcbfurstom60",
   authDomain: "webserver-c6a99.firebaseapp.com",
   projectId: "webserver-c6a99",
   storageBucket: "webserver-c6a99.appspot.com",
   messagingSenderId: "659605449224",
   appId: "1:659605449224:web:7aa494256743cde0fdbfbd",
   measurementId: "G-VL8FCE7YY6"
 };

 // Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);