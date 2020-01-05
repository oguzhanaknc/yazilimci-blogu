//burası tek bir postun göstereleceği sayfa
import React from "react";
import Head from "next/head";
import Blog from "../components/blog";
import Uparea from "../components/up";
import GoogleWrapper from "../components/layout";
import { firebase } from "../components/firebase";
import minread from "../components/minread";
const BlogPost = ({ post, comments, count }) => (
  <GoogleWrapper>
    <div className='hero-container'>
      <Head>
        <title>{post.title}</title>
        <link rel='icon' href='/favicon.ico' />
        <style>{globalStyle}</style>
        <link
          href='https://fonts.googleapis.com/css?family=Sacramento&display=swap'
          rel='stylesheet'
        ></link>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css'
        ></link>
        <link
          href='https://fonts.googleapis.com/icon?family=Material+Icons'
          rel='stylesheet'
        ></link>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js'></script>
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
  let f = "_n";
  let mineText;
  let mineComments = [];
  await firebase
    .database()
    .ref("/blogs/")
    .once("value")
    .then(function(snapshot) {
      snapshot.val().map(x => {
        if (x.slug == query.postid) {
          x.content = x.content.split(f).join("\n");
          mineText = x;
        }
      });
    });
  let count = 0;
  await firebase
    .database()
    .ref("/comments/")
    .once("value")
    .then(function(snapshot) {
      if (snapshot.val()) {
        count += snapshot.val().length - 1;
        for (let i = 0; i <= Object.keys(snapshot.val()).length + 1; i++) {
          console.log(i);

          if (snapshot.val()[i] && snapshot.val()[i].slug == query.postid) {
            mineComments.push(snapshot.val()[i]);
          }
        }
      }
    });
  return { post: mineText, comments: mineComments, count: count };
};
const globalStyle = `
body {
  background: url('https://i.hizliresim.com/mX9n9R.png');
}
`;

export default BlogPost;
