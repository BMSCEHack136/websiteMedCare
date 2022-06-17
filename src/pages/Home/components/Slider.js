import React, { useEffect, useState, useRef } from "react";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import pic2 from "../Assets/picture2.jpg";
import pic3 from "../Assets/picture3.jpg";
import pic1 from "../Assets/picture1.jpg";
export default function Slider() {
  //   <script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>;
  const autoPlayRef = useRef();

  return (
    <AwesomeSlider
      style={{
        marginTop: 0.1,
        border: "20px solid rgba(175,167,255,0.2)",
        borderRadius: "3%",
        marginTop: "10%",
        width: "72%",
        marginLeft: "14%",
        marginRight: "14%",
      }}
    >
      <div>
        <img src={pic1} />
      </div>
      <div>
        <img src={pic2} />
      </div>
      <div>
        <img src={pic3} />
      </div>
    </AwesomeSlider>
  );
}
