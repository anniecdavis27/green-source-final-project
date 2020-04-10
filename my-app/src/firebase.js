import firebase from 'firebase';

const config = {
      apiKey: "AIzaSyAhXEmmoCZESAAOR-7AzBg4g6O9AFRtkvI",
      authDomain: "environewsapp.firebaseapp.com",
      databaseURL: "https://environewsapp.firebaseio.com",
      projectId: "environewsapp",
      storageBucket: "environewsapp.appspot.com",
      messagingSenderId: "1017973522753",
      appId: "1:1017973522753:web:dbd0b940892ecea4b8a1c0"
}

firebase.initializeApp(config);
export default firebase;
