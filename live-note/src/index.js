import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

 /*_____________________________ Code to use firebase in our app __________________________________________
 __________________________________________________________________________________________________________*/
 const firebase = require('firebase');       // We require firebase in our app
 require('firebase/firestore');
  
 //Our  web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDwmk4lhN20-6UZn0FAbaK5vB5G_nC2vmY",
    authDomain: "thelivenote.firebaseapp.com",
    databaseURL: "https://thelivenote.firebaseio.com",
    projectId: "thelivenote",
    storageBucket: "thelivenote.appspot.com",
    messagingSenderId: "453619943404",
    appId: "1:453619943404:web:34175fec9ff0dd983822c9",
    measurementId: "G-FVE30FMH2W"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
 /*___________________________________________Code for firebase end here___________________________________________*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('LiveNote-container')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
