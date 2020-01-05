import React from "react";
import { firebase, auth } from "../components/firebase";

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: ""
    };
  }
  componentDidMount() {
    if (localStorage.getItem("uid") == undefined) {
      localStorage.setItem("uid", "");
    }
    this.setState({ uid: this.getdata() });
  }
  getdata() {
    return localStorage.getItem("uid");
  }
  setdata(value) {
    localStorage.setItem("uid", value);
    this.setState({ uid: value });
    window.location.replace("/");
  }
  render() {
    return (
      <>
        {this.state.uid == "" && (
          <div>
            <textarea>isim</textarea>
            <textarea>şifre</textarea>
            <button
              onClick={() => {
                firebase
                  .auth()
                  .signInWithEmailAndPassword(
                    "oguzhanaknc06@gmail.com",
                    "RaiderSys06"
                  )
                  .then(x => {
                    if (x) {
                      this.setdata(x.user.uid);
                    }
                  });
              }}
            >
              giriş Yap
            </button>
          </div>
        )}
        {this.state.uid != "" && <div>Hoşgeldin Oğuzhan</div>}
      </>
    );
  }
}
export default Admin;
