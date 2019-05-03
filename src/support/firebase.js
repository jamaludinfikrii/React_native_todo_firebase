import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyA4gKOHYHT5FcW_uv_u0pPVpTQ2vm0GOGM",
  authDomain: "todoapp-c601b.firebaseapp.com",
  databaseURL: "https://todoapp-c601b.firebaseio.com",
  projectId: "todoapp-c601b",
  storageBucket: "todoapp-c601b.appspot.com",
  messagingSenderId: "1063770622108"
};
export const Fire = firebase.initializeApp(config);
