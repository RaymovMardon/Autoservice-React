import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-wrapper">
            <div>
              <h4>Адрес</h4>
              <p>
                <i class="bx bxs-location-plus"></i> ул.яккасарайcкая,
                г.Ташкент, Узбекистан, Ориентир : Напротив свадебный рестаран
                Navruz
              </p>
              <i class="bx bxs-phone"></i>
              <a href="">+99897 717 11 18</a>
              <br />
              <i class="bx bxs-phone"></i>
              <a href="">+99897 738 72 75</a>
            </div>
            <div>
              <h4>Часы Работы</h4>
              <p>
                Понедельник - Воскресенье:
                <br />
                24/7
              </p>
            </div>

            <div>
              <h4>Услуги</h4>
              <ul>
                <li>
                  <a href="tel:+998977387275">Диагностика</a>
                </li>
                <li>
                  <a href="tel:+998977387275">Обслуживание Двигателя</a>
                </li>
                <li>
                  <a href="tel:+998977387275">Замена Шин</a>
                </li>
                <li>
                  <a href="tel:+998977387275">Замена Масла</a>
                </li>
                <li>
                  <a href="tel:+998977387275">Токарная Услуга</a>
                </li>
                <li>
                  <a href="tel:+998977387275">Тонировка</a>
                </li>
                <li>
                  <a href="tel:+998977387275">Моторист</a>
                </li>
                <li>
                  <a href="tel:+998977387275">Кастаправ</a>
                </li>
                <li>
                  <a href="tel:+998977387275">Вакуумная Чистка</a>
                </li>
                <li>
                  <a href="tel:+998977387275">Авто-Электрик</a>
                </li>
                <li>
                  <a href="tel:+998977387275">Авто-Механик</a>
                </li>
                <li>
                  <a href="tel:+998977387275">
                    Выезд Автоэлектрик Круглосуточный
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Контакты</h4>
              <div className="btn">
                <a href="tel:+998977387275">Вызвать Мастера</a>
                <a href="#">
                  <i class="bx bx-right-arrow-alt"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="hr">
            <hr />
            <div>
              ©
              <a class="border-bottom" href="#">
                sigmaservis.uz.
              </a>
              <p> Все права защищены</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
