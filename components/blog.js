import React from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { BrowserView } from "react-device-detect";
import Commentarea from "./comment";
import CommentSarea from "./comments";
const Blog = props => (
  <div>
    <div className='card'>
      <div className='card-image'>
        <img src={props.image} />
        <span className='card-title' href={"/" + props.slug}>
          {props.title}
        </span>
      </div>

      <div className='card-content'>
        <div className='blog-min-read'>{props.readtime} min read</div>
        <hr />
        <ReactMarkdown className='blog-content' source={props.content} />
        <div className='blog-date'>{props.date}</div>
      </div>
      {props.full != 1 && (
        <div>
          <CommentSarea data={props.comment} />
          <Commentarea id={props.comment.length + 1} slug={props.slug} />
        </div>
      )}

      {props.full == 1 && (
        <div className='card-action'>
          <Link href={props.slug}>
            <a>Devamını Oku</a>
          </Link>
        </div>
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

      .blog-min-read {
        text-align: left;

        font-size: 12px;
      }

      .blog-header {
        margin-left: 30%;
        color: #002f6c;
        font-size: 28px;
        font-family: "Montserrat", sans-serif;
      }
      a {
        color: #002f6c;
        text-decoration: none;
      }
      .mt {
        font-size: 60px !important;
      }
      .blog-date {
        text-align: right;
        color: #000a12;
        margin: 10px 25px 25px 25px;
        font-family: "Montserrat", sans-serif;
      }
    `}</style>
  </div>
);

export default Blog;
