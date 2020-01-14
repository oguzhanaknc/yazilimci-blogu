import React from "react";
import { BrowserView } from "react-device-detect";

const Me = props => (
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
              <p>
                {" "}
                Son Durum : <a className='status'> {props.status.status}</a>
              </p>
              <hr />
              {props.status.detail}
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
      .status {
        animation: blinkingText 0.8s infinite;
      }
      @keyframes blinkingText {
        0% {
          color: #ff0000;
        }
        49% {
          color: #ff1919;
        }
        50% {
          color: #ff3232;
        }
        99% {
          color: transparent;
        }
        100% {
          color: #ff0000;
        }
      }
    `}</style>
  </div>
);

export default Me;
