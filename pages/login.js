import React from "react";
import { firebase } from "../components/firebase";
import * as router from "../components/router";
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      pass: "",
      user: null
    };
  }
  componentDidMount() {
    router.authListener("login");
  }
  render() {
    return (
      <>
        <style>{globalStyle}</style>

        <h1 className="baslik">LOGIN</h1>

        <div className="panel">
          <div className="module">
            <div className="textbox">
              <link href="/static/materialize.min.css" rel="stylesheet" />
              <input
                type="text"
                placeholder="Email"
                onChange={e => {
                  this.setState({ name: e.target.value });
                }}
              ></input>
              <input
                type="password"
                placeholder="password"
                onChange={e => {
                  this.setState({ pass: e.target.value });
                }}
              ></input>
            </div>
            <button
              className="waves-effect waves-light btn button"
              onClick={() => {
                firebase
                  .auth()
                  .signInWithEmailAndPassword(this.state.name, this.state.pass)
                  .catch(e => {
                    alert(e);
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
        </div>
        <style jsx>{`
          .panel {
            width: 50%;
            padding: 3px;
            margin: 0 auto;

            place-items: center;
            border-radius: 5px;
            background: linear-gradient(
              90deg,
              rgba(2, 0, 36, 1) 0%,
              rgba(9, 121, 75, 1) 35%,
              rgba(0, 212, 255, 1) 100%
            );
          }
          .module {
            background: #fff;
          }
          .textbox {
            padding: 20px;
          }
          .baslik {
            margin-left: 42%;
            margin-top: 10%;
          }
          .button {
            margin: 0px 0px 5px 40%;
          }
        `}</style>
      </>
    );
  }
}
const globalStyle = `
body {
  background: url('../static/images/mX9n9R.webp');
}
`;
