import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAoAjrl9anynWcQddN3W8Rvl1YX6awprC8",
  authDomain: "turnout-43457.firebaseapp.com",
  databaseURL: "https://turnout-43457.firebaseio.com",
  projectId: "turnout-43457",
  storageBucket: "turnout-43457.appspot.com",
  messagingSenderId: "304089927814",
  appId: "1:304089927814:web:2ff23d91d476d517388107",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
