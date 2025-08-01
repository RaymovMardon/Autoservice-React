import React from "react";
import "./SectionAbout.css";
import img5 from "./img/about.jpg";
const SectionAbout = () => {
  return (
    <>
      <section id="about">
        <div className="container">
          <div className="wrapper-about">
            <div className="about-left">
              <div className="baground-about">
                <p>
                  <span>15</span> Лет <br />
                  Опыт
                </p>
              </div>
              <img src={img5} alt="about" />
            </div>
            <div className="about-right">
              <h2>// О НАС //</h2>
              <div>
                <h3>
                  <span>Sigma Avtoservis</span> - Лучшее Место Для Ухода За
                  Вашим Авто
                </h3>
                <p>
                  Мы предоставляем высококачественные услуги по ремонту
                  автомобилей с многолетним опытом и профессионализмом. Наша
                  команда экспертов готова помочь вам в любой ситуации.
                </p>
              </div>
              <div className="info-wrapper">
                <div className="number">
                  <h4>01</h4>
                </div>
                <div className="info">
                  <h4>Профессионалы и Эксперты</h4>
                  <p>
                    Наши специалисты обладают высоким уровнем квалификации и
                    профессионализма.
                  </p>
                </div>
              </div>
              <div className="info-wrapper">
                <div className="number">
                  <h4>02</h4>
                </div>
                <div className="info">
                  <h4>Качественный Сервисный Центр</h4>
                  <p>
                    Мы гарантируем высокое качество обслуживания каждого
                    клиента.
                  </p>
                </div>
              </div>
              <div className="info-wrapper">
                <div className="number">
                  <h4>03</h4>
                </div>
                <div className="info">
                  <h4>Награжденные Работники</h4>
                  <p>
                    Наши сотрудники удостоены многочисленных наград за свою
                    работу.
                  </p>
                </div>
              </div>
              <div className="btn">
                <a href="tel:+998977387275">ПОЗВОНИТЬ</a>
                <a href="#">
                  <i class="bx bx-right-arrow-alt"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionAbout;
