//blog ana sayfası
import React, { useState } from "react";
import Head from "next/head";
import Me from "../components/me";
import fetch from "isomorphic-unfetch";
import Uparea from "../components/up";
import Blog from "../components/blog";
import Mytable from "../components/table";
import GoogleWrapper from "../components/layout";
const Home = ({ posts, repos, pages }) => (
  <GoogleWrapper>
    <div>
      <Head>
        <title>Oguzhan Akinci</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          href='https://fonts.googleapis.com/css?family=Baskervville|Montserrat|Open+Sans&display=swap'
          rel='stylesheet'
        ></link>
        <link
          href='https://fonts.googleapis.com/css?family=Sacramento&display=swap'
          rel='stylesheet'
        ></link>
        <link
          href='https://fonts.googleapis.com/icon?family=Material+Icons'
          rel='stylesheet'
        ></link>

        <link href='/static/materialize.min.css' rel='stylesheet' />

        <style>{globalStyle}</style>
      </Head>

      <Uparea />
      <div className='hero-container'>
        {posts.map(post => (
          <Blog
            title={post.title}
            content={post.content}
            date={post.date}
            slug={post.slug}
            full={1}
            readtime={post.readtime}
            image={post.image}
            key={post.id}
          />
        ))}
      </div>
      <Me />
      <Mytable repos={repos} />
      <style jsx>{`
        .hero-container {
          max-width: 750px;
          with: 100%;
          margin-left: 10%;
          float: left;
        }
        @media (max-width: 500px) {
          .hero-container {
            margin-right: 10%;
          }
        }
      `}</style>
    </div>
  </GoogleWrapper>
);

Home.getInitialProps = async ({ req }) => {
  //const res = await fetch("https://oguzhanaknc.herokuapp.com/api/posts");
  const res = await fetch(process.env.URL + "/api/posts");
  const resforrepo = await fetch(
    `https://api.github.com/users/oguzhanaknc/repos?sort=created`
  );
  const json = await res.json();
  const repoJson = await resforrepo.json();
  const pageCount = json.posts.length;
  return { posts: json.posts, repos: repoJson.slice(0, 3), pages: pageCount };
};
const globalStyle = `
body {
  background: #F8F8F8;
}

`;
export default Home;
