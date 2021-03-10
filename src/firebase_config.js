import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAusc9h9ZcWeCvmwRmP6MoSGD1a-S_qCoA",
    authDomain: "react-todo-377fe.firebaseapp.com",
    projectId: "react-todo-377fe",
    storageBucket: "react-todo-377fe.appspot.com",
    messagingSenderId: "49051044559",
    appId: "1:49051044559:web:796d95ad2a14f3602c05ba"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };