import React, { useState } from "react";
import "./Header.css";
import img from "./img/logo.png";

const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <header>
        <div className="container">
          <div className="header-wrap">
            <a href="#">
              <img src={img} alt="" />
            </a>

            <nav>
              <ul>
                <li>
                  <a href="#intro">Главная </a>
                </li>

                <li>
                  <a href="#about">О нас</a>
                </li>
                <li>
                  <a href="#service">УСЛУГИ </a>
                </li>
                <li>
                  <a href="#location">КОНТАКТЫ </a>
                </li>
                <li>
                  <a href="tel:+998977171118"> +99897 717 11 18 </a>
                </li>
                <li>
                  <div className="btn">
                    <a href="tel:+998977387275">Вызвать Мастера</a>
                    <a href="#">
                      <i className="bx bx-right-arrow-alt"></i>
                    </a>
                  </div>
                </li>
              </ul>
            </nav>
            <div onClick={() => setMenu(!menu)} className="bars">
              <i className="bx bx-menu"></i>
            </div>
          </div>
        </div>
      </header>
      {menu ? (
        <div className="slide-box">
          <ul>
            <li onClick={() => setMenu(!menu)}>
              <a href="#intro">Главная </a>
            </li>
            <li onClick={() => setMenu(!menu)}>
              <a href="#about">О нас</a>
            </li>
            <li onClick={() => setMenu(!menu)}>
              <a href="#service">УСЛУГИ </a>
            </li>
            <li onClick={() => setMenu(!menu)}>
              <a href="#location">КОНТАКТЫ </a>
            </li>
            <li onClick={() => setMenu(!menu)}>
              <a href="tel:+998977171118"> +99897 717 11 18 </a>
            </li>
            <li onClick={() => setMenu(!menu)}>
              <a href="tel:+998977387275">Вызвать Мастера</a>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Header;
