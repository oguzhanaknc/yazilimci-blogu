import React from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
const Blog = props => (
  <div>
    <div className='blog'>
      <h2 className='blog-title'>
        <Link href={props.slug}>
          <a>{props.title}</a>
        </Link>
      </h2>
      <div className='blog-content'>
        <ReactMarkdown source={props.content} />
      </div>
      <div className='blog-date'>{props.date}</div>
    </div>

    <style jsx>{`
      a {
        color: #002f6c;
        text-decoration: none;
      }
      .blog-date {
        text-align: right;
        color: #000a12;
        margin: 12px 0 48px 0;
      }
    `}</style>
  </div>
);

export default Blog;
