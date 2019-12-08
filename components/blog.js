import React from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon
} from "react-share";
const Blog = props => (
  <div>
    <div className='card'>
      <div className='cardbody'>
        <div className='author-area'>
          <div className='blog-details'>Oğuzhan Akıncı</div>
          <div className='blog-min-read'>{props.readtime} min read</div>
          <img
            src='https://www.w3schools.com/howto/img_avatar.png'
            alt='Avatar'
            className='avatar'
          ></img>
        </div>
        <img
          src='https://miro.medium.com/max/4000/1*S4golQzBEiv42TvhQSig1w.jpeg'
          alt='Avatar'
          className='blog-image'
        ></img>
        <Link href={props.slug}>
          <a className='blog-header'>{props.title}</a>
        </Link>
        <ReactMarkdown className='blog-content' source={props.content} />
      </div>
      <div className='share-with-social'>
        <h4 className='share-text'>Sosyal Medyada Paylaş</h4>
        <ul>
          <li>
            {" "}
            <FacebookShareButton
              quote='Bu muhteşem yazıya kesın bakın.'
              url='google.com'
            >
              <FacebookIcon />
            </FacebookShareButton>{" "}
          </li>
          <li>
            {" "}
            <TwitterShareButton
              className='twitter-share'
              quote='Bu muhteşem yazıya kesın bakın.'
              url='google.com'
            >
              <TwitterIcon
                quote='Bu muhteşem yazıya kesın bakın.'
                url='google.com'
              />
            </TwitterShareButton>{" "}
          </li>
        </ul>
      </div>
      <hr></hr>

      <div className='blog-date'>{props.date}</div>
      {props.full == 1 && (
        <Link href={props.slug}>
          <button type='button' className='block button'>
            Devamını Oku
          </button>
        </Link>
      )}
    </div>

    <style jsx>{`
      ul {
        list-style: none outside none;
      }

      li {
        position: relative;
        display: inline;
        margin: 20px;
      }
      .share-text {
        font-family: "Montserrat", sans-serif;
        font-size: 15px;
        color: #002f6c;
      }
      .share-with-social {
        margin: 10px 0 0 35%;
      }
      .blog-details {
        text-align: center;
        position: absolute;
        margin: 5px 0 0 60px;
        font-size: 15px;
      }
      .blog-min-read {
        text-align: center;
        position: absolute;
        margin: 25px 0 0 60px;
        font-size: 12px;
      }
      .blog-image {
        width: 100%;
        height: 350px;
      }
      .avatar {
        vertical-align: middle;
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      .author-area {
        margin: 0 55% 20px 20px;
      }
      .block {
        display: block;
        width: 100%;
        border: none;
        background-color: #fff;
        padding: 14px 28px;
        font-size: 16px;
        cursor: pointer;
        text-align: center;
        color: #000;
        border: 2px solid #000; /* Green */
        margin-bottom: 16px;
        font-family: "Montserrat", sans-serif;
      }
      .blog-content {
        font-family: "Montserrat", sans-serif;
      }
      .button:hover {
        background-color: #000; /* Green */
        color: #fff;
      }
      .blog-header {
        color: #002f6c;
        font-size: 28px;
        font-family: "Montserrat", sans-serif;
      }
      a {
        color: #002f6c;
        text-decoration: none;
      }
      .blog-date {
        text-align: right;
        color: #000a12;
        margin: 10px 25px 25px 25px;
        font-family: "Montserrat", sans-serif;
      }
      .card {
        box-shadow: 0px 4px 8px 4px rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        background: #fff;
      }

      .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
      }

      .cardbody {
        font-family: "Montserrat", sans-serif;
        padding: 16px 16px;
      }
    `}</style>
  </div>
);

export default Blog;
