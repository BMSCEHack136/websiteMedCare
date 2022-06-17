import React from "react";
// import AwesomeSlider from "react-awesome-slider";
import { GlobalContext } from "../../GlobalData";

import Header from "../Home/components/Header";
import Footer from "../Home/components/Footer";
import Slider from "../Home/components/Slider";
import Review from "../Home/components/Review";
import "../Home/components/index2.css";
import Login from "../../Common/Login";

export default function Home() {

  const { HospitalId} = React.useContext(GlobalContext)

  if ( HospitalId == "") return <Login/>

  else{
    return(

      <div>
        Home
      </div>
    )
  }


}