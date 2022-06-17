import React from "react";
// import AwesomeSlider from "react-awesome-slider";
import { GlobalContext } from "../../GlobalData";

import Login from "../../Common/Login";



export default function Booking() {


  const { HospitalId} = React.useContext(GlobalContext)

  if ( HospitalId === "") return <Login/>

  else{

  
  return (
    <>
      beds
    </>
  );
}
}




