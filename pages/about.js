//blog ana sayfası
import React from "react";
import { NextSeo } from "next-seo";
import GoogleWrapper from "../components/layout";

const About = ({ posts }) => (
  <GoogleWrapper>
    <NextSeo title='Oğuzhan Akıncı' description='Oğuzhan Akıncı Kimdir ? ' />
    <meta charset='utf-8' />
    <meta
      name='viewport'
      content='width=device-width, initial-scale=1, shrink-to-fit=no'
    />

    <title>Oguzhan Akinci</title>

    <link
      rel='stylesheet'
      type='text/css'
      href='../static/../static/assets/css/bootstrap.min.css'
    />

    <link
      rel='stylesheet'
      type='text/css'
      href='../static/assets/fonts/font-awesome.min.css'
    />

    <link
      rel='stylesheet'
      type='text/css'
      href='../static/assets/fonts/simple-line-icons.css'
    />

    <link
      rel='stylesheet'
      type='text/css'
      href='../static/assets/css/slicknav.css'
    />

    <link
      rel='stylesheet'
      type='text/css'
      href='../static/assets/css/menu_sideslide.css'
    />

    <link
      rel='stylesheet'
      type='text/css'
      href='../static/assets/css/slide-style.css'
    />

    <link
      rel='stylesheet'
      type='text/css'
      href='../static/assets/css/nivo-lightbox.css'
    />

    <link
      rel='stylesheet'
      type='text/css'
      href='../static/assets/css/animate.css'
    />

    <link
      rel='stylesheet'
      type='text/css'
      href='../static/assets/css/main.css'
    />

    <link
      rel='stylesheet'
      type='text/css'
      href='../static/assets/css/responsive.css'
    />

    <header id='header-wrap'>
      <div id='hero-area' class='hero-area-bg'>
        <div class='overlay'></div>
        <div class='container'>
          <div class='row'>
            <div class='col-md-12 col-sm-12 text-center'>
              <div class='contents'>
                <h5 class='script-font wow fadeInUp' data-wow-delay='0.2s'>
                  Hi This is
                </h5>
                <h2 class='head-title wow fadeInUp' data-wow-delay='0.4s'>
                  Oğuzhan Akıncı
                </h2>
                <p class='script-font wow fadeInUp' data-wow-delay='0.6s'>
                  Junior Developer
                </p>
                <ul class='social-icon wow fadeInUp' data-wow-delay='0.8s'>
                  <li>
                    <a
                      class='facebook'
                      href='https://www.facebook.com/oguzhanaknc'
                    >
                      <i class='icon-social-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a class='twitter' href='twitter.com/oguzhanaknc'>
                      <i class='icon-social-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a
                      class='instagram'
                      href='https://www.instagram.com/oguzhanaknc_/'
                    >
                      <i class='icon-social-instagram'></i>
                    </a>
                  </li>
                  <li>
                    <a
                      class='linkedin'
                      href='https://www.linkedin.com/in/oguzhanaknc/'
                    >
                      <i class='icon-social-linkedin'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section id='about' class='section-padding'>
      <div class='container'>
        <div class='row'>
          <div class='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
            <div class='img-thumb wow fadeInLeft' data-wow-delay='0.3s'>
              <img
                class='img-fluid'
                src='../static/assets/img/about/about-1.jpg'
                alt=''
              />
            </div>
          </div>
          <div class='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
            <div class='profile-wrapper wow fadeInRight' data-wow-delay='0.3s'>
              <h3>Hi Guys!</h3>
              <p>
                I am a 3rd year student at Karadeniz Technical University,
                Department of Statistics and Computer Science. I am an aspiring
                software developer with Javascript language. Recently I've been
                trying to develop myself on Genetic and Evolutional Programming
                algorithms. I am trying to practice on neuroevolution
                programming..
              </p>
              <div class='about-profile'>
                <ul class='admin-profile'>
                  <li>
                    <span class='pro-title'> Name </span>{" "}
                    <span class='pro-detail'>Oğuzhan Akıncı</span>
                  </li>
                  <li>
                    <span class='pro-title'> Age </span>{" "}
                    <span class='pro-detail'>21 Years</span>
                  </li>
                  <li>
                    <span class='pro-title'> Experience </span>{" "}
                    <span class='pro-detail'>4 Years</span>
                  </li>
                  <li>
                    <span class='pro-title'> Country </span>{" "}
                    <span class='pro-detail'>Turkey</span>
                  </li>
                  <li>
                    <span class='pro-title'> Location </span>{" "}
                    <span class='pro-detail'>Ankara / Trabzon</span>
                  </li>
                  <li>
                    <span class='pro-title'> e-mail </span>{" "}
                    <span class='pro-detail'>oguzhanaknc06@gmail.com</span>
                  </li>
                  <li>
                    <span class='pro-title'> Freelance </span>{" "}
                    <span class='pro-detail'>Available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id='services' class='services section-padding'>
      <h2 class='section-title wow flipInX' data-wow-delay='0.4s'>
        What I do
      </h2>
      <div class='container'>
        <div class='row'>
          <div class='col-md-6 col-lg-3 col-xs-12'>
            <div class='services-item wow fadeInDown' data-wow-delay='0.3s'>
              <div class='icon'>
                <i class='icon-grid'></i>
              </div>
              <div class='services-content'>
                <h3>
                  <a href='#'>Web Development</a>
                </h3>
                <p>
                  I can develop projects with React and Nextjs. Take a look at
                  my blog site as an example.
                </p>
              </div>
            </div>
          </div>

          <div class='col-md-6 col-lg-3 col-xs-12'>
            <div class='services-item wow fadeInDown' data-wow-delay='0.6s'>
              <div class='icon'>
                <i class='icon-layers'></i>
              </div>
              <div class='services-content'>
                <h3>
                  <a href='#'>Mobile Development</a>
                </h3>
                <p>
                  I can develop mobile applications using React Native. See
                  Scode as an example.
                </p>
              </div>
            </div>
          </div>

          <div class='col-md-6 col-lg-3 col-xs-12'>
            <div class='services-item wow fadeInDown' data-wow-delay='0.9s'>
              <div class='icon'>
                <i class='icon-briefcase'></i>
              </div>
              <div class='services-content'>
                <h3>
                  <a href='#'>School Projects</a>
                </h3>
                <p>
                  I can develop software for your school projects in languages
                  ​​like Python, C #, C ++, C. I can be outsourcing
                </p>
              </div>
            </div>
          </div>

          <div class='col-md-6 col-lg-3 col-xs-12'>
            <div class='services-item wow fadeInDown' data-wow-delay='1.2s'>
              <div class='icon'>
                <i class='icon-bubbles'></i>
              </div>
              <div class='services-content'>
                <h3>
                  <a href='#'>evolutionary Programming</a>
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

    <footer class='footer-area section-padding'>
      <div class='container'>
        <div class='row'>
          <div class='col-md-12'>
            <div
              class='footer-text text-center wow fadeInDown'
              data-wow-delay='0.3s'
            >
              <ul class='social-icon'>
                <li>
                  <a
                    class='facebook'
                    href='https://www.facebook.com/oguzhanaknc'
                  >
                    <i class='icon-social-facebook'></i>
                  </a>
                </li>
                <li>
                  <a class='twitter' href='twitter.com/oguzhanaknc'>
                    <i class='icon-social-twitter'></i>
                  </a>
                </li>
                <li>
                  <a
                    class='instagram'
                    href='https://www.instagram.com/oguzhanaknc_/'
                  >
                    <i class='icon-social-instagram'></i>
                  </a>
                </li>
                <li>
                  <a
                    class='linkedin'
                    href='https://www.linkedin.com/in/oguzhanaknc/'
                  >
                    <i class='icon-social-linkedin'></i>
                  </a>
                </li>
              </ul>
              <p>Copyright © 2020 Oğuzhan Akıncı All Right Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <a href='#' class='back-to-top'>
      <i class='icon-arrow-up'></i>
    </a>

    <script src='../static/assets/js/jquery-min.js'></script>
    <script src='../static/assets/js/popper.min.js'></script>
    <script src='../static/assets/js/bootstrap.min.js'></script>
    <script src='../static/assets/js/jquery.mixitup.js'></script>
    <script src='../static/assets/js/jquery.counterup.min.js'></script>
    <script src='../static/assets/js/waypoints.min.js'></script>
    <script src='../static/assets/js/wow.js'></script>
    <script src='../static/assets/js/jquery.nav.js'></script>
    <script src='../static/assets/js/jquery.easing.min.js'></script>
    <script src='../static/assets/js/nivo-lightbox.js'></script>
    <script src='../static/assets/js/jquery.slicknav.js'></script>
    <script src='../static/assets/js/main.js'></script>
    <script src='../static/assets/js/form-validator.min.js'></script>
    <script src='../static/assets/js/contact-form-script.min.js'></script>
    <script src='../static/assets/js/map.js'></script>
  </GoogleWrapper>
);
const globalStyle = `
body {
    background-color: #222;
}
`;
export default About;
