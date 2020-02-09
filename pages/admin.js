import React from "react";
import { firebase } from "../components/firebase";
import ReactMde from "react-mde";
import * as server from "../server/firebaseFunction";
import * as Showdown from "showdown";
import * as router from "../components/router";
const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true
});

export default class Admin extends React.Component {
  constructor(props) {
    super(props);
    router.authListener();
    this.state = {
      value: "",
      selectedTab: "write",
      title: "",
      slug: "",
      image: "",
      status: "",
      drafts: "",
      detail: "",
      posts: ""
    };
    this.getStatus = this.getStatus.bind(this);
    this.createPost = this.createPost.bind(this);
    this.draftPost = this.draftPost.bind(this);
    this.getDraft = this.getDraft.bind(this);
    this.setDetail = this.setDetail.bind(this);
    this.getStatus();
  }
  componentDidMount() {}
  async createPost() {
    let target = {
      title: this.state.title,
      content: this.state.value,
      slug: this.state.slug,
      image: this.state.image
    };
    await server.setPost(target).then(() => {
      window.alert("yazı başarıyla paylaşıldı");
    });

    this.setState({ title: "", image: "", slug: "", value: "" });
  }
  async draftPost() {
    let target = {
      title: this.state.title,
      content: this.state.value,
      slug: this.state.slug,
      image: this.state.image
    };
    await server.setDraft(target).then(() => {
      window.alert("yazı taslak olarak kayıt edildi");
    });
    this.setState({ title: "", image: "", slug: "", value: "" });
  }
  async getStatus() {
    let posts = await server.getBlogs();
    let status = await server.getStatus();
    this.setState({
      status: status.status,
      detail: status.detail,
      posts: posts
    });
  }

  async setStatus(e) {
    await server
      .setStatus(e.target.value, this.state.detail)
      .then(this.setState({ status: e.target.value }));
  }
  async setDetail(e) {
    await server
      .setDetail(e.target.value, this.state.status)
      .then(this.setState({ detail: e.target.value }));
  }
  async getDraft() {
    let draft = await server.getDrafts();

    this.setState({
      title: draft.snap[draft.id].title,
      image: draft.snap[draft.id].image,
      slug: draft.snap[draft.id].slug,
      value: draft.snap[draft.id].content
    });
  }
  render() {
    return (
      <>
        <style>{globalStyle}</style>

        <div>
          <link href="/static/react-mde-all.css" rel="stylesheet" />
          <link href="/static/materialize.min.css" rel="stylesheet" />
          <div className="header">
            <ul>
              <li>
                <a href="/">Blogu Gör</a>
              </li>
              <li>
                <a href="#">Yazı Ekle</a>
              </li>
              <li>
                <a href="#">Yazılar</a>
              </li>
              <li>
                <a href="#">Yorumlar</a>
              </li>
              <li>
                <a
                  className="cikis"
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

          <div className="add-text-area">
            <a className="add-text-area-title">Yazı Ekle</a>
            <hr />
            <input
              value={this.state.title}
              onChange={e => {
                this.setState({ title: e.target.value });
              }}
              className="title"
              placeholder="Başlık"
            ></input>
            <input
              onChange={e => {
                this.setState({ image: e.target.value });
              }}
              value={this.state.image}
              className="baslik"
              placeholder="Resim Linki"
            ></input>
            <input
              value={this.state.slug}
              onChange={e => {
                this.setState({ slug: e.target.value });
              }}
              className="slug"
              placeholder="Slug"
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
            <div className="centered">
              <button
                className="waves-effect waves-light btn "
                onClick={this.getDraft}
              >
                Son taslağı getir
              </button>
              <button
                className="waves-effect waves-light btn"
                onClick={this.createPost}
              >
                Gönder
              </button>
              <button
                className="waves-effect waves-light btn "
                onClick={this.draftPost}
              >
                Taslak Olarak Ekle
              </button>
            </div>
          </div>
          <div className="little-areas">
            <a className="little-areas-title">Durum Bilgisi</a>

            <input
              value={this.state.status}
              onChange={e => {
                this.setStatus(e);
              }}
            ></input>
          </div>
          <div className="little-areas">
            <a className="little-areas-title">Detay Bilgisi</a>

            <textarea
              id="textarea1"
              className="materialize-textarea detail-area"
              value={this.state.detail}
              onChange={this.setDetail}
            ></textarea>
          </div>
          {this.state.posts && (
            <div className="little-areas">
              <a className="little-areas-title">Yazılar</a>

              {this.state.posts.map(post => (
                <p key>
                  {post.title} <button className="sil">Sil</button>
                  <button className="sil">Düzenle</button>
                </p>
              ))}
            </div>
          )}

          <style jsx>{`
            .sil {
              width: 12%;
              margin-left: 3px;
            }
            button {
              margin-top: 2px;
              width: 100%;
            }
            .add-text-area-title {
              color: #0277bd;
              font-size: 3.5vw;
              margin-left: 17.5vw;
            }
            .little-areas-title {
              color: #c62828;
              font-size: 2.5vw;
              margin-left: 15vw;
            }
            .detail-area {
              height: 120px;
            }
            .add-text-area {
              border-style: solid;
              border-width: 2px;
              margin-top: 10px;
              margin-left: 10px;
              width: 50%;
              float: left;
            }
            .little-areas {
              border-style: solid;
              border-width: 2px;
              margin-top: 10px;
              margin-left: 54%;
              width: 45%;
            }
            .header {
              width: %100;
              height: 50px;
              background-color: #00796b;
            }

            a {
              margin-top: 50px;
              color: #fff;
            }
            a:hover {
              color: #000;
            }
            ul {
              padding-top: 15px;
              list-style: none outside none;
            }

            li {
                cursor:pointer
              position: relative;
              display: inline;
              margin: 20px;
            }
          `}</style>
        </div>
      </>
    );
  }
}
const globalStyle = `
body {
  background: url('../static/images/mX9n9R.webp');
}
`;
