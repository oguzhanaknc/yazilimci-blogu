import firebase from "firebase";
import "firebase/auth";
var firebaseConfig = {
  apiKey: "AIzaSyAM_gGqUxk0-faWvJP4TKU7wEvNN-vIac4",
  authDomain: "oguzhanakinciblog.firebaseapp.com",
  databaseURL: "https://oguzhanakinciblog.firebaseio.com",
  projectId: "oguzhanakinciblog",
  storageBucket: "oguzhanakinciblog.appspot.com",
  messagingSenderId: "937758449479",
  appId: "1:937758449479:web:ef65942a657dd4d94eb662"
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
export { auth, firebase };
