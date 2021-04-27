import firebase from 'firebase/app';
import 'firebase/firestore';

const cdkey= {
    apiKey: "AIzaSyAzWW07E-AGS0yaxRkfqacTfhYXWdLrqF4",
    authDomain: "cov-try.firebaseapp.com",
    projectId: "cov-try",
    storageBucket: "cov-try.appspot.com",
    messagingSenderId: "1073938541664",
    appId: "1:1073938541664:web:26d29ff66984cf69ab2705"
  };
  

  firebase.initializeApp(cdkey);

  export const firestore = firebase.firestore();
