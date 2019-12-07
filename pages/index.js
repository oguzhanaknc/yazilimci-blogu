//blog ana sayfası
import React from "react";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import Uparea from "../components/up";
import Blog from "../components/blog";
import "../public/style";
const Home = ({ posts }) => (
  <div className='hero-container'>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Uparea />
    {posts.map(post => (
      <Blog
        title={post.title}
        content={post.content}
        date={post.date}
        slug={post.slug}
        full={1}
      />
    ))}

    <style jsx>{`
      .hero-container {
        max-width: 650px;
        with: 100%;
        margin: 0 auto;
      }
    `}</style>
  </div>
);
Home.getInitialProps = async ({ req }) => {
  const res = await fetch("http://localhost:3000/api/posts");
  const json = await res.json();

  return { posts: json.posts };
};
export default Home;
