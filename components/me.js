import React from "react";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

const Me = () => (
  <div>
    <BrowserView>
      <div className='card-wrapper'>
        <div className='card'>
          <div className='card-image'>
            <img src='https://avatars1.githubusercontent.com/u/16177609?v=4' />
            <span className='card-title'>Oğuzhan Akıncı</span>
          </div>
          <div className='card-content'>
            <p>
              Ben Oğuzhan Akıncı. Karadeniz Teknik Üniversitesi İstatistik ve
              Bilgisayar Bilimleri 3.Sınıf Öğrencisiyim. Javascript dili ile
              yazılım geliştirme konusunda hevesli bir yazılımcı adayıyım.
            </p>
          </div>
        </div>
      </div>
    </BrowserView>
    <style jsx>{`
      .card-wrapper {
        max-width: 260px;
        margin-left: 70%;
        margin-top: 20px;
        height: 20px;
      }
    `}</style>
  </div>
);

export default Me;
