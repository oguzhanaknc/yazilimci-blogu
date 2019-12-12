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
        <div class='card'>
          <div class='card-image'>
            <img src='https://excellentdynamics.biz/demos/themes/beauty-blog/wp-content/uploads/2018/08/roxy.jpg' />
            <span class='card-title'>Oğuzhan Akıncı</span>
          </div>
          <div class='card-content'>
            <p>
              I am a very simple card. I am good at containing small bits of
              information. I am convenient because I require little markup to
              use effectively.
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
