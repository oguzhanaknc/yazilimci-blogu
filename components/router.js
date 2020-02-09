import { firebase } from "../components/firebase";

export async function authListener(param) {
  firebase.auth().onAuthStateChanged(user => {
    if (user && param == "login") {
      window.location.replace("/admin");
    }
    if (!user && param != "login") {
      window.location.replace("/login");
    }
  });
}
