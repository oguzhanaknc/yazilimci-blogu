//blog ana sayfası
// TODO SAYFALAMA İŞLEMİ YAPABİLMEK İÇİN REACT COMPONENTİ HALİNE GETİRDİM SAYFAYI
import React, { useState } from "react";
import Head from "next/head";
import Me from "../components/me";
import fetch from "isomorphic-unfetch";
import Uparea from "../components/up";
import Blog from "../components/blog";
import Mytable from "../components/table";
import GoogleWrapper from "../components/layout";
import * as firebase from "../server/firebaseFunction";
import readtime from "../components/minread";
import { NextSeo } from "next-seo";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 1,
      alt: 0,
      ust: 3
    };
  }
  componentDidMount() {
    localStorage.setItem("c", this.props.posts.length);
  }
  render() {
    return (
      <GoogleWrapper>
        <NextSeo
          title='Oğuzhan Akıncı'
          description='Oğuzhan Akıncı nın kişisel yazılım üzerine blog sitesi.'
        />
        <div>
          <Head>
            <title>Oguzhan Akinci</title>
            <link rel='icon' href='/favicon.ico' />

            <link href='/static/materialize.min.css' rel='stylesheet' />

            <style>{globalStyle}</style>
          </Head>

          <Uparea />

          <div className='hero-container'>
            {this.props.posts
              .slice(this.state.alt, this.state.ust)
              .map(post => (
                <Blog
                  title={post.title}
                  content={post.content.substring(0, 450) + "..."}
                  date={post.date}
                  slug={post.slug}
                  full={1}
                  readtime={readtime(post.content)}
                  image={post.image}
                  key={post.id}
                />
              ))}

            {0 <= this.state.alt - 3 && (
              <button
                className='btn waves-effect waves-light'
                onClick={() => {
                  this.setState({ alt: this.state.alt - 3 });
                  this.setState({ ust: this.state.ust - 3 });
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                  });
                }}
              >
                Önceki Sayfa
              </button>
            )}
            {this.props.posts.length >= this.state.alt + 3 && (
              <button
                className='btn waves-effect waves-light'
                onClick={() => {
                  this.setState({ alt: this.state.alt + 3 });

                  this.setState({ ust: this.state.ust + 3 });
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                  });
                }}
              >
                Sonraki Sayfa
              </button>
            )}
          </div>

          <Me status={this.props.status} />
          <Mytable repos={this.props.repos} />
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
  }
}

Home.getInitialProps = async ({ req }) => {
  const resforrepo = await fetch(
    `https://api.github.com/users/oguzhanaknc/repos?sort=created`
  );
  let posts = await firebase.getBlogs();
  let status = await firebase.getStatus();
  posts = posts.reverse();
  const repoJson = await resforrepo.json();
  const pageCount = posts.length;
  return {
    posts: posts,
    repos: repoJson.slice(0, 3),
    pages: pageCount,
    status: status
  };
};
const globalStyle = `
body {
  background: #F8F8F8;
}

`;
export default Home;
