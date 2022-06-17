import React from "react";
// import AwesomeSlider from "react-awesome-slider";

import Header from "../Home/components/Header";
import Footer from "../Home/components/Footer";
import Slider from "../Home/components/Slider";
import Review from "./components/Testimoniels/Review";
import Section1 from "../Home/components/section/Section1";

export default function Home() {
  return (
    <>
      <Header />
      <Slider />
      <Section1 />
      <Review />
    </>
  );
}
