import React, { useState } from "react";
import "../Beds/style.css";
import { GlobalContext } from "../../GlobalData";
import Login from "../../Common/Login";


export default function Beds() {
  const { HospitalId} = React.useContext(GlobalContext)

  if ( HospitalId === "") return <Login/>

  else{
    return(

      <div>
        BED
      </div>
    )
  }

}