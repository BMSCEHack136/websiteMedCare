import React, { useState } from "react";
import Login from "../../Common/Login";
import { GlobalContext } from "../../GlobalData";
// import "../Beds/style.css";

export default function Schedule() {
  const { HospitalId} = React.useContext(GlobalContext)

  if ( HospitalId === "") return <Login/>

  else{
    return(

      <div>
        schedule
      </div>
    )
  }

}