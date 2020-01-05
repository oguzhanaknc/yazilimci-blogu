import React from "react";
import { firebase } from "../components/firebase";
import { database } from "firebase";
class CommentSarea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      admin: ""
    };
  }
  componentDidMount() {
    this.setState({ admin: this.getitem() });
  }
  getitem() {
    return localStorage.getItem("uid");
  }
  async deleteComment(comment) {
    await firebase
      .database()
      .ref("/comments/")
      .once("value")
      .then(function(snapshot) {
        if (snapshot.val()) {
          for (let i = 0; i <= Object.keys(snapshot.val() + 1).length; i++) {
            if (
              snapshot.val()[i] &&
              snapshot.val()[i].author == comment.author &&
              snapshot.val()[i].comment == comment.comment
            ) {
              database()
                .ref("comments/" + i)
                .remove();
              window.location.reload();
            }
          }
        }
      });
    /* await firebase
      .database()
      .ref("comments/" + i)
      .remove();
    window.location.reload();*/
  }
  render() {
    return (
      <div>
        <hr />
        <div className='hero'>
          <h5 className='comment-title'>Yorumlar</h5>
          {this.props.data &&
            this.props.data.map(comment => (
              <div className='comment-show-area'>
                <h6 className='comment-author'>{comment.author}</h6>
                <p className='comment-comment'>{comment.comment}</p>
                {this.state.admin && (
                  <button
                    onClick={() => {
                      this.deleteComment(comment);
                    }}
                  >
                    Yorumu Sil
                  </button>
                )}
              </div>
            ))}
          {!this.props.data && <p>Hiç Yorum Yok İlk Yorum Yapan Sen Ol</p>}
        </div>

        <style jsx>{`
          .hero {
            text-align: center;
            font-family: "Montserrat", sans-serif;
            margin: 10px 0 10px 0;
          }
          .comment-show-area {
            margin-top: 20px;
            border-style: solid;
            border-width: 1px;
          }
          .comment-title {
            color: #c4001d;
          }
          .comment-author {
            color: #303f9f;
          }
          .comment-comment {
            font-size: 12px;
          }
          .comment-comment-area {
            display: block;
            color: inherit;
            width: 50%;
            font-family: inherit;
            font-size: var(--inputFontSize);
            font-weight: inherit;
            line-height: var(--inputLineHeight);
            border-radius: 0.4rem;
            transition: box-shadow var(--transitionDuration);
            margin: 0 auto;
            padding: var(--inputPaddingV) var(--inputPaddingH);
          }
          .comment-name-area {
            display: block;
            color: inherit;
            width: 50%;
            font-family: inherit;
            font-size: var(--inputFontSize);
            font-weight: inherit;
            line-height: var(--inputLineHeight);

            border-radius: 0.4rem;
            transition: box-shadow var(--transitionDuration);
            margin: 0 auto;
            padding: var(--inputPaddingV) var(--inputPaddingH);
          }
        `}</style>
      </div>
    );
  }
}

export default CommentSarea;
