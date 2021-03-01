import firebase from 'firebase'


var firebaseConfig = {
    apiKey: "AIzaSyD7w4M3RW2Ik3hRrFj6L7lMKX3Y_egR0HE",
    authDomain: "finalapp-cfbdd.firebaseapp.com",
    projectId: "finalapp-cfbdd",
    storageBucket: "finalapp-cfbdd.appspot.com",
    messagingSenderId: "143392666018",
    appId: "1:143392666018:web:c0256a805c84614af202fb",
    measurementId: "G-87QC9XVZTJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore()