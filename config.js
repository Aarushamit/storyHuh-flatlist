import firebase from 'firebase'
require("@firebase/firestore")


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBgkbNbbMVrmQZPQmmw2OuFvCo5NlKiSJ4",
    authDomain: "storyhub-a464f.firebaseapp.com",
    databaseURL: "https://storyhub-a464f.firebaseio.com",
    projectId: "storyhub-a464f",
    storageBucket: "storyhub-a464f.appspot.com",
    messagingSenderId: "400342028204",
    appId: "1:400342028204:web:54a8edf0da8e98f4c5b409"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()