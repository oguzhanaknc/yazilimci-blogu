import React from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon
} from "react-share";
import Commentarea from "./comment";
import CommentSarea from "./comments";
const Blog = props => (
  <div>
    <div className='card'>
      <div class='card-image'>
        <img src='https://images.unsplash.com/photo-1477988976454-4477e6d161d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' />
        <div className='asd'>
          <span class='card-title'>{props.title}</span>
        </div>
      </div>
      <div class='card-content'>
        <div className='blog-min-read'>{props.readtime} min read</div>
        <hr />
        <ReactMarkdown className='blog-content' source={props.content} />
        <div className='blog-date'>{props.date}</div>
      </div>
      {props.full != 1 && (
        <div>
          <CommentSarea />
          <Commentarea />
        </div>
      )}

      {props.full == 1 && (
        <div class='card-action'>
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
