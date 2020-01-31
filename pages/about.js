//blog ana sayfası
import React from "react";
import { NextSeo } from "next-seo";
import GoogleWrapper from "../components/layout";

const About = ({ posts }) => (
  <GoogleWrapper>
    <NextSeo title="Oğuzhan Akıncı" description="Oğuzhan Akıncı Kimdir ? " />
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />

    <title>Oguzhan Akinci</title>

    <link
      rel="stylesheet"
      type="text/css"
      href="../static/../static/assets/css/bootstrap.min.css"
    />

    <link
      rel="stylesheet"
      type="text/css"
      href="../static/assets/fonts/font-awesome.min.css"
    />

    <link
      rel="stylesheet"
      type="text/css"
      href="../static/assets/fonts/simple-line-icons.css"
    />

    <link
      rel="stylesheet"
      type="text/css"
      href="../static/assets/css/slicknav.css"
    />

    <link
      rel="stylesheet"
      type="text/css"
      href="../static/assets/css/menu_sideslide.css"
    />

    <link
      rel="stylesheet"
      type="text/css"
      href="../static/assets/css/slide-style.css"
    />

    <link
      rel="stylesheet"
      type="text/css"
      href="../static/assets/css/nivo-lightbox.css"
    />

    <link
      rel="stylesheet"
      type="text/css"
      href="../static/assets/css/animate.css"
    />

    <link
      rel="stylesheet"
      type="text/css"
      href="../static/assets/css/main.css"
    />

    <link
      rel="stylesheet"
      type="text/css"
      href="../static/assets/css/responsive.css"
    />

    <header id="header-wrap">
      <div id="hero-area" className="hero-area-bg">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 text-center">
              <div className="contents">
                <h5 className="script-font wow fadeInUp" data-wow-delay="0.2s">
                  Hi This is
                </h5>
                <h2 className="head-title wow fadeInUp" data-wow-delay="0.4s">
                  Oğuzhan Akıncı
                </h2>
                <p className="script-font wow fadeInUp" data-wow-delay="0.6s">
                  Junior Developer
                </p>
                <ul className="social-icon wow fadeInUp" data-wow-delay="0.8s">
                  <li>
                    <a
                      className="facebook"
                      href="https://www.facebook.com/oguzhanaknc"
                    >
                      <i className="icon-social-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a className="twitter" href="twitter.com/oguzhanaknc">
                      <i className="icon-social-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="instagram"
                      href="https://www.instagram.com/oguzhanaknc_/"
                    >
                      <i className="icon-social-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="linkedin"
                      href="https://www.linkedin.com/in/oguzhanaknc/"
                    >
                      <i className="icon-social-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section id="about" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="img-thumb wow fadeInLeft" data-wow-delay="0.3s">
              <img
                className="img-fluid"
                src="../static/assets/img/about/about-1.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div
              className="profile-wrapper wow fadeInRight"
              data-wow-delay="0.3s"
            >
              <h3>Hi Guys!</h3>
              <p>
                I am a 3rd year student at Karadeniz Technical University,
                Department of Statistics and Computer Science. I am an aspiring
                software developer with Javascript language. Recently I've been
                trying to develop myself on Genetic and Evolutional Programming
                algorithms. I am trying to practice on neuroevolution
                programming..
              </p>
              <div className="about-profile">
                <ul className="admin-profile">
                  <li>
                    <span className="pro-title"> Name </span>{" "}
                    <span className="pro-detail">Oğuzhan Akıncı</span>
                  </li>
                  <li>
                    <span className="pro-title"> Age </span>{" "}
                    <span className="pro-detail">21 Years</span>
                  </li>
                  <li>
                    <span className="pro-title"> Experience </span>{" "}
                    <span className="pro-detail">4 Years</span>
                  </li>
                  <li>
                    <span className="pro-title"> Country </span>{" "}
                    <span className="pro-detail">Turkey</span>
                  </li>
                  <li>
                    <span className="pro-title"> Location </span>{" "}
                    <span className="pro-detail">Ankara / Trabzon</span>
                  </li>
                  <li>
                    <span className="pro-title"> e-mail </span>{" "}
                    <span className="pro-detail">oguzhanaknc06@gmail.com</span>
                  </li>
                  <li>
                    <span className="pro-title"> Freelance </span>{" "}
                    <span className="pro-detail">Available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="services" className="services section-padding">
      <h2 className="section-title wow flipInX" data-wow-delay="0.4s">
        What I do
      </h2>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3 col-xs-12">
            <div className="services-item wow fadeInDown" data-wow-delay="0.3s">
              <div className="icon">
                <i className="icon-grid"></i>
              </div>
              <div className="services-content">
                <h3>
                  <a href="#">Web Development</a>
                </h3>
                <p>
                  I can develop projects with React and Nextjs. Take a look at
                  my blog site as an example.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 col-xs-12">
            <div className="services-item wow fadeInDown" data-wow-delay="0.6s">
              <div className="icon">
                <i className="icon-layers"></i>
              </div>
              <div className="services-content">
                <h3>
                  <a href="#">Mobile Development</a>
                </h3>
                <p>
                  I can develop mobile applications using React Native. See
                  Scode as an example.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 col-xs-12">
            <div className="services-item wow fadeInDown" data-wow-delay="0.9s">
              <div className="icon">
                <i className="icon-briefcase"></i>
              </div>
              <div className="services-content">
                <h3>
                  <a href="#">School Projects</a>
                </h3>
                <p>
                  I can develop software for your school projects in languages
                  ​​like Python, C #, C ++, C. I can be outsourcing
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 col-xs-12">
            <div className="services-item wow fadeInDown" data-wow-delay="1.2s">
              <div className="icon">
                <i className="icon-bubbles"></i>
              </div>
              <div className="services-content">
                <h3>
                  <a href="#">evolutionary Programming</a>
                </h3>
                <p>
                  It would be a great pleasure for me to work on evolutionary
                  and genetic programming projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer className="footer-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div
              className="footer-text text-center wow fadeInDown"
              data-wow-delay="0.3s"
            >
              <ul className="social-icon">
                <li>
                  <a
                    className="facebook"
                    href="https://www.facebook.com/oguzhanaknc"
                  >
                    <i className="icon-social-facebook"></i>
                  </a>
                </li>
                <li>
                  <a className="twitter" href="twitter.com/oguzhanaknc">
                    <i className="icon-social-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="instagram"
                    href="https://www.instagram.com/oguzhanaknc_/"
                  >
                    <i className="icon-social-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="linkedin"
                    href="https://www.linkedin.com/in/oguzhanaknc/"
                  >
                    <i className="icon-social-linkedin"></i>
                  </a>
                </li>
              </ul>
              <p>Copyright © 2020 Oğuzhan Akıncı All Right Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <a href="#" className="back-to-top">
      <i className="icon-arrow-up"></i>
    </a>

    <script src="../static/assets/js/jquery-min.js"></script>
    <script src="../static/assets/js/popper.min.js"></script>
    <script src="../static/assets/js/bootstrap.min.js"></script>
    <script src="../static/assets/js/jquery.mixitup.js"></script>
    <script src="../static/assets/js/jquery.counterup.min.js"></script>
    <script src="../static/assets/js/waypoints.min.js"></script>
    <script src="../static/assets/js/wow.js"></script>
    <script src="../static/assets/js/jquery.nav.js"></script>
    <script src="../static/assets/js/jquery.easing.min.js"></script>
    <script src="../static/assets/js/nivo-lightbox.js"></script>
    <script src="../static/assets/js/jquery.slicknav.js"></script>
    <script src="../static/assets/js/main.js"></script>
    <script src="../static/assets/js/form-validator.min.js"></script>
    <script src="../static/assets/js/contact-form-script.min.js"></script>
    <script src="../static/assets/js/map.js"></script>
  </GoogleWrapper>
);
const globalStyle = `
body {
    background-color: #222;
}
`;
export default About;
