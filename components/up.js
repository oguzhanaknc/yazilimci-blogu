import React from "react";
import Link from "next/link";

const Uparea = () => (
  <div>
    <div className='hero'>
      <h1 className='hero-title'>Oğuzhan A.</h1>

      <div className='hero-main-links'>
        <Link href='/index'>
          <a className='main-link'>Anasayfa</a>
        </Link>
        <Link href='/about'>
          <a className='main-link'>Hakkımda</a>
        </Link>
      </div>
      <div className='hero-social-links'>
        <Link href='https://www.instagram.com/oguzhanaknc_/'>
          <a className='hero-social'>Instagram</a>
        </Link>
        <Link href='https://twitter.com/oguzhanaknc'>
          <a className='hero-social'>Twitter</a>
        </Link>
        <Link href=''>
          <a className='hero-social'>Github</a>
        </Link>
        <Link href=''>
          <a className='hero-social'>Linkedin</a>
        </Link>
      </div>
    </div>

    <style jsx>{`
      .hero {
        text-align: center;
        margin: 10px 0 10px 0;
      }
      .hero-social {
        color: #00838f;
        margin: 0 8px 0 8px;
        font-family: "Open Sans", sans-serif;
        text-decoration: none;
      }
      .hero-social:hover {
        color: #d50000;
      }
      .hero-title {
        font-size: 48px;
        font-family: "Baskervville", serif;
      }
      .main-link {
        margin-right: 8px;
        color: #000;
        font-family: "Open Sans", sans-serif;
      }
      .main-link:hover {
        color: #d50000;
      }
      .hero-main-links {
        margin-bottom: 10px;
      }
    `}</style>
  </div>
);

export default Uparea;
