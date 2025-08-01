{
  /*<div class="cards">
<div class="card">
  <div class="wrapper-left">
    <h2>// Ремонт автомобилей //</h2>
    <h1>Ремонт автомобиля в </h1>
    <div className="btn">
      <a href="#">УЗНАТЬ БОЛЬШЕ</a>
    </div>
  </div>
  <div className="wrapper-right">
    <img src="" alt="авто" />
  </div>
</div>
</div>
*/
}

import React from "react";
import "./SectionIntro.css";
import img1 from "./img/img1.png";
import img2 from "./img/img2.jpeg";
import img3 from "./img/img3.jpg";
import img4 from "./img/img4.png";
import img5 from "./img/img5.png";

const SectionIntro = () => {
  return (
    <>
      <section id="intro">
        <div className="container-two">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="img-c">
                  <img className="carusel-img" src={img1} alt="First slide" />
                </div>
                <div className="cards">
                  <div className="wrapper-left">
                    <h2>// Ремонт автомобилей //</h2>
                    <h1>Ремонт автомобиля в рассрочку</h1>
                    <div className="btn">
                      <a href="#">УЗНАТЬ БОЛЬШЕ</a>
                      <a href="#">
                        <i class="bx bx-right-arrow-alt"></i>
                      </a>
                    </div>
                  </div>
                  <div className="wrapper-right">
                    <img className="intro-img" src={img4} alt="авто" />
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="img-c">
                  <img className="carusel-img" src={img2} alt="Second slide" />
                </div>
                <div className="cards">
                  <div className="wrapper-left">
                    <h2>// Ремонт автомобилей //</h2>
                    <h1>Помощь на дороге</h1>
                    <div className="btn">
                      <a href="#">УЗНАТЬ БОЛЬШЕ</a>
                      <a href="#">
                        <i class="bx bx-right-arrow-alt"></i>
                      </a>
                    </div>
                  </div>
                  <div className="wrapper-right">
                    <img className="intro-img" src={img5} alt="авто" />
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="img-c">
                  <img className="carusel-img" src={img3} alt="Third slide" />
                </div>
                <div className="cards">
                  <div className="wrapper-left">
                    <h2>// Ремонт автомобилей //</h2>
                    <h1>Автозапчасти лучшего качества</h1>
                    <div className="btn">
                      <a href="#">УЗНАТЬ БОЛЬШЕ</a>
                      <a href="#">
                        <i class="bx bx-right-arrow-alt"></i>
                      </a>
                    </div>
                  </div>
                  <div className="wrapper-right">
                    <img className="intro-img" src={img5} alt="авто" />
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionIntro;
