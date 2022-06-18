import React from "react";
import animate from "../../Assets/animation2.gif";
import "../section/section1.css";
export default function () {
  return (
    <div>
      <section class="hero">
        <div class="container">
          <div class="left-col" style={{ marginLeft: "10%" }}>
            <h2
              class="subhead"
              style={{ color: "#000080", marginBottom: "5%" }}
            >
              Hospital Name
            </h2>
            <h3>
              MedCare is a personalized and professional health Care management
              service which enables the customers to directly access the
              availability of different sections. Some of the key medical
              services offered are checking the details of the upcoming
              Appointments scheduled,availability and details of the beds in the
              particular Hospital. We also provide a mobile based app to the
              customers which enables them to schedule Appointments, buy medical
              products and call for an ambulance.
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
