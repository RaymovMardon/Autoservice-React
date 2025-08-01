import React from "react";
import "./SectionLocation.css";
const SectionLocation = () => {
  return (
    <>
      <section id="location">
        <div className="container">
          <div className="loc-wrapper">
            <h6>// Свяжитесь с Нами //</h6>
            <h1>Свяжитесь с Нами по Любым Вопросам</h1>
            <div className="first-wrap">
              <div className="info-loc">
                <h5>// Бронирование //</h5>
                <div className="info-loc-p">
                  <i class="bx bx-envelope"></i>
                  <p>+99897 717 11 18</p>
                </div>
              </div>
              <div className="info-loc">
                <h5>// Общие Вопросы //</h5>
                <div className="info-loc-p">
                  <i class="bx bx-envelope"></i>
                  <p>+99897 738 72 75</p>
                </div>
              </div>
            </div>
            <div className="second-wrap">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d916.7022270282583!2d69.28578144411344!3d41.33870560538239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b4e3088e9bf%3A0xdd9a89a16d423604!2sIT%20Time%20Academy!5e0!3m2!1sru!2s!4v1746309675385!5m2!1sru!2s"
             
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionLocation;
