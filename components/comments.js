import React from "react";
import { firebase } from "../components/firebase";
import * as server from "../server/firebaseFunction";
class CommentSarea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      <div>
        <hr />
        <div className='hero'>
          <h5 className='comment-title'>Yorumlar</h5>
          {this.props.data &&
            this.props.data.map(comment => (
              <div className='comment-show-area'>
                <h6 className='comment-author'>{comment.author}</h6>
                <p className='comment-comment'>{comment.comment}</p>
                {this.state.user && (
                  <button
                    onClick={() => {
                      server.deleteComment(comment);
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
