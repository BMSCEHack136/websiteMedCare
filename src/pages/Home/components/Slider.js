import React from "react";
import "./index2.css";

export default function Slider() {
  //   <script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>;

  return (
    <div>
      <section className="features-section">
        <div className="container2">
          <div className="swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <a href="#">
                  <img src="picture1.jpg" />
                </a>
              </div>

              <div className="swiper-slide">
                <a href="#">
                  <img src="picture2.jpg" />
                </a>
              </div>

              <div className="swiper-slide">
                <a href="#">
                  <img src="picture3.jpg" />
                </a>
              </div>
            </div>

            <div className="swiper-pagination"></div>

            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
