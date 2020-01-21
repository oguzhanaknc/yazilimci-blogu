//burası tek bir postun göstereleceği sayfa
import React from "react";

const NotFound = () => (
  <div>
    <link href='../static/notfound.css' rel='stylesheet' />
    <link href='../static/materialize.min.css' rel='stylesheet' />
    <section class='page_404'>
      <div class='container'>
        <div class='row'>
          <div class='col-sm-12 '>
            <div class='col-sm-10 col-sm-offset-1  '>
              <div class='four_zero_four_bg'>
                <h1 class='text-center '>404</h1>
              </div>

              <div class='contant_box_404 '>
                <h3 class='h2'>Sanırım Kayboldun ! </h3>

                <p>Gitmek istediğin sayfa artık yok, Yada hiç var olmadı 😔</p>

                <a href='/' class='link_404'>
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
