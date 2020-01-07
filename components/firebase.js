import firebase from "firebase";
import "firebase/auth";
var firebaseConfig = {
  apiKey: "**************",
  authDomain: "************",
  databaseURL: "***************",
  projectId: "**************",
  storageBucket: "*************",
  messagingSenderId: "**************",
  appId: "****************************"
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
export { auth, firebase };
