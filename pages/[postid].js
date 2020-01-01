//burası tek bir postun göstereleceği sayfa
import React from "react";
import Head from "next/head";
import Blog from "../components/blog";
import Uparea from "../components/up";
import { NextSeo } from "next-seo";
const BlogPost = ({ post, comment }) => (
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
      readtime={post.readtime}
      comments={comment}
    />

    <style jsx>{`
      .hero-container {
        max-width: 650px;
        with: 100%;
        margin: 0 auto;
      }
    `}</style>
  </div>
);
BlogPost.getInitialProps = async ({ req, query }) => {
  /* const res = await fetch(
    `https://oguzhanaknc.herokuapp.com/api/post/${query.postid}`
  );*/
  const res = await fetch(
    `https://oguzhanaknc.herokuapp.com/api/post/${query.postid}`
  );
  const json = await res.json();

  return { post: json.post, comment: json.comment };
};
const globalStyle = `
body {
  background: url('https://i.hizliresim.com/mX9n9R.png');
}
`;

export default BlogPost;
