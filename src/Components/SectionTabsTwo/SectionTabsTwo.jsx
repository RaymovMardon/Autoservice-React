import React from "react";
import Tabs from "rsuite/Tabs";
import "rsuite/Tabs/styles/index.css";
import "./SectionTabs.css";
import img6 from "../SectionTabs/img/service-1.jpg";
import img7 from "../SectionTabs/img/service-2.jpg";
import img8 from "../SectionTabs/img/service-3.jpg";
import img9 from "../SectionTabs/img/service-4.jpg";
import img10 from "../SectionTabs/img/img10.PNG";
const SectionTabsTwo = () => {
  return (
    <>
      <section id="tabs">
        <div className="container">
          <Tabs defaultActiveKey="1" vertical appearance="subtle">
            <Tabs.Tab eventKey="1" title="Диагностика">
              <div className="tabs-wrapper">
                <div className="tabs-first">
                  <img src={img6} alt="service" />
                </div>
                <div className="tabs-second">
                  <div>
                    <h3>15 Лет Опытa в Автосервисе</h3>
                    <p>
                      Мы предоставляем высококачественные услуги по диагностике
                      вашего автомобиля, используя самые современные технологии
                      и оборудование.
                    </p>
                  </div>
                  <div>
                    <img src={img10} alt="" />
                    <p>Качественное Обслуживание</p>
                  </div>
                  <div>
                    <img src={img10} alt="" />
                    <p>Опытные Специалисты</p>
                  </div>
                  <div>
                    <img src={img10} alt="" />
                    <p>Современное Оборудование</p>
                  </div>
                </div>
              </div>
            </Tabs.Tab>
            <Tabs.Tab eventKey="2" title="Обслуживание Двигателя">
              <div className="tabs-wrapper">
                <div className="tabs-first">
                  <img src={img7} alt="service" />
                </div>
                <div className="tabs-second">
                  <div>
                    <h3>15 Лет Опытa в Автосервисе</h3>
                    <p>
                      Наши специалисты готовы предложить вам комплексное
                      обслуживание двигателя, чтобы ваш автомобиль всегда
                      работал на максимальной производительности.
                    </p>
                  </div>
                  <div>
                    <img src={img10} alt="" />
                    <p>Качественное Обслуживание</p>
                  </div>
                  <div>
                    <img src={img10} alt="" />
                    <p>Опытные Специалисты</p>
                  </div>
                  <div>
                    <img src={img10} alt="" />
                    <p>Современное Оборудование</p>
                  </div>
                </div>
              </div>
            </Tabs.Tab>
            <Tabs.Tab eventKey="3" title="Замена Шин">
              <div className="tabs-wrapper">
                <div className="tabs-first">
                  <img src={img8} alt="service" />
                </div>
                <div className="tabs-second">
                  <div>
                    <h3>15 Лет Опытa в Автосервисе</h3>
                    <p>
                      Мы предлагаем профессиональную замену шин, чтобы ваш
                      автомобиль был безопасен на дороге при любых погодных
                      условиях.
                    </p>
                  </div>
                  <div>
                    <img src={img10} alt="" />
                    <p>Качественное Обслуживание</p>
                  </div>
                  <div>
                    <img src={img10} alt="" />
                    <p>Опытные Специалисты</p>
                  </div>
                  <div>
                    <img src={img10} alt="" />
                    <p>Современное Оборудование</p>
                  </div>
                </div>
              </div>
            </Tabs.Tab>
            <Tabs.Tab eventKey="4" title="Замена Масла">
              <div className="tabs-wrapper">
                <div className="tabs-first">
                  <img src={img9} alt="service" />
                </div>
                <div className="tabs-second">
                  <div>
                    <h3>15 Лет Опытa в Автосервисе</h3>
                    <p>
                      Мы предлагаем быструю и качественную замену масла, чтобы
                      ваш двигатель работал плавно и эффективно.
                    </p>
                  </div>
                  <div>
                    <img src={img10} alt="" />
                    <p>Качественное Обслуживание</p>
                  </div>
                  <div>
                    <img src={img10} alt="" />
                    <p>Опытные Специалисты</p>
                  </div>
                  <div>
                    <img src={img10} alt="" />
                    <p>Современное Оборудование</p>
                  </div>
                </div>
              </div>
            </Tabs.Tab>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default SectionTabsTwo;
