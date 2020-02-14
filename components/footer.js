import React from "react";

import Head from "next/head";

const Footerx = () => (
  <>
    <Head>
      <link href="../static/materialize.min.css" rel="stylesheet" />
    </Head>

    <footer class="page-footer">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Oğuzhan Akıncı</h5>
            <p class="grey-text text-lighten-4">
              Yazılım ve Teknolojiye Dair Yazmaya Çalıştığım Kişisel Blog'um.
            </p>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
          <a rel="license" href="http://www.oguzhan.codes/license.txt"></a>
          <br />
          MIT License{" "}
          <a rel="license" href="http://www.oguzhan.codes/license.txt">
            {" "}
            Copyright (c)
          </a>{" "}
          2020 Oğuzhan Akıncı
        </div>
      </div>
    </footer>

    <style jsx>{`
      .container {
        background-color: #fff;
      }
      a {
        color: #afafaf;
      }
      a:hover {
        color: #fff;
      }
    `}</style>
  </>
);

export default Footerx;
