import * as firebase from 'firebase';
const config = {
  apiKey: "AIzaSyCFQfda03n7fZdsKHP5IEWFiLUtIsonIR4",
  authDomain: "yong-b43.firebaseapp.com",
  databaseURL: "https://yong-b43.firebaseio.com",
  projectId: "yong-b43",
  storageBucket: "yong-b43.appspot.com",
  messagingSenderId: "946971329222",
  appId: "1:946971329222:web:6afdfba1b352bf7c600dc7",
  measurementId: "G-1N2GKTSLLQ"
};
const fire = firebase.initializeApp(config);
const auth = firebase.auth();

export { auth, fire as firebase };