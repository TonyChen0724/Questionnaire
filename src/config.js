import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCOniXaQmdSPdUELaAMQDjmkJZcEVOOLV4",
    authDomain: "fitting-service.firebaseapp.com",
    databaseURL: "https://fitting-service.firebaseio.com",
    projectId: "fitting-service",
    storageBucket: "fitting-service.appspot.com",
    messagingSenderId: "125378256020"
  };
  firebase.initializeApp(config);
  export const db = firebase.firestore();
  export const database =firebase.database();