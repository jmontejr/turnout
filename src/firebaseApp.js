import firebase from 'firebase';

const {
  VUE_APP_API_KEY, 
  VUE_APP_AUTH_DOMAIN, 
  VUE_APP_DATABASE_URL, 
  VUE_APP_PROJECT_ID, 
  VUE_APP_STORAGE_BUCKET, 
  VUE_APP_MESSAGING_SENDED_ID, 
  VUE_APP_APP_ID
} = process.env;

const firebaseConfig = {
  apiKey: VUE_APP_API_KEY,
  authDomain: VUE_APP_AUTH_DOMAIN,
  databaseURL: VUE_APP_DATABASE_URL,
  projectId: VUE_APP_PROJECT_ID,
  storageBucket: VUE_APP_STORAGE_BUCKET,
  messagingSenderId: VUE_APP_MESSAGING_SENDED_ID,
  appId: VUE_APP_APP_ID,
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const eventsRef = firebaseApp.database().ref().child('events');
