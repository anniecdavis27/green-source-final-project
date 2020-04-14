import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDUZiAnkbBAPoXINQrIp1v4b3TFRmAFXEo",
  authDomain: "enviroapptwo.firebaseapp.com",
  databaseURL: "https://enviroapptwo.firebaseio.com",
  projectId: "enviroapptwo",
  storageBucket: "enviroapptwo.appspot.com",
  messagingSenderId: "81673518823",
  appId: "1:81673518823:web:1fde9a7f991acfd134ec42"
}

firebase.initializeApp(config);
export default firebase;
