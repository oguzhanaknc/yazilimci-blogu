//burası tek bir postun göstereleceği sayfa
import React from "react";
import Head from "next/head";
import Blog from "../components/blog";
import Uparea from "../components/up";
import GoogleWrapper from "../components/layout";
import * as firebase from "../server/firebaseFunction";
import minread from "../components/minread";
const BlogPost = ({ post, comments, count }) => (
  <GoogleWrapper>
    <div className='hero-container'>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <style>{globalStyle}</style>

        <link href='/static/materialize.min.css' rel='stylesheet' />
      </Head>

      <Uparea />
      <Blog
        title={post.title}
        content={post.content}
        date={post.date}
        slug={post.slug}
        readtime={minread(post.content)}
        image={post.image}
        comment={comments}
        count={count}
      />

      <style jsx>{`
        .hero-container {
          max-width: 650px;
          with: 100%;
          margin: 0 auto;
        }
      `}</style>
    </div>
  </GoogleWrapper>
);
BlogPost.getInitialProps = async ({ req, query }) => {
  let post = await firebase.getBlog(query.postid);
  let com = await firebase.getComments(query.postid);
  return { post: post, comments: com.comments, count: com.count };
};
const globalStyle = `
body {
  background: url('../static/images/mX9n9R.webp');
}
`;

export default BlogPost;
