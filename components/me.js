import React from "react";
import { BrowserView } from "react-device-detect";

const Me = props => (
  <div>
    <BrowserView>
      <div className="card-wrapper card">
        <div>
          <div className="card-image">
            <img src="https://avatars1.githubusercontent.com/u/16177609?v=4" />
            <span className="card-title">Oğuzhan Akıncı</span>
          </div>
          <div className="card-content">
            <p>
              {" "}
              Son Durum : <a className="status"> {props.status.status}</a>
            </p>
            <hr />
            <p>{props.status.detail}</p>
          </div>
        </div>
      </div>
    </BrowserView>
    <style jsx>{`
      .card-wrapper {
        position: -webkit-sticky; /* Safari */
        position: sticky;
        max-width: 20%;
        margin-left: 70vw;
        margin-top: 12.5vh;
        height: 5%;
      }
      @media (max-width: 500px) {
        .card-wrapper {
          display:none;
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
