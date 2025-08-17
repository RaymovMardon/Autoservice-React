import React from "react";
import "./SectionService.css";
import Card from "./Card";
const SectionService = () => {
  const card = [
    {
      img: "bx bxs-car-battery",
      p: "Авто-Электрик",
      info: "Tel: +998 (94) 618 45 72",
    },
    {
      img: "bx bxs-wrench",
      p: "Авто-Механик",
      info: "Tel: +998 (97) 717 11 18",
    },
    { img: "bx bxs-car-mechanic", p: "Ремонт Авто на Выезд",info: "Tel: +998 (93) 543 42 10", },
    { img: "bx bxs-wrench", p: "Авто-Вулканизация",info: "Tel: +998 (93) 566 35 72", },
    { img: "bx bxs-lock-open-alt", p: "Вскрытия Автомобиля",info: "Tel: +998 (98) 818 12 19", },
    { img: "bx bx-time-five", p: "Выезд Автомастер Круглосуточный",info: "Tel: +998 (90) 466 55 18", },
    { img: "bx bxs-car-battery", p: "Выезд Автоэлектрик Круглосуточный",info: "Tel: +998 (95) 715 84 22", },
    { img: "bx bxs-tachometer", p: "Замена Масла",info: "Tel: +998 (93) 407 00 56", },
    { img: "bx bxs-car-crash", p: "Замена Шин",info: "Tel: +998 (99) 756 22 98", },
    { img: "bx bxs-cog", p: "Обслуживание Двигателя",info: "Tel: +998 (91) 911 12 88", },
    { img: "bx bx-pulse", p: "Диагностика",info: "Tel: +998 (97) 700 10 16", },
    { img: "bx bxs-wrench", p: "Сварочная работа",info: "Tel: +998 (94) 569 00 10", },
    { img: "bx bxs-factory", p: "Токарная услуга",info: "Tel: +998 (97) 745 98 00", },
    { img: "bx bxs-car", p: "Тонировка",info: "Tel: +998 (95) 727 56 48", },
    { img: "bx bxs-cog", p: "Моторист",info: "Tel: +998 (97) 738 72 75", },
    { img: "bx bxs-car-crash", p: "Кастаправ",info: "Tel: +998 (90) 455 22 87", },
  ];
  return (
    <>
      <section id="service">
        <div className="container">
          <h2>Наши Услуги</h2>
          <h3>Ознакомьтесь С Нашими Услугами</h3>
          <div className="service-cards">
            {card.map((todo, index) => (
              <Card key={index} img={todo.img} p={todo.p} info={todo.info} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionService;
