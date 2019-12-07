import React from "react";
import Link from "next/link";

const Uparea = () => (
  <div>
    <div className='hero'>
      <h1 className='hero-title'>Oğuzhan A.</h1>
      <div className='hero-social-links'>
        <Link href=''>
          <a className='hero-social'>Instagram</a>
        </Link>
        <Link href=''>
          <a className='hero-social'>Twitter</a>
        </Link>
        <Link href=''>
          <a className='hero-social'>Facebook</a>
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
        margin: 96px 0;
      }
      .hero-social {
        color: #e91e63;
        margin: 0 8px 0 8px;
      }
      .hero-title {
        font-size: 48px;
      }
    `}</style>
  </div>
);

export default Uparea;
