import { React, useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
const SectionCount = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  /*useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // Запускаем один раз
        }
      },
      {
        threshold: 0.5, // Сколько % секции должно быть видно
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);*/
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true); // 4️⃣ Меняем состояние, когда элемент в зоне видимости
          observer.disconnect(); // (по желанию) отключаем наблюдение
        }
      },
      {
        threshold: 0.5, // 3️⃣ Условие: элемент должен быть хотя бы на 50% виден
      }
    );
    console.log(inView);

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // 2️⃣ Передаём DOM-элемент в observer
    }

    return () => observer.disconnect(); // 🧹 Очистка
  }, []);
  return (
    <>
      <section ref={sectionRef}>
        <div>
          {console.log(inView, sectionRef)}
          <CountUp start={0} end={100} delay={5} duration={2.75} />
        </div>
      </section>
    </>
  );
};

export default SectionCount;
