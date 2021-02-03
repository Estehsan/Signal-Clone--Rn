import * as firebase from "firebase";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAYf5iGLD62GL6vLCWER1WNuvh0yV5jmqg",
  authDomain: "signal-clone-b00ac.firebaseapp.com",
  projectId: "signal-clone-b00ac",
  storageBucket: "signal-clone-b00ac.appspot.com",
  messagingSenderId: "473843538265",
  appId: "1:473843538265:web:65ad69010f31c01e1a9448",
  measurementId: "G-TMX8Z7NT0F",
};
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

 const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
