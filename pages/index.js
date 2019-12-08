//blog ana sayfası
import React from "react";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import Uparea from "../components/up";
import Blog from "../components/blog";

const Home = ({ posts }) => (
  <div className='hero-container'>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
      <link
        href='https://fonts.googleapis.com/css?family=Baskervville|Montserrat|Open+Sans&display=swap'
        rel='stylesheet'
      ></link>
      <style>{globalStyle}</style>
    </Head>
    <Uparea />
    {posts.map(post => (
      <Blog
        title={post.title}
        content={post.content}
        date={post.date}
        slug={post.slug}
        full={1}
        readtime={post.readtime}
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
const globalStyle = `
body {
  background: url('https://i.hizliresim.com/DOvavO.png');
}
`;
export default Home;
