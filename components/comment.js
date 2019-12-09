import React from "react";
import Link from "next/link";

const Commentarea = () => (
  <div>
    <hr />
    <div className='hero'>
      <div>Yorum Yap</div>
      <br />
      <form className='comment-from' action='/' id='usrform'>
        {" "}
        <input
          placeholder='Ekranda Gözükecek İsminiz'
          className='comment-name-area'
          type='text'
          name='usrname'
        />
        <br />
        <textarea
          className='comment-comment-area'
          name='comment'
          form='usrform'
          placeholder='Yorumunuz'
        ></textarea>
        <br />
        <input className='comment-button' type='submit' />
      </form>
    </div>
    <hr />
    <style jsx>{`
      .hero {
        text-align: center;
        font-family: "Montserrat", sans-serif;
        margin: 10px 0 10px 0;
      }
      .comment-button {
        margin-top: 50px;
        display: block;
        border: none;
        background-color: #fff;
        font-size: 16px;
        cursor: pointer;
        text-align: center;
        color: #000;
        border: 2px solid #000;
        margin: 0 auto;
      }
      .comment-button:hover {
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

export default Commentarea;
