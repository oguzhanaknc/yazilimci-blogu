//blog ana sayfası
import React from "react";
import Head from "next/head";
import Link from "next/link";
import GoogleWrapper from "../components/layout";
const About = ({ posts }) => (
  <GoogleWrapper>
    <div className='hero-container'>
      <Head>
        <title>Hakkımda</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          href='https://fonts.googleapis.com/css?family=Baskervville|Montserrat|Open+Sans&display=swap'
          rel='stylesheet'
        ></link>
        <style>{globalStyle}</style>
      </Head>
      <div id='gradient'></div>
      <div id='card'>
        <img src='https://www.kisa.link/Mvr6' />
        <h2>Oğuzhan Akıncı</h2>
        <p>Karadeniz Teknik Üniversitesi Öğrencisi</p>
        <p>
          en Oğuzhan Akıncı. Karadeniz Teknik Üniversitesi İstatistik ve
          Bilgisayar Bilimleri 3.Sınıf Öğrencisiyim. Javascript dili ile yazılım
          geliştirme konusunda hevesli bir yazılımcı adayıyım. Son zamanlarda
          kendimi Genetik ve Everimsel Programlama algoritmaları üzerinde
          geliştirmeye çalışıyorum. neuroevolution (Nöro Evrimsel) programlama
          üzerinde pratik yapmaya çalışıyorum.
        </p>

        <span className='left bottom'>oguzhanaknc06@gmail.com </span>
        <span className='right bottom'>Ankara / Trabzon</span>
        <div className='hero-main-links'>
          <Link href='http://oguzhan.codes'>
            <a className='main-link'>Anasayfa</a>
          </Link>
        </div>
      </div>
      <style jsx>{`
        body {
          margin: 0 auto;
          padding: 0;
          background: #000;
        }

        .left {
          left: 25px;
        }

        .right {
          right: 25px;
        }

        .center {
          text-align: center;
        }

        .bottom {
          position: absolute;
          bottom: 25px;
        }

        #gradient {
          background: #999955;
          background-image: linear-gradient(
            #dab046 20%,
            #d73b25 20%,
            #d73b25 40%,
            #c71b25 40%,
            #c71b25 60%,
            #961a39 60%,
            #961a39 80%,
            #601035 80%
          );
          margin: 0 auto;
          margin-top: 100px;
          width: 100%;
          height: 150px;
        }

        #gradient:after {
          content: "";
          position: absolute;
          background: #e9e2d0;
          left: 50%;
          margin-top: -67.5px;
          margin-left: -270px;
          padding-left: 20px;
          border-radius: 5px;
          width: 520px;
          height: 275px;
          z-index: -1;
        }

        #card {
          position: absolute;
          width: 450px;
          height: 300px;
          padding: 25px;
          padding-top: 0;
          padding-bottom: 0;
          left: 50%;
          top: 67.5px;
          margin-left: -250px;
          background: #e9e2d0;
          box-shadow: -20px 0 35px -25px black, 20px 0 35px -25px black;
          z-index: 5;
        }

        #card img {
          width: 150px;
          float: left;
          border-radius: 5px;
          margin-right: 20px;
          -webkit-filter: sepia(1);
          -moz-filter: sepia(1);
          filter: sepia(1);
        }

        #card h2 {
          font-family: courier;
          color: #333;
          margin: 0 auto;
          padding: 0;
          font-size: 15pt;
        }

        #card p {
          font-family: courier;
          color: #555;
          font-size: 13px;
        }

        #card span {
          font-family: courier;
        }
      `}</style>
    </div>
  </GoogleWrapper>
);
const globalStyle = `
body {
    background-color: #222;
}
`;
export default About;
