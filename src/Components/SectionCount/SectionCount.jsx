import { React } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import video from "../../../public/video2.mp4";
import "./SectionCount.css";
const SectionCount = () => {
  const { ref, inView } = useInView({
    threshold: 0, // 50% элемента должно быть видно
    triggerOnce: false, // только один раз запускать
  });

  return (
    <>
      <section ref={ref} id="section_count">
        <div className="section_count_relative">
          {inView ? (
            <div className="section_absolute">
              <h2>Нам доверяют</h2>
              <div className="section_count_wrp">
                <div>
                <i class='bx  bx-user-check'  ></i> 
                  <h6>Мастеров:</h6>
                  <span>+
                    <CountUp start={0} end={35} delay={0.5} duration={5.75} />
                  </span>
                </div>
                <div>
                  {" "}
                  <i class="bx  bx-package"></i>
                  <h6>Автозапчастей:</h6>
                  <span>
                    <CountUp
                      start={5000}
                      end={10000}
                      delay={0.5}
                      duration={4.75}
                    />
                  </span>
                </div>
                <div>
                  {" "}
                  <i class='bx  bx-like'  ></i> 
                  <h6>Довольных клиентов:</h6>
                  <span>+
                    <CountUp
                      start={700}
                      end={1000}
                      delay={0.5}
                      duration={2.75}
                    />
                  </span>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <video autoPlay loop muted playsInline>
          <source src={video} type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
      </section>
    </>
  );
};

export default SectionCount;
