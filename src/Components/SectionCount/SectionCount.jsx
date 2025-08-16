import { React, useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
const SectionCount = () => {
  const { ref, inView } = useInView({
    threshold: 1, // 50% элемента должно быть видно
    triggerOnce: false, // только один раз запускать
  });

  return (
    <>
      <section ref={ref}>
        
        {inView ? (
          <div>
            <CountUp start={0} end={100} delay={0.5} duration={5.75} />
          </div>
        ) : (
          ""
        )}
      </section>
    </>
  );
};

export default SectionCount;
