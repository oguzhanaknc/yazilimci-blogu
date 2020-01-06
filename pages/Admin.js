import React from "react";
import { firebase, auth } from "../components/firebase";
let a;
class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      pass: "",
      user: null
    };
    this.authListener = this.authListener.bind(this);
    this.authListener();
  }

  authListener() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user: user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <>
        {!this.state.user && (
          <div>
            <input
              type='text'
              placeholder='isim'
              onChange={e => {
                this.setState({ name: e.target.value });
              }}
            ></input>
            <input
              type='password'
              placeholder='password'
              onChange={e => {
                this.setState({ pass: e.target.value });
              }}
            ></input>

            <button
              onClick={() => {
                firebase
                  .auth()
                  .signInWithEmailAndPassword(this.state.name, this.state.pass)
                  .catch(e => {
                    console.log(e);
                  })
                  .then(x => {
                    if (x) {
                      this.setState({ user: x });
                    }
                  });
              }}
            >
              giriş Yap
            </button>
          </div>
        )}
        {this.state.user && (
          <div>
            <p>selam oğuzhan</p>
            <button
              onClick={() => {
                firebase.auth().signOut();

                window.location.reload();
              }}
            >
              Çıkış Yap
            </button>
          </div>
        )}
      </>
    );
  }
}

export default Admin;
