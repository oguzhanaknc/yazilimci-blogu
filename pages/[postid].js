//burası tek bir postun göstereleceği sayfa
import React from "react";
import Head from "next/head";
import Blog from "../components/blog";
import Uparea from "../components/up";

const BlogPost = ({ post }) => (
  <div className='hero-container'>
    <Head>
      <title>{post.title}</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Uparea />
    <Blog
      title={post.title}
      content={post.content}
      date={post.date}
      slug={post.slug}
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
  const res = await fetch(`http://localhost:3000/api/post/${query.postid}`);

  const json = await res.json();

  return { post: json.post };
};
export default BlogPost;
