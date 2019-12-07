import React from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const Blog = props => (
  <div>
    <div className='card'>
      <div className='cardbody'>
        <Link href={props.slug}>
          <a className='blog-header'>{props.title}</a>
        </Link>
        <ReactMarkdown source={props.content} />
      </div>
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
      }

      .button:hover {
        background-color: #000; /* Green */
        color: #fff;
      }
      .blog-header {
        color: #002f6c;
        font-size: 28px;
      }
      a {
        color: #002f6c;
        text-decoration: none;
      }
      .blog-date {
        text-align: right;
        color: #000a12;
        margin: 12px 0 15px 0;
      }
      .card {
        box-shadow: 0px 4px 8px 4px rgba(0, 0, 0, 0.2);
        transition: 0.3s;
      }

      .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
      }

      .cardbody {
        padding: 16px 16px;
      }
    `}</style>
  </div>
);

export default Blog;
