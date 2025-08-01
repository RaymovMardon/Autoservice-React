import React from "react";
import "./SectionService.css";
import Card from "./Card";
const SectionService = () => {
  const card = [
    {
      img: "bx bxs-car-battery",
      p: "Авто-Электрик",
    },
    { img: "bx bxs-wrench", p: "Авто-Механик" },
    { img: "bx bxs-car-mechanic", p: "Ремонт Авто на Выезд" },
    { img: "bx bxs-wrench", p: "Авто-Вулканизация" },
    { img: "bx bxs-lock-open-alt", p: "Вскрытия Автомобиля" },
    { img: "bx bx-time-five", p: "Выезд Автомастер Круглосуточный" },
    { img: "bx bxs-car-battery", p: "Выезд Автоэлектрик Круглосуточный" },
    { img: "bx bxs-tachometer", p: "Замена Масла" },
    { img: "bx bxs-car-crash", p: "Замена Шин" },
    { img: "bx bxs-cog", p: "Обслуживание Двигателя" },
    { img: "bx bx-pulse", p: "Диагностика" },
    { img: "bx bxs-wrench", p: "Сварочная работа" },
    { img: "bx bxs-factory", p: "Токарная услуга" },
    { img: "bx bxs-car", p: "Тонировка" },
    { img: "bx bxs-cog", p: "Моторист" },
    { img: "bx bxs-car-crash", p: "Кастаправ" },
  ];
  return (
    <>
      <section id="service">
        <div className="container">
          <h2>Наши Услуги</h2>
          <h3>Ознакомьтесь С Нашими Услугами</h3>
          <div className="service-cards">
          {card.map((todo, index) => (
            <Card key={index} img={todo.img} p={todo.p} />
          ))}
        </div>
        </div>
      </section>
    </>
  );
};

export default SectionService;
