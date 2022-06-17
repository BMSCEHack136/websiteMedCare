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
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore"
              </blockquote>
              <cite>- Jane Doe</cite>
            </li>
            <li>
            <img src={animepic} />
              <blockquote>
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore"
              </blockquote>
              <cite>- Jane Doe</cite>
            </li>
            <li>
            <img src={animepic} />
              <blockquote>
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore"
              </blockquote>
              <cite>- Jane Doe</cite>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
