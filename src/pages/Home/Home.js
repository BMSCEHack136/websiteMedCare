import React from "react";
// import AwesomeSlider from "react-awesome-slider";
import { GlobalContext } from "../../GlobalData";
import { GlobalContext } from "../../GlobalData";
import Login from "../../Common/Login";

import Header from "../Home/components/Header";
import Footer from "../Home/components/Footer";
import Slider from "../Home/components/Slider";
import Review from "./components/Testimoniels/Review";
import Section1 from "../Home/components/section/Section1";

export default function Home() {


  const { HospitalId} = React.useContext(GlobalContext)

  if ( HospitalId === "") return <Login/>

  else{

  
  return (
    <>
      <Header />
      <Slider />
      <Section1 />
      <Review />
    </>
  );
}
}




