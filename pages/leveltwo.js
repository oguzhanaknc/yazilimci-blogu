import React from "react";
import { firebase } from "../components/firebase";
import Adminpanel from "../components/adminwrapper";
let a;
export default class Admin extends React.Component {
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
            <link href='/static/materialize.min.css' rel='stylesheet' />
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
              className='waves-effect waves-light btn'
              onClick={() => {
                firebase
                  .auth()
                  .signInWithEmailAndPassword(this.state.name, this.state.pass)
                  .catch(e => {
                    // TODO: hatalı giriş durumlarını ekrana bastır !
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
            <Adminpanel />
          </div>
        )}
      </>
    );
  }
}
