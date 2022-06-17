import React, { useState } from "react";
import Login from "../../Common/Login";
import { GlobalContext } from "../../GlobalData";
// import "../Beds/style.css";

export default function Beds() {
  const { HospitalId} = React.useContext(GlobalContext)

  if ( HospitalId == "") return <Login/>

  else{
    return(

      <div>
        BED
      </div>
    )
  }

}