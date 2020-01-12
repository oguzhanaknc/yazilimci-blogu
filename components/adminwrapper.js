import React from "react";
import { firebase, auth } from "../components/firebase";
import ReactMde from "react-mde";

import * as Showdown from "showdown";

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true
});

class Adminpanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      selectedTab: "write",
      title: "",
      slug: "",
      image: "",
      status: ""
    };
    this.getStatus = this.getStatus.bind(this);
    this.createPost = this.createPost.bind(this);
    this.getStatus();
  }

  async createPost() {
    let d = new Date();
    await firebase
      .database()
      .ref("blogs/" + (parseInt(localStorage.getItem("c")) + parseInt(1)))
      .set({
        title: this.state.title,
        content: this.state.value,
        slug: this.state.slug,
        image: this.state.image,
        date: d.getDay() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear()
      })
      .then(() => {
        window.location.reload();
      });

    this.setState({ title: "", image: "", slug: "", value: "" });
  }

  async getStatus() {
    let status;
    await firebase
      .database()
      .ref("/Me/")
      .once("value")
      .then(function(snapshot) {
        status = snapshot.val().status;
      });
    console.log(status);

    this.setState({ status: status });
  }
  async setStatus(e) {
    await firebase
      .database()
      .ref("Me/")
      .set({
        status: e.target.value
      })
      .then(this.setState({ status: e.target.value }));
  }
  render() {
    return (
      <div>
        <link href='/static/react-mde-all.css' rel='stylesheet' />
        <link href='/static/materialize.min.css' rel='stylesheet' />
        <div className='header'>
          <ul>
            <li>
              <a href='/'>Blogu Gör</a>
            </li>
            <li>
              <a href='#'>Yazı Ekle</a>
            </li>
            <li>
              <a href='#'>Yazılar</a>
            </li>
            <li>
              <a href='#'>Yorumlar</a>
            </li>
            <li>
              <a
                className='cikis'
                onClick={() => {
                  firebase.auth().signOut();

                  window.location.reload();
                }}
              >
                Çıkış Yap
              </a>
            </li>
          </ul>
        </div>

        <div className='text-area'>
          <h4 className='baslik-text'>Yazı Ekle</h4>
          <hr />
          <input
            onChange={e => {
              this.setState({ title: e.target.value });
            }}
            className='baslik'
            placeholder='Başlık'
          ></input>
          <input
            onChange={e => {
              this.setState({ image: e.target.value });
            }}
            className='baslik'
            placeholder='Resim Linki'
          ></input>
          <input
            onChange={e => {
              this.setState({ slug: e.target.value });
            }}
            className='slug'
            placeholder='Slug'
          ></input>
          <ReactMde
            value={this.state.value}
            onChange={e => {
              this.setState({ value: e });
            }}
            selectedTab={this.state.selectedTab}
            onTabChange={() => {
              this.setState({
                selectedTab:
                  this.state.selectedTab == "write" ? "preview" : "write"
              });
            }}
            generateMarkdownPreview={markdown =>
              Promise.resolve(converter.makeHtml(markdown))
            }
          />
          <button
            className='waves-effect waves-light btn ortala'
            onClick={this.createPost}
          >
            Gönder
          </button>
        </div>
        <div className='comment-area'>
          <h4 className='baslik-text'>Yorumlar</h4>

          <table>
            <thead>
              <tr>
                <th>Yazı</th>
                <th>Yazar</th>
                <th>yorum</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Alan</td>
                <td>Jellybean</td>
                <td>$3.76</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='comment-area'>
          <h4 className='baslik-text'>Yazılar</h4>
          <table>
            <thead>
              <tr>
                <th>Başlık</th>
                <th>İçerik</th>
                <th>Tarih</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Alvin</td>
                <td>Eclair</td>
                <td>$0.87</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='comment-area'>
          <h6>Durum Bilgisi</h6>

          <input
            placeholder={this.state.status}
            onChange={e => {
              this.setStatus(e);
            }}
          ></input>
        </div>
        <style jsx>{`
          .baslik-text {
            padding-left: 245px;
            color: Red;
          }
          .slug {
            width: 20%;
            margin: 10px;
            margin-left: 150px !important;
            font-size: 10px;
          }
          .ortala {
            margin-left: 295px !important;
            margin: 10px;
          }
          .baslik {
            width: 50%;
            margin: 10px;
            font-size: 20px;
          }
          .text-area {
            border-style: solid;
            border-width: 2px;
            margin-top: 10px;
            margin-left: 10px;
            width: 50%;
            float: left;
          }
          .comment-area {
            border-style: solid;
            border-width: 2px;
            margin-top: 10px;
            margin-right: 20px;
            width: 45%;
            float: right;
          }
          .header {
            width: %100;
            height: 50px;
            color: #000;
            background-color: #000;
          }
          .cikis {
            margin-left: 750px;
          }
          a {
            margin-top: 50px;
            color: #fff;
          }
          a:hover {
            color: #f6f6;
          }
          ul {
            padding-top: 15px;
            list-style: none outside none;
          }

          li {
            position: relative;
            display: inline;
            margin: 20px;
          }
        `}</style>
      </div>
    );
  }
}

export default Adminpanel;
