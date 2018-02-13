import firebase from 'firebase';
const config = {
  apiKey: "AIzaSyCoy0KZHXznAEIHfIAV_1Rvo7fAzCB3N-o",
  authDomain: "shelterhub-f3ff2.firebaseapp.com",
  databaseURL: "https://shelterhub-f3ff2.firebaseio.com",
  projectId: "shelterhub-f3ff2",
  storageBucket: "shelterhub-f3ff2.appspot.com",
  messagingSenderId: "1089470789931"
};
firebase.initializeApp(config);
export default firebase;