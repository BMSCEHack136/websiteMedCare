import React from "react";
// import AwesomeSlider from "react-awesome-slider";

import Header from "../Home/components/Header";
import Footer from "../Home/components/Footer";
import Slider from "../Home/components/Slider";
import Review from "../Home/components/Review";
import "../Home/components/index2.css";

export default function Home() {
  return (
    <>
      <Slider />
      <Header />
      <Review />
    </>
  );
}
