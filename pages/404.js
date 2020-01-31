//burası tek bir postun göstereleceği sayfa
import React from "react";

const NotFound = () => (
  <div>
    <link href="../static/notfound.css" rel="stylesheet" />
    <link href="../static/materialize.min.css" rel="stylesheet" />
    <section className="page_404">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1  ">
              <div className="four_zero_four_bg">
                <h1 className="text-center ">404</h1>
              </div>

              <div className="contant_box_404 ">
                <h3 className="h2">Sanırım Kayboldun ! </h3>

                <p>Gitmek istediğin sayfa artık yok, Yada hiç var olmadı 😔</p>

                <a href="/" className="link_404">
                  Eve Dön !
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default NotFound;
