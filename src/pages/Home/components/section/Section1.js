import React from "react";
import animate from "../../Assets/animation2.gif";
import "../section/section1.css";
export default function () {
  return (
    <div>
      <section class="hero">
        <div class="container">
          <div class="left-col" style={{ marginLeft: "10%" }}>
            <h2 class="subhead" style={{ color: "#000080", marginBottom: "5%" }}>
              Hospital Name
            </h2>
            <h3>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </h3>

            <div class="hero-cta">
              <a href="#" class="primary-cta">
                Know more
              </a>
            </div>
          </div>

          <img src={animate} class="hero-img" alt="Illustration" />
        </div>
      </section>
    </div>
  );
}
