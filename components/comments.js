import React from "react";
import Link from "next/link";

const CommentSarea = props => (
  <div>
    <hr />
    <div className='hero'>
      <h5 className='comment-title'>Yorumlar</h5>
      <div className='comment-show-area'>
        <h6 className='comment-author'>Selman Kayha</h6>
        <p className='comment-comment'>
          "Gerçekten Harika Bir Blog Olmuş Büyük Ödül Senin"
        </p>
      </div>
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

export default CommentSarea;
