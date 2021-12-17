import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDlPSPiTweqXLZq7Qfqmqp09SAbKLfdfvk",
    authDomain: "e-ride-8474c.firebaseapp.com",
    projectId: "e-ride-8474c",
    storageBucket: "e-ride-8474c.appspot.com",
    messagingSenderId: "561526294668",
    appId: "1:561526294668:web:1bd0ea323ef182b14f53a9"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


