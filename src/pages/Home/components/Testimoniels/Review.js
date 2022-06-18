import React from "react";
import "../Testimoniels/Review.css";
import animepic from "./animepic.jpg"
export default function Review() {
  return (
    <div>
      <section className="testimonials-section">
        <div className="container">
          <h2>Testimonials</h2>
          <ul>
            <li>
            <img src={animepic} />
              <blockquote>
               
"We sincerely thank you for an excellent, selfless and very valuable service.
Truely MedCare is just great on this humble vision and mission."


              </blockquote>
              <cite>- Jane Doe</cite>
            </li>
            <li>
            <img src={animepic} />
              <blockquote>
                
"I have been associated with ‘Medcare’ for a few months now.
 I have referred many of my patients to this organization.
 I have received a very good feedback from such patients." 
              </blockquote>
              <cite>- Jane Doe</cite>
            </li>
            <li>
            <img src={animepic} />
              <blockquote>
              "Medcare are very professional, compassionate and take excellent care. Thank you for the service, MedCare."
              </blockquote>
              <cite>- Jane Doe</cite>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
