import React, { createContext, useState } from "react";

import useLocalStorage from "./hooks/useLocalStorage"
const GlobalContext = createContext();

const GlobalData = (props) => {

  const [HospitalId,setHospitaId] = useLocalStorage("HospitalId","")






  const [tem,setTem] = useState("tem")
  return (
    <GlobalContext.Provider value={{
      HospitalId,
      setHospitaId
    }}>{props.children}</GlobalContext.Provider>
  );
};

export { GlobalData, GlobalContext };
